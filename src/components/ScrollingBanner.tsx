
'use client';

import { Sparkle } from "lucide-react";

const BannerContent = () => (
    <div className="flex items-center justify-around w-full px-4">
        <span className="text-xl md:text-2xl font-bold uppercase tracking-wider">WE ARE CREATIVE</span>
        <Sparkle className="h-5 w-5 text-accent flex-shrink-0" />
        <span className="text-xl md:text-2xl font-bold uppercase tracking-wider">WE ARE FAST</span>
        <Sparkle className="h-5 w-5 text-accent flex-shrink-0" />
        <span className="text-xl md:text-2xl font-bold uppercase tracking-wider">WE GO WITH DATA</span>
        <Sparkle className="h-5 w-5 text-accent flex-shrink-0" />
    </div>
);

export function ScrollingBanner() {
  return (
    <section className="bg-primary text-primary-foreground border-y-2 border-accent">
      <div className="relative flex overflow-x-hidden group">
        <div className="py-4 animate-marquee whitespace-nowrap flex items-center group-hover:[animation-play-state:paused] min-w-full flex-shrink-0">
            <BannerContent />
        </div>
        <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap flex items-center group-hover:[animation-play-state:paused] min-w-full flex-shrink-0" aria-hidden="true">
            <BannerContent />
        </div>
      </div>
    </section>
  );
}
