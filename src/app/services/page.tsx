import { Badge } from "@/components/ui/badge";
import { serviceGroups } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <Badge>Our Expertise</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 font-headline">
            Our Services
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Explore our comprehensive suite of services designed to elevate your brand and drive measurable results. From branding to web development, we're your partner in growth.
          </p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 space-y-20">
            {serviceGroups.map((group) => (
                <div key={group.slug} id={group.slug} className="scroll-mt-24">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-primary/10 p-3 rounded-full">
                       <group.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold font-headline">{group.title}</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {group.services.map((service) => (
                       <Link href={`/services/${service.slug}`} key={service.slug} className="group">
                        <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                          <CardHeader>
                            <CardTitle className="text-lg">{service.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">{service.description}</p>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
            ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Have a Project in Mind?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/90">
              We're ready to listen. Tell us about your goals and we'll tell you how we can help you achieve them.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Book a Free Strategy Call</Link>
              </Button>
            </div>
          </div>
        </section>
    </>
  )
}
