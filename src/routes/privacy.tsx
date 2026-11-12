import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/pawmade/Footer";
import { Header } from "@/components/pawmade/Header";
import { SITE_URL } from "@/lib/seo";

const title = "Privacy Policy — Pawmade";
const description =
  "How Pawmade handles visitor information: cookie-free analytics, affiliate links to Amazon, and what data is (and isn't) collected.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/privacy/` },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy/` }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-10 sm:px-6 md:px-12 md:py-14">
        <h1 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: November 2026</p>

        <div className="mt-8 space-y-8 text-[15px] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold tracking-[-0.02em]">The short version</h2>
            <p className="mt-3">
              Pawmade is a small showcase site for wooden pet puzzles. We don't have accounts,
              newsletters, or contact forms, so we never ask you for personal information. We use
              cookie-free analytics to understand how the site is used, and some links are affiliate
              links to Amazon.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-[-0.02em]">Visitor analytics</h2>
            <p className="mt-3">
              We use Lovable's built-in visitor analytics to see how the site performs. It uses no
              cookies, stores nothing on your device, doesn't keep IP addresses, and doesn't
              identify who you are. Lovable collects this data for us.{" "}
              <a
                href="https://lovable.dev/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                Lovable's privacy policy
              </a>{" "}
              explains how it handles it.
            </p>
            <p className="mt-3">
              For every visitor, it records which buttons and links are clicked, the pages visited,
              where visitors came from, their country, browser, operating system and device type,
              how long they stay, how fast pages load, and errors — all without cookies and without
              identifying anyone. Detailed data is kept for 90 days, and daily summaries for a year.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-[-0.02em]">Affiliate links to Amazon</h2>
            <p className="mt-3">
              As an Amazon Associate, Pawmade earns from qualifying purchases. When you click a
              "View on Amazon" button, you leave our site and go to Amazon. Amazon may use cookies
              and collect information about your visit and any purchase you make, under{" "}
              <a
                href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468496"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                Amazon's own privacy notice
              </a>
              . We receive commission reports from Amazon, but these never tell us who you are.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-[-0.02em]">What we don't do</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>We don't use advertising or tracking pixels.</li>
              <li>We don't set any cookies of our own.</li>
              <li>We don't collect names, email addresses, or payment details.</li>
              <li>We don't sell or share any data with third parties.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold tracking-[-0.02em]">Changes to this policy</h2>
            <p className="mt-3">
              If we change how the site handles data, we'll update this page and the date at the
              top.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
