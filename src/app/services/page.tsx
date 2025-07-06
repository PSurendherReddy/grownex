import type { Metadata } from 'next';
import { Badge } from "@/components/ui/badge";
import { serviceGroups } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { ServicesClient } from './ServicesClient';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our focused suite of services, including branding, digital marketing, web development, AI solutions, and offline advertising, all designed to grow your brand.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary py-20 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <Badge>Our Expertise</Badge>
          <h1 className="text-2xl md:text-3xl font-bold mt-4 font-headline">
            What We Do
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            A focused suite of services designed to build and grow your brand with clarity and impact.
          </p>
        </div>
      </section>
      
      <ServicesClient serviceGroups={serviceGroups} />
      
      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-headline">Have a Project in Mind?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/90">
              We're ready to listen. Let's discuss how we can help you achieve your goals.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">
                  Book a Free Call
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
    </>
  )
}
