import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { AbstractShape1 } from "@/components/vectors/AbstractShape1";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

// Basic markdown to HTML renderer
const Markdown = ({ content }: { content: string }) => {
    const html = content
        .split('\n\n').map(p => {
            if (p.startsWith('## ')) {
                return `<h2 class="text-2xl font-bold font-headline mt-8 mb-4">${p.substring(3)}</h2>`;
            }
            if (p.startsWith('### ')) {
                return `<h3 class="text-xl font-bold font-headline mt-6 mb-3">${p.substring(4)}</h3>`;
            }
             if (p.startsWith('- ')) {
                 const items = p.split('\n').map(item => `<li class="mb-2">${item.substring(2)}</li>`).join('');
                return `<ul class="list-disc list-inside text-muted-foreground space-y-2">${items}</ul>`;
            }
            return `<p class="text-muted-foreground leading-relaxed mb-4">${p}</p>`;
        }).join('');
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
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
                <header className="mb-8">
                    <Badge variant="default" className="mb-2">{post.category}</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold font-headline leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                        <span>{post.author}</span>
                        <span>{post.date}</span>
                    </div>
                </header>

                <AbstractShape1
                    className="w-full h-auto object-cover shadow-lg mb-8"
                />

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <Markdown content={post.content} />
                </div>
            </article>
        </div>
    );
}
