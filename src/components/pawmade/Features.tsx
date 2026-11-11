import { Brain, Gift, Heart, Smartphone } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "A screen-free pause",
    text: "A simple reason to slow down and switch off.",
  },
  {
    icon: Gift,
    title: "An easy gift idea",
    text: "A thoughtful pick for the cat or dog person in your life.",
  },
  {
    icon: Brain,
    title: "A satisfying challenge",
    text: "Enjoy the little wins, one piece at a time.",
  },
  {
    icon: Heart,
    title: "Made for pet people",
    text: "Small details inspired by the animals we love.",
  },
];

export function Features() {
  return (
    <section id="why-pawmade" className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:px-12 md:py-20">
      <div className="mx-auto mb-8 max-w-xl text-center sm:mb-10">
        <p className="eyebrow text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          The little things
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
          A better kind of break.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Not every gift has to be big. Sometimes it just needs to feel like them.
        </p>
      </div>
      <div className="feature-grid grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="feature-item flex min-w-0 flex-col items-start rounded-2xl border border-border/70 bg-card/75 p-4 sm:p-6"
          >
            <span className="feature-icon mb-5 grid size-10 place-items-center rounded-xl bg-secondary text-foreground sm:size-11">
              <Icon className="size-5" strokeWidth={1.7} aria-hidden="true" />
            </span>
            <h3 className="text-sm font-semibold leading-snug sm:text-base">{title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
