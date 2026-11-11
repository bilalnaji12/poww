import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { publicRoutes, siteUrl } from "./seo-config.mjs";

const escapeXml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

const urls = publicRoutes.map((route) => `  <url>\n    <loc>${escapeXml(`${siteUrl}${route.path}`)}</loc>\n  </url>`);
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;

await Promise.all([
  writeFile(resolve("public/sitemap.xml"), xml, "utf8"),
  writeFile(resolve("public/robots.txt"), robots, "utf8"),
]);
console.log(`Sitemap and robots.txt generated for ${siteUrl} (${publicRoutes.length} URL${publicRoutes.length === 1 ? "" : "s"}).`);
