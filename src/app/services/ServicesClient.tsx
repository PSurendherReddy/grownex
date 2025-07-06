'use client';

import { useState } from 'react';
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from '@/lib/utils';
import type { ServiceGroup } from '@/lib/types';

export function ServicesClient({ serviceGroups }: { serviceGroups: ServiceGroup[] }) {
  const [selectedGroup, setSelectedGroup] = useState(serviceGroups[0]);

  return (
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
                        "w-full text-left p-3 rounded-md transition-colors duration-200 text-muted-foreground",
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
  );
}
