import { services } from "@/lib/data";
import { notFound } from "next/navigation";
import { ServiceIllustration } from "@/components/vectors/ServiceIllustration";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function generateStaticParams() {
    return services.map(service => ({
        slug: service.slug
    }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
    const service = services.find(s => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    return (
        <>
            <div className="container mx-auto px-4 py-16 md:py-24">
                {/* Hero Section */}
                <section className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">
                            {service.title}
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg">
                            {service.description}
                        </p>
                    </div>
                    <div>
                        <ServiceIllustration className="w-full h-auto" />
                    </div>
                </section>

                {/* Stats Section */}
                {service.stats && service.stats.length > 0 && (
                    <section className="mt-20 md:mt-32">
                        <div className="max-w-4xl">
                           <h2 className="text-3xl font-bold font-headline mb-8">Our Experience & Impact</h2>
                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                                {service.stats.map((stat, index) => (
                                    <div 
                                        key={index} 
                                        className={`flex items-center gap-6 ${index > 0 ? 'md:border-l md:pl-12 border-border' : ''}`}
                                    >
                                        <p className="text-5xl md:text-6xl font-bold font-headline text-primary whitespace-nowrap">{stat.value}</p>
                                        <p className="text-muted-foreground">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Main Content Section */}
                <section className="mt-20 md:mt-24">
                     <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed lg:columns-2 lg:gap-16">
                         <p>{service.longDescription}</p>
                    </div>
                </section>

                 {/* Detailed Info Section */}
                {(service.aboutService || service.whenToChoose || service.whoIsItFor) && (
                    <section className="mt-20 md:mt-24">
                        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                            {service.aboutService && (
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-xl">About the Service</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{service.aboutService}</p>
                                    </CardContent>
                                </Card>
                            )}
                            {service.whenToChoose && (
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-xl">When to Choose</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{service.whenToChoose}</p>
                                    </CardContent>
                                </Card>
                            )}
                            {service.whoIsItFor && (
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-xl">Who It's For</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{service.whoIsItFor}</p>
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                    </section>
                )}
            </div>
             {/* CTA Section */}
            <section className="bg-secondary">
                <div className="container mx-auto px-4 py-16 md:py-24 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to discuss {service.title}?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Let's explore how our expertise can be tailored to your specific needs.
                    </p>
                    <div className="mt-8">
                        <Button asChild size="lg">
                            <Link href="/contact">Book a Free Consultation</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
