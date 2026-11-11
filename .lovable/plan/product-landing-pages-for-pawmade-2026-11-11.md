# Product landing pages for Pawmade

## Step 1 - Bring in your project
Load the uploaded Pawmade project into this workspace exactly as it is (leaving out its internal history files). Nothing in it is edited apart from what is listed below.

## Step 2 - Two new pages
- `yourwebsite.com/cat-wooden-puzzle/` - The Calico
- `yourwebsite.com/dog-wooden-puzzle/` - The Pup

Each page uses only the product's existing photo, background, wording ("For cat lovers", name, subtitle, description, details) and the site's current colors and fonts. No new images, no reworded copy, no new colors.

Page layout, built for phones first:
1. Same site header as the home page.
2. Large product photo over its existing card background, with the label, name, subtitle and details.
3. A large "Buy on Amazon" button that goes through the existing 3-second redirect page (`/go/cat` or `/go/dog`), so your affiliate links stay the same.
4. Description and details, plus the existing Features and FAQ sections from the home page.
5. A small "You might also love" card linking to the other puzzle's page.
6. A buy button that stays pinned to the bottom of the screen on phones, so it is always one tap away.
7. The existing affiliate notice and footer.

Phone details: big tap targets, no sideways scrolling, sharp images that load fast, readable text sizes, and room left for the iPhone home bar.

## Step 3 - Search and sharing
Each page gets its own title, description, share preview (using the existing product photo), canonical link and product data for Google. Both pages are added to the sitemap.

## What stays the same
The home page, the redirect pages, every image, every piece of text and every color are left as they are. The home page product buttons still go straight to Amazon.

## Technical details
- New route files `src/routes/cat-wooden-puzzle.tsx` and `src/routes/dog-wooden-puzzle.tsx`, with product data moved to a shared `src/lib/products.ts` so the home page and the new pages use the same values (home page output unchanged).
- Shared `ProductLanding` component under `src/components/pawmade/`, styled only with the existing color tokens and product-card classes.
- Trailing-slash URLs work through the router's normal path handling.
- Add both URLs to `public/sitemap.xml`.
