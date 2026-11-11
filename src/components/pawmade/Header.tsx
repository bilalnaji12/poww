import { ArrowUpRight } from "lucide-react";
import { PawLogo } from "./icons";

export function Header() {
  return (
    <header className="site-header relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between gap-2 px-4 py-4 sm:gap-4 sm:px-6 md:px-12 md:py-6">
      <a
        href="/"
        className="flex shrink-0 items-center gap-2 text-foreground sm:gap-2.5"
        aria-label="Pawmade home"
      >
        <PawLogo className="size-7 sm:size-9" />
        <span className="text-[20px] font-semibold tracking-[-0.04em] sm:text-[25px]">
          Pawmade
        </span>
      </a>

      <nav
        aria-label="Main navigation"
        className="flex min-w-0 items-center gap-2.5 whitespace-nowrap text-[12px] font-medium sm:gap-5 sm:text-sm md:gap-8"
      >
        <a href="#shop" className="nav-link">
          Shop
        </a>
        <a href="#gift-guide" className="nav-link hidden sm:inline">
          Gift guide
        </a>
        <a href="#faq" className="nav-link">
          FAQs
        </a>
        <a
          href="#shop"
          className="header-cta inline-flex min-h-10 items-center gap-1.5 shrink-0 rounded-full px-3 text-xs font-semibold sm:px-4 sm:text-sm"
        >
          Explore <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
