'use client';

import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { portfolio } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const categories = ['All', ...Array.from(new Set(portfolio.map(p => p.category)))];

export default function PortfolioPage() {
    const [filter, setFilter] = useState('All');

    const filteredPortfolio = filter === 'All' ? portfolio : portfolio.filter(p => p.category === filter);

    return (
        <>
            {/* Hero Section */}
            <section className="bg-secondary py-20 md:py-32">
                <div className="container mx-auto px-4 text-center">
                    <Badge>Our Work</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mt-4 font-headline">
                        Selected Work
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        Explore our case studies to see the impact of focused design and clear strategy.
                    </p>
                </div>
            </section>

            {/* Portfolio Grid with Filters */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center mb-12 flex-wrap gap-2">
                        {categories.map(category => (
                            <Button
                                key={category}
                                variant={filter === category ? 'default' : 'outline'}
                                onClick={() => setFilter(category)}
                                className="rounded-full px-6"
                            >
                                {category}
                            </Button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPortfolio.map(project => (
                             <Card key={project.slug} className="overflow-hidden group bg-transparent border-none shadow-none">
                                <CardHeader className="p-0">
                                <Link href={`/portfolio/${project.slug}`}>
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
                                    data-ai-hint={project.category}
                                />
                                </Link>
                                </CardHeader>
                                <CardContent className="p-4 pl-0">
                                <Badge variant="outline">{project.category}</Badge>
                                <CardTitle className="mt-2 text-xl font-bold">
                                    <Link href={`/portfolio/${project.slug}`} className="hover:text-primary transition-colors">
                                        {project.title}
                                    </Link>
                                </CardTitle>
                                <CardDescription className="mt-1">{project.description}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
