import type { Metadata } from 'next';
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/data";
import { BlogClient } from './BlogClient';

export const metadata: Metadata = {
  title: 'Our Blog & Insights',
  description: 'Stay ahead of the curve with our latest articles, insights, and analysis on branding, marketing strategy, business growth, and AI from our team of experts.',
};

export default function BlogPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-secondary py-20 sm:py-24 md:py-32">
                <div className="container mx-auto px-4 text-center">
                    <Badge>Insights</Badge>
                    <h1 className="text-2xl md:text-3xl font-bold mt-4 font-headline">
                        From Our Strategists' Desk
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        Stay ahead of the curve with our latest articles on branding, marketing, and business growth.
                    </p>
                </div>
            </section>

            <BlogClient blogPosts={blogPosts} />
        </>
    );
}
