import { Badge } from "@/components/ui/badge";
import { testimonials } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TestimonialsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-secondary py-20 md:py-32">
                <div className="container mx-auto px-4 text-center">
                    <Badge>Client Success</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mt-4 font-headline">
                        Voices of Our Partners
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        We take pride in the relationships we build and the results we deliver. Here's what our clients have to say about their experience with Grownex.
                    </p>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="flex flex-col">
                                <CardHeader>
                                    <div className="flex items-center">
                                        <Image src={testimonial.avatar} alt={testimonial.name} width={56} height={56} className="rounded-full" data-ai-hint="person" />
                                        <div className="ml-4">
                                            <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                                            <CardDescription>{testimonial.title}</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="flex mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-primary text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to Be Our Next Success Story?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/90">
                        Partner with us and let's write your chapter of growth and success together.
                    </p>
                    <div className="mt-8">
                        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link href="/contact">Schedule Your Free Call</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
