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
            What We Do
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            A focused suite of services designed to build and grow your brand with clarity and impact.
          </p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 space-y-20">
            {serviceGroups.map((group) => (
                <div key={group.slug} id={group.slug} className="scroll-mt-24">
                  <div className="flex flex-col items-start gap-2 mb-8 md:flex-row md:items-center md:gap-4">
                    <div>
                      <h2 className="text-3xl font-bold font-headline">{group.title}</h2>
                      <p className="text-muted-foreground">{group.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {group.services.map((service) => (
                       <Link href={`/services/${service.slug}`} key={service.slug} className="group">
                        <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/20">
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
              We're ready to listen. Let's discuss how we can help you achieve your goals.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Book a Free Call</Link>
              </Button>
            </div>
          </div>
        </section>
    </>
  )
}
