import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-cat-dog.webp";
import { Header } from "./Header";

export function Hero() {
  return (
    <section className="hero-section relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1024}
        fetchPriority="high"
        decoding="async"
        className="hero-image absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />
      <Header />

      <div className="hero-content relative z-10 mx-auto flex w-full max-w-7xl items-center px-5 pb-16 pt-12 sm:px-6 md:min-h-[510px] md:px-12 md:pb-24 md:pt-8">
        <div className="hero-copy max-w-[610px]">
          <p className="eyebrow mb-5 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/75 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/75 backdrop-blur-sm sm:text-xs">
            <span className="size-1.5 rounded-full bg-accent" />
            Thoughtful finds for animal people
          </p>
          <h1 className="max-w-[620px] text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-foreground">
            Little gifts.
            <br />
            <span className="hero-accent relative inline-block">Big feelings.</span>
          </h1>
          <p className="mt-6 max-w-[420px] text-[15px] leading-relaxed text-foreground/80 sm:mt-7 sm:text-lg">
            Pet-inspired puzzles and playful finds for the people who never stop talking about
            their pets.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
            <Button
              variant="pill"
              size="xl"
              className="hero-primary-button min-h-12 px-6 text-sm sm:text-base"
              asChild
            >
              <a href="#shop">
                Find your favorite <ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <a
              href="#gift-guide"
              className="hero-secondary-link inline-flex min-h-11 items-center gap-2 px-2 text-sm font-semibold"
            >
              Explore the gift guide <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>
          <div className="hero-note mt-7 flex items-center gap-2 text-xs font-medium text-foreground/70 sm:mt-9 sm:text-sm">
            <span className="hero-note-icon grid size-7 place-items-center rounded-full bg-background/75">
              ✳
            </span>
            A little screen-free joy, made for pet people.
          </div>
        </div>
      </div>
      <div className="hero-bottom-fade pointer-events-none absolute inset-x-0 bottom-0 h-24" aria-hidden="true" />
    </section>
  );
}
