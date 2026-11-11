import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "Where do I buy a Pawmade puzzle?",
    answer:
      "Use the View on Amazon link on the product card you like. It opens the retailer listing, where you can review the full product details and place an order.",
  },
  {
    question: "Are the prices on this page final?",
    answer:
      "No. Prices, promotions, shipping options, and stock can change. The retailer listing shows the latest information before you buy.",
  },
  {
    question: "How do I choose between the cat and dog puzzle?",
    answer:
      "Choose the Calico for someone who loves cats, or the Pup for someone who loves dogs. Open each listing to check its current piece count, dimensions, materials, and other product details.",
  },
  {
    question: "Does Pawmade sell or ship the products directly?",
    answer:
      "This page introduces selected products and links to third-party retailer listings. The retailer handles checkout, fulfilment, returns, and customer-service details.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-5 py-14 sm:px-6 md:py-20">
      <div className="mx-auto max-w-xl text-center">
        <p className="eyebrow text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          Good to know
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
          A few helpful answers.
        </h2>
      </div>
      <div className="mt-8 divide-y divide-border border-y border-border">
        {questions.map(({ question, answer }) => (
          <details key={question} className="faq-item group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold sm:text-base">
              {question}
              <ChevronDown
                className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="max-w-3xl pr-8 pt-3 text-sm leading-relaxed text-muted-foreground">
              {answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
