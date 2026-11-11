import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import bannerImg from "@/assets/banner-cat-window.webp";

export function StoryBanner() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 sm:px-6 md:px-12">
      <div className="story-banner relative isolate overflow-hidden rounded-[26px] sm:rounded-[30px]">
        <img
          src={bannerImg}
          alt="A cat sitting by a sunlit window"
          loading="lazy"
          decoding="async"
          width={1920}
          height={640}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="story-overlay absolute inset-0" aria-hidden="true" />
        <div className="relative z-10 max-w-2xl px-6 py-10 sm:px-9 sm:py-12 md:px-12 md:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
            More than a present
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-4xl">
            A little reminder of the bond you share.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
            Because the best gifts say, “I know what makes you smile.”
          </p>
          <Button variant="peach" size="md" className="mt-6 min-h-11" asChild>
            <a href="#shop">
              Find a thoughtful gift <ArrowRight aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
