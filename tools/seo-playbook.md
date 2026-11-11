# Pawmade SEO maintenance kit

This directory is a lightweight, dependency-free toolkit. It is designed to catch technical regressions and keep future content focused on search intent—not to promise rankings or fabricate search-volume numbers.

## Commands

```bash
# Build the current page and refresh public/sitemap.xml
npm run build

# List large images in src/assets and public
npm run seo:assets

# Start a local production preview in terminal 1
npm run preview

# Audit the preview in terminal 2
npm run seo:audit

# Audit a deployed site instead
npm run seo:audit -- --url=https://your-domain.example

# Regenerate sitemap after changing the route list or domain
VITE_SITE_URL=https://your-domain.example npm run seo:sitemap
```

Set `VITE_SITE_URL` in the deployment environment to the canonical production origin. The current fallback is `https://pawmade-site.pawmade.workers.dev`. Keep the canonical URL, `public/robots.txt`, generated sitemap, and social image hosted on the same verified production domain.

## Included files

- `seo-audit.mjs`: checks status, title, description, canonical origin, mobile viewport, language, H1 count, Open Graph metadata, JSON-LD parsing, image alt/dimensions, in-page anchors, affiliate disclosure, robots, sitemap, and social-image response.
- `generate-sitemap.mjs`: creates the XML sitemap from the explicit route list in `seo-config.mjs`.
- `asset-audit.mjs`: reports oversized image assets before they become a mobile performance problem.
- `keyword-map.csv`: a starting keyword-to-page map. Search-volume cells are intentionally blank until verified in Search Console or a keyword research source.
- `content-brief-template.md`: a repeatable quality gate for new pages and articles.

## Recommended operating loop

1. Before editing, run `npm test`, `npm run lint`, and `npm run build`.
2. After editing, run the same checks, then `npm run seo:assets`.
3. Run `npm run preview` and `npm run seo:audit` against the production build.
4. Use Google Search Console to verify the domain, inspect the homepage URL, submit `/sitemap.xml`, and review indexing and Core Web Vitals data.
5. After each meaningful release, check Search Console for crawl errors, mobile usability signals, query impressions, clicks, and pages with falling performance.
6. Add a new URL only when it has a distinct search intent and enough original information to deserve its own page. Update `publicRoutes` in `seo-config.mjs`; the build regenerates the sitemap.

## Non-negotiable quality rules

- Never invent reviews, sales counts, stock warnings, shipping guarantees, discounts, product certifications, or specifications.
- Verify product details on the live retailer listing before publishing them. Prices and availability change; this page intentionally asks visitors to check the retailer for current values.
- Keep affiliate links clearly disclosed near the link, include Amazon's required wording (“As an Amazon Associate I earn from qualifying purchases.”), and mark links with `rel="sponsored nofollow"`.
- Do not create doorway pages by swapping "cat" for "dog" in otherwise identical copy.
- Do not add hidden keywords, forced keyword density, auto-generated thin articles, fake schema ratings, or animations that block content rendering.
- Use one descriptive H1, useful headings, descriptive internal-link text, and concise page metadata.
- Motion is decorative only. Respect `prefers-reduced-motion`; the content remains visible without animation.
