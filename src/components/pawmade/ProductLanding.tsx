import { ArrowUpRight, Check, PawPrint, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQ } from "./FAQ";
import { Features } from "./Features";
import { Footer } from "./Footer";
import { PawLogo } from "./icons";
import type { Product } from "./ProductCard";

export function ProductLanding({
  product,
  other,
  otherPath,
}: {
  product: Product;
  other: Product;
  otherPath: string;
}) {
  const BadgeIcon = product.kind === "cat" ? PawPrint : Sparkles;
  const buy = (className: string) => (
    <Button variant="pill" size="md" className={className} asChild>
      <a
        href={product.link}
        target="_blank"
        rel="sponsored nofollow noopener noreferrer"
        aria-label={`View ${product.name} on Amazon`}
      >
        View on Amazon <ArrowUpRight aria-hidden="true" />
      </a>
    </Button>
  );

  return (
    <div className="min-h-screen overflow-x-clip bg-background pb-24 text-foreground md:pb-0">
      <header className="site-header relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between gap-2 px-4 py-4 sm:px-6 md:px-12 md:py-6">
        <a href="/" className="flex items-center gap-2 text-foreground" aria-label="Pawmade home">
          <PawLogo className="size-7 sm:size-9" />
          <span className="text-[20px] font-semibold tracking-[-0.04em] sm:text-[25px]">Pawmade</span>
        </a>
        <a
          href="/#shop"
          className="header-cta inline-flex min-h-10 items-center gap-1.5 rounded-full px-4 text-xs font-semibold sm:text-sm"
        >
          Shop <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <article
            className={`product-card product-card-${product.kind} relative isolate grid overflow-hidden rounded-[26px] sm:rounded-[30px] md:grid-cols-2`}
          >
            <img
              src={product.background}
              alt=""
              aria-hidden="true"
              width={1024}
              height={704}
              className="product-card-background absolute inset-0 h-full w-full object-cover"
            />
            <div className="product-card-wash absolute inset-0" aria-hidden="true" />
            <div className="relative z-10 flex h-[300px] items-center justify-center p-5 sm:h-[380px] md:order-2 md:h-[560px]">
              <img
                src={product.image}
                alt={product.imageAlt}
                fetchPriority="high"
                width={600}
                height={600}
                className="h-full w-full object-contain drop-shadow-xl"
              />
            </div>
            <div className="product-copy relative z-10 flex flex-col px-6 pb-8 sm:px-10 md:justify-center md:py-12">
              <span className="product-label inline-flex w-fit items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-foreground shadow-sm backdrop-blur-sm">
                <BadgeIcon className="size-3.5" aria-hidden="true" /> {product.label}
              </span>
              <h1 className="mt-4 text-[38px] font-semibold leading-none tracking-[-0.05em] sm:text-5xl md:text-6xl">
                {product.name}
              </h1>
              <p className="mt-3 text-base font-semibold text-foreground/75 sm:text-lg">
                {product.subtitle}
              </p>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-foreground/75 sm:text-base">
                {product.description}
              </p>
              <p className="mt-4 flex items-center gap-2 text-sm font-medium text-foreground/65">
                <Check className="size-4 shrink-0 text-accent" aria-hidden="true" /> {product.details}
              </p>
              {buy("product-button mt-7 min-h-14 w-full justify-between px-6 text-base sm:w-fit sm:min-w-[240px]")}
              <span className="mt-3 text-[11px] leading-relaxed text-foreground/55">
                Affiliate link. Check current price and availability on Amazon.
              </span>
            </div>
          </article>
        </section>

        <Features />
        <FAQ />

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:px-12">
          <a
            href={otherPath}
            className={`product-card product-card-${other.kind} relative isolate flex items-center gap-4 overflow-hidden rounded-[26px] p-4 sm:p-6`}
          >
            <img src={other.background} alt="" aria-hidden="true" loading="lazy" className="product-card-background absolute inset-0 h-full w-full object-cover" />
            <div className="product-card-wash absolute inset-0" aria-hidden="true" />
            <img src={other.image} alt={other.imageAlt} loading="lazy" width={600} height={600} className="relative z-10 size-24 object-contain sm:size-32" />
            <div className="relative z-10 min-w-0 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">{other.label}</p>
              <p className="mt-1 text-2xl font-semibold tracking-[-0.04em]">{other.name}</p>
              <p className="text-sm text-foreground/75">{other.subtitle}</p>
            </div>
            <ArrowUpRight className="relative z-10 size-5 shrink-0" aria-hidden="true" />
          </a>
          <p className="mt-6 text-center text-[11px] leading-relaxed text-muted-foreground">
            The product buttons above are affiliate links. A purchase may earn Pawmade a
            commission at no extra cost to you.
          </p>
        </section>
      </main>
      <Footer />

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
        <div className="flex items-center gap-3">
          <img src={product.image} alt="" aria-hidden="true" className="size-11 shrink-0 object-contain" />
          <p className="min-w-0 flex-1 truncate text-sm font-semibold">{product.name}</p>
          {buy("product-button min-h-12 shrink-0 px-5")}
        </div>
      </div>
    </div>
  );
}
