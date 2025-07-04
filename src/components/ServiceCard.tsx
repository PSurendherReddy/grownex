import Link from "next/link";
import type { ServiceGroup } from "@/lib/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  service: ServiceGroup;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href={`/services#${service.slug}`} className="group">
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardHeader className="flex flex-row items-center gap-4">
          <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{service.description}</CardDescription>
          <Button variant="link" className="p-0 h-auto mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            Learn More
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}
