'use client';

import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { AbstractShape1 } from "@/components/vectors/AbstractShape1";
import { ArrowRight, Search } from "lucide-react";
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredBlogPosts = blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="bg-secondary py-20 sm:py-24 md:py-32">
                <div className="container mx-auto px-4 text-center">
                    <Badge>Insights</Badge>
                    <h1 className="text-3xl md:text-4xl font-bold mt-4 font-headline">
                        From Our Strategists' Desk
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        Stay ahead of the curve with our latest articles on branding, marketing, and business growth.
                    </p>
                </div>
            </section>

            {/* Search Section */}
            <section className="py-12">
                <div className="container mx-auto px-4 max-w-2xl">
                     <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search articles by title, topic, or keyword..."
                            className="w-full pl-10"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="pb-16 sm:pb-20 md:pb-24">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {filteredBlogPosts.length > 0 ? (
                            filteredBlogPosts.map(post => (
                                <motion.div key={post.slug} variants={itemVariants} className="h-full">
                                   <Link href={`/blog/${post.slug}`} className="group block h-full">
                                        <Card className="flex flex-col h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 border bg-background">
                                            <CardHeader className="p-0">
                                                <AbstractShape1
                                                    className="w-full h-48 object-cover"
                                                />
                                            </CardHeader>
                                            <CardContent className="p-6 flex-grow flex flex-col">
                                                <Badge variant="outline">{post.category}</Badge>
                                                <CardTitle className="mt-4 text-xl group-hover:text-primary transition-colors">
                                                    {post.title}
                                                </CardTitle>
                                                <CardDescription className="mt-2 text-sm flex-grow">{post.excerpt}</CardDescription>
                                            </CardContent>
                                            <CardFooter className="p-6 pt-0 flex justify-between items-center text-sm text-muted-foreground">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs">{post.author} &bull; {post.date}</span>
                                                </div>
                                                <div className="flex items-center gap-1 text-primary font-semibold">
                                                    Read More
                                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    </Link>
                                </motion.div>
                            ))
                        ) : (
                             <div className="col-span-full text-center py-16">
                                <h3 className="text-xl font-headline">No articles found</h3>
                                <p className="text-muted-foreground mt-2">Try adjusting your search query.</p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
