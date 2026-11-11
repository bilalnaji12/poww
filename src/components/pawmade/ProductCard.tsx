import { ArrowUpRight, Check, PawPrint, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Product = {
  label: string;
  name: string;
  subtitle: string;
  description: string;
  details: string;
  image: string;
  imageAlt: string;
  background: string;
  link: string;
  kind: "cat" | "dog";
};

export function ProductCard({ product }: { product: Product }) {
  const BadgeIcon = product.kind === "cat" ? PawPrint : Sparkles;

  return (
    <article
      className={`product-card product-card-${product.kind} group relative isolate flex min-w-0 flex-col overflow-hidden rounded-[26px] sm:rounded-[30px]`}
    >
      <img
        src={product.background}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        width={1024}
        height={704}
        className="product-card-background absolute inset-0 h-full w-full object-cover"
      />
      <div className="product-card-wash absolute inset-0" aria-hidden="true" />

      <div className="product-image-wrap relative z-10 flex h-[218px] items-center justify-center px-5 pt-5 sm:h-[250px] md:absolute md:inset-y-0 md:right-0 md:h-full md:w-[54%] md:px-2 md:py-5">
        <img
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
          decoding="async"
          width={600}
          height={600}
          className="product-image h-full w-full object-contain drop-shadow-xl transition-transform duration-500 ease-out motion-safe:group-hover:-translate-y-2 motion-safe:group-hover:scale-[1.035]"
        />
      </div>

      <div className="product-copy relative z-10 flex flex-1 flex-col px-6 pb-7 pt-2 sm:px-8 sm:pb-8 md:min-h-[405px] md:max-w-[56%] md:justify-center md:px-9 md:py-9">
        <span className="product-label inline-flex w-fit items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-foreground shadow-sm backdrop-blur-sm">
          <BadgeIcon className="size-3.5" aria-hidden="true" /> {product.label}
        </span>
        <h3 className="mt-4 text-[30px] font-semibold leading-none tracking-[-0.05em] sm:text-[34px]">
          {product.name}
        </h3>
        <p className="mt-2 text-sm font-semibold text-foreground/75 sm:text-base">
          {product.subtitle}
        </p>
        <p className="mt-4 max-w-[330px] text-[14px] leading-relaxed text-foreground/75 sm:text-[15px]">
          {product.description}
        </p>
        <p className="mt-4 flex items-center gap-2 text-xs font-medium text-foreground/65 sm:text-sm">
          <Check className="size-4 shrink-0 text-accent" aria-hidden="true" /> {product.details}
        </p>
        <Button
          variant="pill"
          size="md"
          className="product-button mt-6 min-h-12 w-full justify-between px-5 sm:w-fit sm:min-w-[205px]"
          asChild
        >
          <a
            href={product.link}
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            aria-label={`View ${product.name} on Amazon`}
          >
            View on Amazon <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
        <span className="mt-3 text-[11px] leading-relaxed text-foreground/55">
          Affiliate link. Check current price and availability on Amazon.
        </span>
      </div>
    </article>
  );
}
