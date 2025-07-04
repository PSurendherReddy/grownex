import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { AbstractShape1 } from "@/components/vectors/AbstractShape1";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

// Enhanced markdown to HTML renderer
const Markdown = ({ content }: { content: string }) => {
    const processLine = (line: string) => {
        // Links
        line = line.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');
        // Bold
        line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>');
        // Italic
        line = line.replace(/\*(.*?)\*/g, '<em>$1</em>');
        return line;
    };

    const html = content
        .split('\n\n').map(paragraph => {
            if (paragraph.startsWith('## ')) {
                return `<h2 class="text-3xl font-bold font-headline mt-12 mb-4 text-foreground">${processLine(paragraph.substring(3))}</h2>`;
            }
            if (paragraph.startsWith('### ')) {
                return `<h3 class="text-2xl font-bold font-headline mt-8 mb-4 text-foreground">${processLine(paragraph.substring(4))}</h3>`;
            }
            if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').map(item => `<li class="mb-3 leading-relaxed">${processLine(item.substring(2))}</li>`).join('');
                return `<ul class="list-disc list-inside space-y-2 mb-6">${items}</ul>`;
            }
            if (paragraph.startsWith('> ')) {
                return `<blockquote class="border-l-4 border-primary pl-4 italic my-6 text-foreground/80">${processLine(paragraph.substring(2))}</blockquote>`;
            }
            return `<p class="leading-relaxed mb-6">${processLine(paragraph)}</p>`;
        }).join('');

    return <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground" dangerouslySetInnerHTML={{ __html: html }} />;
};

export function generateStaticParams() {
    return blogPosts.map(post => ({
        slug: post.slug
    }));
}

export default function BlogPostPage({ params }: { params: { slug:string }}) {
    const post = blogPosts.find(p => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = blogPosts.filter(p => p.slug !== post.slug).slice(0, 2);

    return (
        <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl">
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{post.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <article>
                <header className="mb-8 text-center">
                    <Badge variant="default" className="mb-4">{post.category}</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold font-headline leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                        <span>By {post.author}</span>
                        <span>&bull;</span>
                        <span>{post.date}</span>
                    </div>
                </header>

                <AbstractShape1
                    className="w-full h-auto object-cover shadow-lg my-8 md:my-12"
                />

                <div className="max-w-3xl mx-auto">
                    <Markdown content={post.content} />
                </div>
            </article>

            {relatedPosts.length > 0 && (
                <aside className="mt-16 pt-12 border-t">
                    <h2 className="text-3xl font-bold font-headline mb-8 text-center">Related Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {relatedPosts.map(relatedPost => (
                            <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.slug} className="group block">
                                <Card className="flex flex-col h-full transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 bg-secondary/50 border-transparent hover:border-primary/10">
                                    <CardHeader className="p-0">
                                        <AbstractShape1
                                            className="w-full h-40 object-cover"
                                        />
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <Badge variant="outline">{relatedPost.category}</Badge>
                                        <h3 className="mt-3 text-lg font-bold group-hover:text-primary transition-colors">
                                            {relatedPost.title}
                                        </h3>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </aside>
            )}
        </div>
    );
}
