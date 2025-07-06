'use client';

import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { AbstractShape2 } from '@/components/vectors/AbstractShape2';
import type { PortfolioItem } from '@/lib/types';


export function PortfolioClient({ portfolio }: { portfolio: PortfolioItem[] }) {
    const [filter, setFilter] = useState('All');
    
    const categories = ['All', ...Array.from(new Set(portfolio.map(p => p.category)))];

    const filteredPortfolio = filter === 'All' ? portfolio : portfolio.filter(p => p.category === filter);

    return (
        <section className="py-16 sm:py-20 md:py-24">
            <div className="container mx-auto px-4">
                <div className="flex justify-center mb-12 flex-wrap gap-2">
                    {categories.map(category => (
                        <Button
                            key={category}
                            variant={filter === category ? 'default' : 'outline'}
                            onClick={() => setFilter(category)}
                            className="px-6"
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
                            <AbstractShape2
                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
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
    );
}
