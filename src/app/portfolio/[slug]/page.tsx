import { portfolio } from "@/lib/data";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AbstractShape1 } from "@/components/vectors/AbstractShape1";
import { AbstractShape2 } from "@/components/vectors/AbstractShape2";

export function generateStaticParams() {
    return portfolio.map(item => ({
        slug: item.slug
    }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
    const project = portfolio.find(p => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <>
            {/* Hero Section */}
            <section className="bg-secondary py-20 sm:py-24 md:py-32">
                <div className="container mx-auto px-4">
                    <Badge>{project.category}</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mt-4 font-headline max-w-4xl">
                        {project.title}
                    </h1>
                    <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
                        Client: <span className="font-semibold text-foreground">{project.client}</span>
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 sm:py-20 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                             <AbstractShape2
                                className="w-full h-auto object-cover shadow-lg mb-12"
                            />

                            <div>
                                <h2 className="text-3xl font-bold font-headline">The Challenge</h2>
                                <p className="mt-4 text-muted-foreground text-lg">{project.challenge}</p>
                            </div>

                             <div className="mt-12">
                                <h2 className="text-3xl font-bold font-headline">The Solution</h2>
                                <p className="mt-4 text-muted-foreground text-lg">{project.solution}</p>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="lg:sticky top-24 bg-background p-8 border">
                                <h3 className="text-2xl font-bold font-headline">Results</h3>
                                <div className="mt-6 space-y-6">
                                    {project.results.map((result, index) => (
                                        <div key={index} className="flex items-start">
                                            <div>
                                                <p className="text-2xl font-bold text-primary">{result.metric}</p>
                                                <p className="font-semibold">{result.value}</p>
                                                <p className="text-sm text-muted-foreground">{result.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-3xl font-bold font-headline text-center mb-8">Project Visuals</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <AbstractShape1 className="w-full h-auto shadow-md" />
                           <AbstractShape2 className="w-full h-auto shadow-md" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* CTA Section */}
            <section className="py-16 sm:py-20 md:py-24 bg-primary text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Inspired by Our Work?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/90">
                    Let's create your success story next. Schedule a free consultation to get started.
                    </p>
                    <div className="mt-8">
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/contact">Start Your Project</Link>
                    </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
