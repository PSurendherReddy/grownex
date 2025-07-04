'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ServiceGroup } from "@/lib/types";
import Link from "next/link";

interface InteractiveServicesProps {
    serviceGroups: ServiceGroup[];
}

export function InteractiveServices({ serviceGroups }: InteractiveServicesProps) {
    const featuredGroups = serviceGroups.slice(0, 4);

    if (!featuredGroups || featuredGroups.length === 0) {
        return null;
    }

    return (
        <Tabs defaultValue={featuredGroups[0].slug} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 h-auto bg-transparent p-0">
                {featuredGroups.map((group) => (
                    <TabsTrigger 
                        key={group.slug} 
                        value={group.slug} 
                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
                    >
                        {group.title}
                    </TabsTrigger>
                ))}
            </TabsList>
            <div className="mt-8">
                {featuredGroups.map((group) => (
                    <TabsContent key={group.slug} value={group.slug} className="m-0">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {group.services.map((service) => (
                                <Link href={`/services/${service.slug}`} key={service.slug} className="group">
                                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/20 bg-background">
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
                    </TabsContent>
                ))}
            </div>
        </Tabs>
    );
}
