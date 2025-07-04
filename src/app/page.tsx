import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { serviceGroups, portfolio, testimonials, partners } from "@/lib/data";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { InteractiveServices } from "@/components/InteractiveServices";
import { AbstractShape1 } from "@/components/vectors/AbstractShape1";
import { AbstractShape2 } from "@/components/vectors/AbstractShape2";
import { PersonVector } from "@/components/vectors/PersonVector";
import { PartnerLogoVector } from "@/components/vectors/PartnerLogoVector";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center bg-background">
          <div className="absolute inset-0 z-0 opacity-50">
            <AbstractShape1 className="w-full h-full" />
          </div>
          <div className="relative z-10 p-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground font-headline">
              We’re not just marketers. We’re Smarketers.
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
              Blending design, data, and direction for brands that mean business.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section id="services" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline">Our Focus</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 font-headline">What We Do</h2>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                We focus on essential services to elevate your brand at every touchpoint. Select a category to explore.
              </p>
            </div>
            
            <InteractiveServices serviceGroups={serviceGroups} />

            <div className="text-center mt-12">
              <Button asChild variant="link">
                <Link href="/services">Explore All Services</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge>Why Grownex</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 font-headline">Purposeful Design</h2>
                <p className="mt-4 text-muted-foreground">
                  Our approach is built on clarity, purpose, and a commitment to measurable results. We focus on what's essential to deliver exceptional work.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <div className="mt-1">
                      <h4 className="font-semibold">Focused Strategies</h4>
                      <p className="text-muted-foreground text-sm">Every action is planned to maximize impact and return.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                     <div className="mt-1">
                      <h4 className="font-semibold">Essential Services</h4>
                      <p className="text-muted-foreground text-sm">We provide a curated suite of services to cover your core needs.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1">
                      <h4 className="font-semibold">Expert Team</h4>
                      <p className="text-muted-foreground text-sm">Our team consists of industry veterans dedicated to your success.</p>
                    </div>
                  </li>
                </ul>
              </div>
               <div>
                  <AbstractShape1 className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline">Our Work</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 font-headline">Selected Projects</h2>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                We're proud of the work we do. Here are a few examples.
              </p>
            </div>
             <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {portfolio.map((project) => (
                  <CarouselItem key={project.slug} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="overflow-hidden group border-none bg-transparent shadow-none">
                        <CardHeader className="p-0">
                           <Link href={`/portfolio/${project.slug}`}>
                            <AbstractShape2
                              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </Link>
                        </CardHeader>
                        <CardContent className="p-4 pl-0">
                          <Badge variant="outline">{project.category}</Badge>
                          <CardTitle className="mt-2 text-xl font-bold">
                             <Link href={`/portfolio/${project.slug}`} className="hover:text-primary transition-colors">
                                {project.title}
                              </Link>
                          </CardTitle>
                          <CardDescription className="mt-1">{project.description}</CardDescription>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge>Testimonials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 font-headline">What Our Clients Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.slice(0,3).map((testimonial, index) => (
                <Card key={index} className="bg-secondary border-none">
                  <CardContent className="p-6">
                     <div className="flex items-center mb-4">
                        <PersonVector className="w-10 h-10" />
                        <div className="ml-4">
                            <CardTitle className="text-base">{testimonial.name}</CardTitle>
                            <CardDescription>{testimonial.title}</CardDescription>
                        </div>
                    </div>
                    <p className="text-muted-foreground">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">Trusted by leading brands</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 gap-y-4">
              {partners.map((partner, index) => (
                <div key={index} className="group">
                  <PartnerLogoVector
                    name={partner.name}
                    className="w-[120px] h-[40px] transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to Simplify?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
              Let's discuss how focused design and clear strategy can benefit your brand.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Book a Free Call</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
