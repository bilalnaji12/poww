import { ArrowRight, Cat, Dog } from "lucide-react";

export function GiftGuide() {
  return (
    <section
      id="gift-guide"
      className="gift-guide-section mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-12 md:py-20"
    >
      <div className="grid items-start gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div>
          <p className="eyebrow text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            A guide to gifting
          </p>
          <h2 className="mt-3 max-w-md text-3xl font-semibold leading-[1.06] tracking-[-0.05em] sm:text-4xl">
            For the person whose camera roll is all pets.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Finding a gift for an animal lover can be easier when it reflects the companion they
            adore. Start with the cat person or the dog person—and choose the little puzzle that
            feels right.
          </p>
          <a
            href="#shop"
            className="guide-link mt-6 inline-flex items-center gap-2 text-sm font-semibold"
          >
            Browse both puzzles <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          <article className="guide-card rounded-2xl border border-border/70 bg-card p-5 sm:p-6">
            <span className="mb-5 grid size-10 place-items-center rounded-xl bg-secondary">
              <Cat className="size-5" aria-hidden="true" />
            </span>
            <h3 className="text-lg font-semibold tracking-tight">For cat lovers</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A wooden cat puzzle is a playful gift idea for someone who loves feline details and
              a calm, hands-on activity.
            </p>
          </article>
          <article className="guide-card rounded-2xl border border-border/70 bg-card p-5 sm:p-6">
            <span className="mb-5 grid size-10 place-items-center rounded-xl bg-secondary">
              <Dog className="size-5" aria-hidden="true" />
            </span>
            <h3 className="text-lg font-semibold tracking-tight">For dog lovers</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A wooden dog puzzle makes a thoughtful nod to the dog they adore—and gives them
              something enjoyable to build.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
