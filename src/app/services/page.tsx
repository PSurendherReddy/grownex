'use client';

import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { serviceGroups } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const [selectedGroup, setSelectedGroup] = useState(serviceGroups[0]);

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
      
      {/* Interactive Services Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            
            {/* Left Column: Navigation */}
            <aside className="md:col-span-1">
              <h2 className="text-lg font-semibold font-headline mb-4 px-3">Service Categories</h2>
              <nav>
                <ul className="space-y-1">
                  {serviceGroups.map((group) => (
                    <li key={group.slug}>
                      <button
                        onClick={() => setSelectedGroup(group)}
                        className={cn(
                          "w-full text-left p-3 transition-colors duration-200 text-muted-foreground",
                          "hover:bg-secondary/50 hover:text-foreground",
                          selectedGroup.slug === group.slug
                            ? "bg-secondary text-primary font-semibold"
                            : ""
                        )}
                      >
                        {group.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Right Column: Content */}
            <div className="md:col-span-3">
              <div id={selectedGroup.slug}>
                <h3 className="text-2xl font-bold font-headline">{selectedGroup.title}</h3>
                <p className="text-muted-foreground mt-2 max-w-2xl">{selectedGroup.description}</p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedGroup.services.map((service) => (
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
            </div>
            
          </div>
        </div>
      </section>
      
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
