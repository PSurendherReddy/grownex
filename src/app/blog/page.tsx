import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { AbstractShape1 } from "@/components/vectors/AbstractShape1";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-secondary py-20 md:py-32">
                <div className="container mx-auto px-4 text-center">
                    <Badge>Insights</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mt-4 font-headline">
                        From Our Strategists' Desk
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        Stay ahead of the curve with our latest articles on branding, marketing, and business growth.
                    </p>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map(post => (
                           <Link href={`/blog/${post.slug}`} key={post.slug} className="group block">
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
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
