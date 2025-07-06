'use client';

import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';
import type { PortfolioItem } from '@/lib/types';
import { ArrowRight } from 'lucide-react';


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
                        <Card key={project.slug} className="h-full flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-background border">
                            <CardHeader className="p-0 relative">
                                <Link href={`/portfolio/${project.slug}`} className="block overflow-hidden aspect-[4/3]">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    width={600}
                                    height={450}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    data-ai-hint={project.category === 'Branding' ? 'branding design' : project.category === 'Digital Marketing' ? 'digital marketing' : 'web development'}
                                />
                                </Link>
                            </CardHeader>
                            <CardContent className="p-6 flex-grow flex flex-col">
                                <Badge variant="outline">{project.category}</Badge>
                                <CardTitle className="mt-4 text-xl group-hover:text-primary transition-colors">
                                    <Link href={`/portfolio/${project.slug}`}>
                                        {project.title}
                                    </Link>
                                </CardTitle>
                                <CardDescription className="mt-2 text-sm flex-grow">{project.description}</CardDescription>
                            </CardContent>
                             <CardFooter className="p-6 pt-0 mt-auto">
                                <Link href={`/portfolio/${project.slug}`} className="font-semibold text-sm text-primary flex items-center gap-1.5 group/link">
                                    View Project <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
