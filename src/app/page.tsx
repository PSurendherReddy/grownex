import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { serviceGroups, portfolio, testimonials, partners } from "@/lib/data";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ServiceCard } from "@/components/ServiceCard";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white bg-primary">
           <Image
            src="https://placehold.co/1920x1080.png"
            alt="Dynamic background of creative work"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0 opacity-20"
            data-ai-hint="abstract office"
          />
          <div className="relative z-10 p-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white font-headline">
              We Build Brands That Matter.
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90">
              A 360° creative & marketing agency driving growth through strategy, creativity, and results.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Book a Free Strategy Call</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section id="services" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary">Our Services</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 font-headline">What We Do Best</h2>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                We offer a comprehensive suite of services to elevate your brand at every touchpoint.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceGroups.slice(0, 6).map((group) => (
                <ServiceCard key={group.slug} service={group} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild variant="link">
                <Link href="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge>Why Choose Us</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 font-headline">Authority, Creativity, and Trust.</h2>
                <p className="mt-4 text-muted-foreground">
                  We're not just another agency. We are your strategic partners in growth, committed to delivering measurable results and exceptional creative work. Our approach is built on a foundation of deep market understanding and a passion for pushing boundaries.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">ROI-Driven Strategies</h4>
                      <p className="text-muted-foreground text-sm">Every campaign is meticulously planned to maximize your return on investment.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Full-Service Spectrum</h4>
                      <p className="text-muted-foreground text-sm">From digital to offline, we cover all your marketing and branding needs under one roof.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Award-Winning Team</h4>
                      <p className="text-muted-foreground text-sm">Our team consists of industry veterans and creative powerhouses dedicated to your success.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-8 text-center">
                  <div className="bg-background p-8 rounded-lg shadow-md">
                      <h3 className="text-4xl font-bold text-primary">150+</h3>
                      <p className="text-muted-foreground mt-2">Happy Clients</p>
                  </div>
                   <div className="bg-background p-8 rounded-lg shadow-md">
                      <h3 className="text-4xl font-bold text-primary">98%</h3>
                      <p className="text-muted-foreground mt-2">Client Retention</p>
                  </div>
                   <div className="bg-background p-8 rounded-lg shadow-md">
                      <h3 className="text-4xl font-bold text-primary">10+</h3>
                      <p className="text-muted-foreground mt-2">Years of Experience</p>
                  </div>
                   <div className="bg-background p-8 rounded-lg shadow-md">
                      <h3 className="text-4xl font-bold text-primary">20+</h3>
                      <p className="text-muted-foreground mt-2">Awards Won</p>
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary">Our Work</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 font-headline">Featured Projects</h2>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                We're proud of the work we do. Here are some of our favorite projects.
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
                      <Card className="overflow-hidden group">
                        <CardHeader className="p-0">
                          <Image
                            src={project.imageUrl}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={project.category}
                          />
                        </CardHeader>
                        <CardContent className="p-6">
                          <Badge variant="outline">{project.category}</Badge>
                          <CardTitle className="mt-2 text-xl font-bold">{project.title}</CardTitle>
                          <CardDescription className="mt-2">{project.description}</CardDescription>
                          <Button asChild variant="link" className="p-0 h-auto mt-4">
                            <Link href={`/portfolio/${project.slug}`}>View Case Study <ArrowRight className="ml-2 h-4 w-4" /></Link>
                          </Button>
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
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge>Testimonials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 font-headline">What Our Clients Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.slice(0,3).map((testimonial, index) => (
                <Card key={index}>
                  <CardHeader>
                     <div className="flex items-center">
                        <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} className="rounded-full" data-ai-hint="person" />
                        <div className="ml-4">
                            <CardTitle className="text-base">{testimonial.name}</CardTitle>
                            <CardDescription>{testimonial.title}</CardDescription>
                        </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                        ))}
                    </div>
                    <p className="text-muted-foreground">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
             <div className="text-center mt-12">
              <Button asChild variant="link">
                <Link href="/testimonials">More Testimonials <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h3 className="text-center text-lg font-semibold text-muted-foreground mb-8">Trusted by leading brands and startups</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 gap-y-4">
              {partners.map((partner, index) => (
                <Image
                  key={index}
                  src={partner.logoUrl}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                  data-ai-hint="logo"
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready to Grow Your Brand?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/90">
              Let's talk about your goals. Schedule a free, no-obligation strategy call with one of our experts today.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Book a Free Strategy Call</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
