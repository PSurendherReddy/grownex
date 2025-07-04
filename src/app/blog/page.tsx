import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { AbstractShape1 } from "@/components/vectors/AbstractShape1";

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
                            <Card key={post.slug} className="flex flex-col">
                                <CardHeader className="p-0">
                                    <Link href={`/blog/${post.slug}`}>
                                        <AbstractShape1
                                            className="w-full h-48 object-cover"
                                        />
                                    </Link>
                                </CardHeader>
                                <CardContent className="p-6 flex-grow">
                                    <Badge variant="outline">{post.category}</Badge>
                                    <CardTitle className="mt-2 text-xl font-bold">
                                        <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                                            {post.title}
                                        </Link>
                                    </CardTitle>
                                    <CardDescription className="mt-2 text-sm">{post.excerpt}</CardDescription>
                                </CardContent>
                                <CardFooter className="p-6 pt-0 flex justify-between items-center text-xs text-muted-foreground">
                                    <div className="flex items-center gap-4">
                                        <span>{post.author}</span>
                                        <span>{post.date}</span>
                                    </div>
                                    <Link href={`/blog/${post.slug}`} className="text-primary font-semibold hover:underline">
                                        Read <span className="hidden sm:inline">More</span>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
