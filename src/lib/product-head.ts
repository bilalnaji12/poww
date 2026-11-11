import type { Product } from "@/components/pawmade/ProductCard";
import { SITE_URL } from "@/lib/seo";

export function productHead(product: Product, path: string, title: string) {
  const url = `${SITE_URL}${path}`;
  const image = new URL(product.image, SITE_URL).href;
  const desc = `${product.subtitle}. ${product.description}`;
  return {
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "product" },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: desc },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.description,
          image,
          category: "Wooden jigsaw puzzle",
          brand: { "@type": "Brand", name: "Pawmade" },
        }),
      },
    ],
  };
}
