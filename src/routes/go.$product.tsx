import { createFileRoute, notFound } from "@tanstack/react-router";
import { useEffect } from "react";

// Amazon affiliate links, keyed by the /go/<key> URL.
const AMAZON_LINKS: Record<string, string> = {
  cat: "https://link.amazon/B0915RaM5",
  dog: "https://link.amazon/B0f5QFRZg",
};

const REDIRECT_DELAY_MS = 3000;

export const Route = createFileRoute("/go/$product")({
  head: () => ({
    meta: [
      { title: "Taking you to Amazon… | Pawmade" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  beforeLoad: ({ params }) => {
    if (!AMAZON_LINKS[params.product]) throw notFound();
  },
  component: GoPage,
});

function GoPage() {
  const { product } = Route.useParams();
  const link = AMAZON_LINKS[product];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (link) window.location.replace(link);
    }, REDIRECT_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [link]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center text-foreground">
      <img
        src="https://media.tenor.com/OoG1CF2T3QIAAAAj/kucing-scuba-scuba-cat.gif"
        alt="A cat in scuba gear swimming"
        width={220}
        height={220}
        className="h-auto w-[220px] max-w-full"
      />
      <h1 className="mt-6 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
        Wait 3 seconds…
      </h1>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">
        We’re taking you to Amazon.
      </p>
      <a
        href={link}
        rel="sponsored nofollow noopener noreferrer"
        className="mt-6 text-xs text-muted-foreground underline underline-offset-4"
      >
        Not redirected? Click here.
      </a>
    </main>
  );
}
