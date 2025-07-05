import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { team } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AbstractShape1 } from "@/components/vectors/AbstractShape1";
import { PersonVector } from "@/components/vectors/PersonVector";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary py-20 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <Badge>About Us</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mt-4 font-headline">
            Designing with Purpose
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We are a team dedicated to building brands with clarity and impact.
          </p>
        </div>
      </section>

      {/* Our Story & Mission Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <AbstractShape1 className="w-full h-auto" />
          </div>
          <div>
            <h2 className="text-2xl font-bold font-headline">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Grownex was founded on a simple principle: that great marketing is a blend of art and science. We saw a need for a partner invested in long-term success, not just cookie-cutter solutions.
            </p>
            <h3 className="text-xl font-bold font-headline mt-8">Our Mission</h3>
            <p className="mt-4 text-muted-foreground">
              To empower ambitious brands through focused strategy and creative excellence. We build partnerships, not just client lists.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold font-headline">Our Approach</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Our methodology is strategic, creative, and always results-driven.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle>1. Understand</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We dive deep to uncover key insights for your brand and market.</p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardHeader>
                <CardTitle>2. Define</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We build a data-backed roadmap tailored to your specific goals.</p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardHeader>
                <CardTitle>3. Execute</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our team brings the strategy to life with compelling designs and narratives.</p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardHeader>
                <CardTitle>4. Measure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We launch, manage, and optimize to deliver measurable results.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Meet the Team Section */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold font-headline">Our Team</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              The minds behind our success, and yours.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center border-none shadow-none bg-transparent">
                <CardContent className="p-6">
                  <PersonVector className="w-36 h-36 mx-auto mb-4" />
                  <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                  <p className="text-primary font-semibold">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-headline">Work With Us</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/90">
              Ready to see what a focused, strategic partner can do for your brand?
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
    </>
  );
}
