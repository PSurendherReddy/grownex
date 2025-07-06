'use client';

const BannerContent = () => (
    <div className="flex items-center justify-center w-full gap-x-4 px-4 md:gap-x-8">
        <span className="text-lg md:text-xl font-bold uppercase tracking-wider">WE ARE CREATIVE</span>
        <div className="h-6 w-px bg-primary-foreground flex-shrink-0" />
        <span className="text-lg md:text-xl font-bold uppercase tracking-wider">WE ARE FAST</span>
        <div className="h-6 w-px bg-primary-foreground flex-shrink-0" />
        <span className="text-lg md:text-xl font-bold uppercase tracking-wider">WE ARE GO WITH DATA</span>
        <div className="h-6 w-px bg-primary-foreground flex-shrink-0" />
    </div>
);

export function ScrollingBanner() {
  return (
    <section className="bg-primary text-primary-foreground">
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
