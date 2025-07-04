import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/data";
import { ServiceCard } from "@/components/ServiceCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <Badge>Our Expertise</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 font-headline">
            A Full-Service Growth Engine
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            From crafting a compelling brand story to executing multi-channel marketing campaigns, we offer a complete suite of services to fuel your growth at every stage.
          </p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <ServiceCard key={service.slug} service={service} />
                ))}
            </div>
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
