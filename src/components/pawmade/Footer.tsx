import { ArrowUpRight } from "lucide-react";
import { PawLogo } from "./icons";

export function Footer() {
  return (
    <footer className="site-footer mt-14 sm:mt-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-9 sm:px-6 md:grid-cols-[1fr_auto] md:items-center md:px-12 md:py-11">
        <div>
          <a href="/" className="inline-flex items-center gap-2.5" aria-label="Pawmade home">
            <PawLogo className="size-8" />
            <span className="text-2xl font-semibold tracking-[-0.05em]">Pawmade</span>
          </a>
          <p className="mt-2 text-sm text-muted-foreground">Little gifts. Big feelings.</p>
        </div>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium"
        >
          <a href="#shop" className="footer-link">
            Shop
          </a>
          <a href="#gift-guide" className="footer-link">
            Gift guide
          </a>
          <a href="#faq" className="footer-link">
            FAQs
          </a>
          <a href="#about" className="footer-link inline-flex items-center gap-1">
            About <ArrowUpRight className="size-3" aria-hidden="true" />
          </a>
        </nav>
        <p className="affiliate-disclosure text-xs leading-relaxed text-muted-foreground md:col-span-2">
          As an Amazon Associate I earn from qualifying purchases. Some links on this page are
          affiliate links. Pawmade may earn a commission if you make a purchase through them, at no
          extra cost to you. Product information, prices, availability, shipping, and returns are
          controlled by the retailer and may change.
        </p>
        <p className="text-[11px] text-muted-foreground md:col-span-2">
          © {new Date().getFullYear()} Pawmade. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
