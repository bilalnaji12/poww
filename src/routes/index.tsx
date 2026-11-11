import { createFileRoute } from "@tanstack/react-router";
import { FAQ } from "@/components/pawmade/FAQ";
import { Features } from "@/components/pawmade/Features";
import { Footer } from "@/components/pawmade/Footer";
import { GiftGuide } from "@/components/pawmade/GiftGuide";
import { Hero } from "@/components/pawmade/Hero";
import { ProductCard, type Product } from "@/components/pawmade/ProductCard";
import { StoryBanner } from "@/components/pawmade/StoryBanner";
import catPuzzle from "@/assets/cat-puzzle.png";
import cardBgDay from "@/assets/card-bg-day.webp";
import cardBgEvening from "@/assets/card-bg-evening.webp";
import dogPuzzle from "@/assets/dog-puzzle.png";
import heroImage from "@/assets/hero-cat-dog.webp";
import { SITE_URL } from "@/lib/seo";

const products: Product[] = [
  {
    label: "For cat lovers",
    name: "The Calico",
    subtitle: "Wooden cat-shaped puzzle",
    description:
      "A playful, hands-on puzzle for quiet afternoons and anyone who has a soft spot for cats.",
    details: "135 pieces · Cat-shaped design",
    image: catPuzzle,
    imageAlt: "The Calico wooden cat-shaped jigsaw puzzle",
    background: cardBgDay,
    link: "/go/cat",
    kind: "cat",
  },
  {
    label: "For dog lovers",
    name: "The Pup",
    subtitle: "Wooden dog puzzle",
    description:
      "A thoughtful gift idea for dog people who enjoy a satisfying little challenge.",
    details: "Dog-inspired design · Hands-on fun",
    image: dogPuzzle,
    imageAlt: "The Pup wooden dog puzzle",
    background: cardBgEvening,
    link: "/go/dog",
    kind: "dog",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Pawmade",
      url: `${SITE_URL}/`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Pawmade",
      url: `${SITE_URL}/`,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "ItemList",
      name: "Pet-inspired puzzle gifts from Pawmade",
      itemListOrder: "https://schema.org/ItemListUnordered",
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.name,
          description: product.description,
          image: new URL(product.image, SITE_URL).href,
          category: "Wooden jigsaw puzzle",
          brand: { "@type": "Brand", name: "Pawmade" },
        },
      })),
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wooden Cat & Dog Puzzle Gifts | Pawmade" },
      {
        name: "description",
        content:
          "Explore playful wooden cat and dog puzzle gifts from Pawmade. Find a thoughtful, screen-free gift for cat lovers, dog lovers, and puzzle fans.",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Wooden Cat & Dog Puzzle Gifts | Pawmade" },
      {
        property: "og:description",
        content: "Playful wooden cat and dog puzzle gifts for the animal lovers in your life.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:site_name", content: "Pawmade" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: `${SITE_URL}/social-card.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:alt", content: "A cat and dog resting together, for pet lovers" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Wooden Cat & Dog Puzzle Gifts | Pawmade" },
      {
        name: "twitter:description",
        content: "Playful wooden cat and dog puzzle gifts for the animal lovers in your life.",
      },
      { name: "twitter:image", content: `${SITE_URL}/social-card.jpg` },
      { name: "twitter:image:alt", content: "A cat and dog resting together, for pet lovers" },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "preload", as: "image", href: heroImage },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <main id="main-content">
        <Hero />
        <section
          id="shop"
          aria-labelledby="shop-heading"
          className="mx-auto max-w-7xl scroll-mt-6 px-5 pt-7 sm:px-6 md:px-12 md:pt-12"
        >
          <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                A little something they’ll love
              </p>
              <h2
                id="shop-heading"
                className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl"
              >
                Find their kind of happy.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Two playful wooden puzzle ideas, picked for the people who love cats and dogs.
            </p>
          </div>
          <div className="grid min-w-0 gap-4 md:grid-cols-2 md:gap-5">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
          <p className="mt-4 text-center text-[11px] leading-relaxed text-muted-foreground">
            The product buttons above are affiliate links. A purchase may earn Pawmade a
            commission at no extra cost to you.
          </p>
        </section>

        <Features />
        <GiftGuide />
        <StoryBanner />
        <FAQ />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
