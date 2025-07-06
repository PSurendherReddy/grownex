import { services } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ServiceIllustration } from "@/components/vectors/ServiceIllustration";
import { BrandingIllustration } from "@/components/vectors/BrandingIllustration";
import { DigitalMarketingIllustration } from "@/components/vectors/DigitalMarketingIllustration";
import { WebDevIllustration } from "@/components/vectors/WebDevIllustration";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const illustrationComponents: Record<string, React.ElementType> = {
    ServiceIllustration,
    BrandingIllustration,
    DigitalMarketingIllustration,
    WebDevIllustration,
}

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
    
    const IllustrationComponent = illustrationComponents[service.hero.illustration || 'ServiceIllustration'];

    return (
        <>
            {/* Hero Section (Attention) */}
            <div className="bg-secondary">
                <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24">
                    <section className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-3xl md:text-4xl font-bold font-headline tracking-tight">
                                {service.title}
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg">
                                {service.hero.description}
                            </p>
                        </div>
                        <div>
                            <IllustrationComponent className="w-full h-auto" />
                        </div>
                    </section>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24">
                {/* Introduction Section (Interest) */}
                <section className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold font-headline">{service.introduction.title}</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        {service.introduction.content}
                    </p>
                </section>

                {/* Key Features Section (Interest/Desire) */}
                <section className="mt-20 md:mt-24">
                    <div className="text-center mb-12">
                         <h2 className="text-2xl md:text-3xl font-bold font-headline">{service.keyFeatures.title}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {service.keyFeatures.items.map((feature, index) => (
                            <Card key={index} className="bg-background">
                                <CardHeader className="flex flex-row items-start gap-4">
                                    <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0 pl-[48px]">
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Process Section (Desire) */}
                <section className="mt-20 md:mt-24">
                    <div className="text-center mb-16">
                         <h2 className="text-2xl md:text-3xl font-bold font-headline">{service.process.title}</h2>
                    </div>
                    <div className="relative max-w-4xl mx-auto">
                        {/* Desktop timeline line */}
                        <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-border -translate-x-1/2"></div>
                        
                        {service.process.steps.map((step, index) => (
                            <div key={index} className="relative md:grid md:grid-cols-2 md:gap-x-16 items-center mb-12">
                                {/* Content */}
                                <div className={`mb-8 md:mb-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left md:col-start-2'}`}>
                                    <h3 className="text-xl font-bold font-headline mb-2 text-primary">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>
                                {/* Number & Mobile Line */}
                                <div className={`flex justify-center items-center ${index % 2 === 0 ? 'md:col-start-2 md:row-start-1' : 'md:col-start-1 md:row-start-1 md:justify-end'}`}>
                                    <div className="relative z-10 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold font-headline">
                                        {step.step}
                                    </div>
                                    {/* Mobile connector line */}
                                    {index < service.process.steps.length - 1 && <div className="md:hidden absolute top-full left-1/2 h-20 w-px bg-border -translate-x-1/2 mt-1"></div>}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                
                {/* Stats Section (Desire/Proof) */}
                {service.stats && service.stats.length > 0 && (
                    <section className="mt-20 md:mt-24 bg-secondary py-16 rounded-lg">
                        <div className="container mx-auto px-4">
                            <h2 className="text-2xl md:text-3xl font-bold font-headline text-center mb-12">Proven Results</h2>
                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
                                {service.stats.map((stat, index) => (
                                    <div key={index} className="text-center md:text-left flex flex-col md:flex-row items-center gap-6">
                                        <p className="text-4xl md:text-5xl font-bold font-headline text-primary whitespace-nowrap">{stat.value}</p>
                                        <p className="text-muted-foreground">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
                
                {/* Related Case Study (Desire/Proof) */}
                {service.caseStudySlug && (
                  <section className="mt-20 md:mt-24 text-center">
                      <Card className="bg-primary text-primary-foreground inline-block">
                        <CardContent className="p-10">
                            <h3 className="text-2xl font-bold font-headline">See It In Action</h3>
                            <p className="mt-2 text-primary-foreground/80">Read our case study to see how we delivered results.</p>
                             <Button asChild size="lg" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
                                <Link href={`/portfolio/${service.caseStudySlug}`}>
                                    View Case Study
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </CardContent>
                      </Card>
                  </section>
                )}
            </div>

             {/* CTA Section (Action) */}
            <section className="bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold font-headline">Ready to discuss {service.title}?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/90">
                        Let's explore how our expertise can be tailored to your specific needs.
                    </p>
                    <div className="mt-8">
                        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link href="/contact">
                                Book a Free Consultation
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
