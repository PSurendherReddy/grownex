import type { Metadata } from 'next';
import { Badge } from "@/components/ui/badge";
import { portfolio } from "@/lib/data";
import { PortfolioClient } from './PortfolioClient';

export const metadata: Metadata = {
  title: 'Our Work & Portfolio',
  description: 'Explore our case studies and selected work. See the impact of focused design and clear strategy on businesses in branding, marketing, and web development.',
};

export default function PortfolioPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-secondary py-20 sm:py-24 md:py-32">
                <div className="container mx-auto px-4 text-center">
                    <Badge>Our Work</Badge>
                    <h1 className="text-2xl md:text-3xl font-bold mt-4 font-headline">
                        Selected Work
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        Explore our case studies to see the impact of focused design and clear strategy.
                    </p>
                </div>
            </section>

            <PortfolioClient portfolio={portfolio} />
        </>
    );
}
