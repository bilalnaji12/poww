#!/usr/bin/env node
import { siteUrl as configuredSiteUrl } from "./seo-config.mjs";

const baseUrl = (process.argv.find((arg) => arg.startsWith("--url="))?.split("=").slice(1).join("=") || process.env.AUDIT_URL || "http://localhost:4173").replace(/\/+$/, "");
const failures = [];
const warnings = [];
const passed = [];

function check(condition, label, detail = "") {
  const suffix = detail ? ` — ${detail}` : "";
  (condition ? passed : failures).push(`${condition ? "PASS" : "FAIL"} ${label}${suffix}`);
}

function warn(condition, label, detail = "") {
  if (!condition) warnings.push(`WARN ${label}${detail ? ` — ${detail}` : ""}`);
  else passed.push(`PASS ${label}`);
}

function attribute(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, "i"));
  return match?.[1] ?? match?.[2] ?? match?.[3] ?? null;
}

function metaContent(html, key, value) {
  const tags = html.match(/<meta\b[^>]*>/gi) || [];
  const tag = tags.find((candidate) => attribute(candidate, key)?.toLowerCase() === value.toLowerCase());
  return tag ? attribute(tag, "content") : null;
}

async function get(path) {
  const response = await fetch(new URL(path, `${baseUrl}/`), { redirect: "follow" });
  return response;
}

try {
  const response = await get("/");
  const html = await response.text();
  check(response.status === 200, "Homepage returns HTTP 200", `received ${response.status}`);

  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/\s+/g, " ").trim() || "";
  const description = metaContent(html, "name", "description") || "";
  const canonicalTag = (html.match(/<link\b[^>]*rel=["']canonical["'][^>]*>/i) || [])[0] || "";
  const canonical = attribute(canonicalTag, "href");
  const viewport = metaContent(html, "name", "viewport") || "";
  const language = html.match(/<html\b[^>]*>/i)?.[0] || "";
  const lang = attribute(language, "lang");
  const h1s = html.match(/<h1\b/gi) || [];
  const ogImage = metaContent(html, "property", "og:image");
  const ogTitle = metaContent(html, "property", "og:title");
  const jsonLdBlocks = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  const imageTags = html.match(/<img\b[^>]*>/gi) || [];
  const anchors = html.match(/<a\b[^>]*>/gi) || [];
  const ids = new Set([...html.matchAll(/\bid=["']([^"']+)["']/gi)].map((match) => match[1]));

  check(title.length >= 25 && title.length <= 65, "Title length is in a useful range", `${title.length} characters`);
  check(description.length >= 110 && description.length <= 170, "Meta description is present and concise", `${description.length} characters`);
  check(
    canonical === `${configuredSiteUrl}/`,
    "Canonical URL matches the configured production homepage",
    canonical || "missing",
  );
  check(viewport.includes("width=device-width"), "Mobile viewport is configured");
  check(lang === "en", "HTML language is set", lang || "missing");
  check(h1s.length === 1, "Exactly one H1 exists", `${h1s.length} found`);
  check(Boolean(ogTitle) && Boolean(ogImage), "Open Graph title and image are present");
  check(jsonLdBlocks.length > 0, "JSON-LD structured data is present");

  for (const [index, block] of jsonLdBlocks.entries()) {
    try {
      JSON.parse(block[1]);
      passed.push(`PASS JSON-LD block ${index + 1} parses`);
    } catch (error) {
      failures.push(`FAIL JSON-LD block ${index + 1} parses — ${error.message}`);
    }
  }

  let missingAlt = 0;
  let missingDimensions = 0;
  for (const tag of imageTags) {
    if (attribute(tag, "alt") === null) missingAlt += 1;
    if (!attribute(tag, "width") || !attribute(tag, "height")) missingDimensions += 1;
  }
  check(missingAlt === 0, "All images have an alt attribute", `${missingAlt} missing`);
  warn(missingDimensions === 0, "Images declare intrinsic width and height", `${missingDimensions} missing`);

  const placeholderLinks = anchors.filter((tag) => attribute(tag, "href") === "#").length;
  check(placeholderLinks === 0, "No placeholder links point to #", `${placeholderLinks} found`);

  const missingAnchors = anchors
    .map((tag) => attribute(tag, "href"))
    .filter((href) => href?.startsWith("#") && href.length > 1 && !ids.has(decodeURIComponent(href.slice(1))));
  check(missingAnchors.length === 0, "All in-page links target an existing ID", missingAnchors.join(", ") || "all anchors resolved");

  const affiliateLinks = anchors.filter((tag) => /link\.amazon\//i.test(attribute(tag, "href") || ""));
  const affiliateDisclosure = /As an Amazon Associate I earn from qualifying purchases\./i.test(html);
  const linkLevelDisclosure = /Affiliate link/i.test(html);
  check(
    affiliateLinks.length > 0 && affiliateDisclosure && linkLevelDisclosure,
    "Amazon affiliate links have site-wide and nearby disclosures",
    `${affiliateLinks.length} retailer links found`,
  );
  warn(affiliateLinks.every((tag) => /sponsored/i.test(attribute(tag, "rel") || "")), "Affiliate links use rel=sponsored");

  const robotResponse = await get("/robots.txt");
  const robotsText = await robotResponse.text();
  check(
    robotResponse.ok && robotsText.includes(`Sitemap: ${configuredSiteUrl}/sitemap.xml`),
    "robots.txt references the configured sitemap",
  );

  const sitemapResponse = await get("/sitemap.xml");
  const sitemapText = await sitemapResponse.text();
  check(sitemapResponse.ok && /<urlset[\s>]/i.test(sitemapText), "XML sitemap is served");
  check(
    sitemapText.includes(`<loc>${configuredSiteUrl}/</loc>`),
    "Sitemap contains the configured canonical homepage",
  );

  const socialImageUrl = ogImage ? new URL(ogImage, baseUrl) : null;
  if (socialImageUrl) {
    const socialImageResponse = await get(socialImageUrl.pathname);
    warn(socialImageResponse.ok, "Open Graph image is included in the local preview", `${socialImageResponse.status} ${socialImageUrl.pathname}`);
  }

  console.log(`\nPawmade SEO audit: ${baseUrl}\n`);
  console.log([...passed, ...warnings, ...failures].join("\n"));
  console.log(`\nResult: ${passed.length} passed, ${warnings.length} warnings, ${failures.length} failures.`);
  if (failures.length) process.exitCode = 1;
} catch (error) {
  console.error(`SEO audit could not complete: ${error.message}`);
  console.error(`Start the preview server first, then run: npm run seo:audit -- --url=${baseUrl}`);
  process.exitCode = 1;
}
