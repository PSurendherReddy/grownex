import { services, portfolio } from "@/lib/data";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


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
    
    const caseStudy = portfolio.find(p => p.slug === service.caseStudySlug);

    return (
        <>
            {/* Hero Section */}
            <section className="bg-secondary py-20 md:py-24">
                <div className="container mx-auto px-4">
                    <Breadcrumb className="mb-4">
                      <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink href="/services">Services</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                         <BreadcrumbItem>
                          <BreadcrumbLink href={`/services#${service.category.slug}`}>{service.category.title}</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbPage>{service.title}</BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
                    <h1 className="text-4xl md:text-5xl font-bold font-headline">
                        {service.title}
                    </h1>
                    <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
                        {service.description}
                    </p>
                </div>
            </section>
            
            {/* Service Details Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold font-headline">Our Approach to {service.title}</h2>
                        <p className="mt-4 text-muted-foreground text-lg">
                            {service.longDescription}
                        </p>
                    </div>

                    <div className="lg:col-span-1">
                        {caseStudy && (
                            <Card className="sticky top-24">
                                <CardHeader>
                                    <Badge variant="outline">Case Study</Badge>
                                    <CardTitle className="mt-2">{caseStudy.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Image 
                                        src={caseStudy.imageUrl}
                                        alt={caseStudy.title}
                                        width={400}
                                        height={250}
                                        className="rounded-md mb-4"
                                        data-ai-hint={caseStudy.category}
                                    />
                                    <p className="text-sm text-muted-foreground mb-4">
                                        {caseStudy.description}
                                    </p>
                                    <Button asChild variant="default" className="w-full">
                                        <Link href={`/portfolio/${caseStudy.slug}`}>
                                            View Full Case Study
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </section>

             {/* CTA Section */}
            <section className="py-16 md:py-24 bg-primary text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to discuss {service.title}?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/90">
                    Let's explore how our expertise can be tailored to your specific needs.
                    </p>
                    <div className="mt-8">
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/contact">Book a Free Consultation</Link>
                    </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
