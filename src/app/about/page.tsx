import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { team } from "@/lib/data";
import { Check, Eye, Heart, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <Badge>About Apex Agency</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 font-headline">
            The Architects of Brand Growth
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We are a collective of strategists, creatives, and innovators dedicated to building brands that not only succeed but also inspire.
          </p>
        </div>
      </section>

      {/* Our Story & Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://placehold.co/600x400.png"
              alt="Apex Agency team collaborating"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint="team collaboration"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold font-headline">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Founded on the principle that great marketing is a blend of art and science, Apex Agency was born from a desire to do things differently. We saw a gap between cookie-cutter solutions and what businesses truly needed: a strategic partner invested in their long-term success.
            </p>
            <h3 className="text-2xl font-bold font-headline mt-8">Our Mission</h3>
            <p className="mt-4 text-muted-foreground">
              Our mission is to empower ambitious brands to achieve their full potential. We do this by crafting bespoke strategies, executing with creative excellence, and relentlessly pursuing results that matter. We believe in building partnerships, not just client lists.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">Our Approach</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Our methodology is strategic, creative, and always ROI-driven.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <Eye className="h-8 w-8 text-primary mb-2" />
                <CardTitle>1. Discover</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We dive deep into your brand, market, and audience to uncover key insights and opportunities.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Check className="h-8 w-8 text-primary mb-2" />
                <CardTitle>2. Strategize</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We build a data-backed roadmap tailored to your goals, ensuring every action has a purpose.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Heart className="h-8 w-8 text-primary mb-2" />
                <CardTitle>3. Create</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our creative team brings the strategy to life with compelling designs and narratives.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Rocket className="h-8 w-8 text-primary mb-2" />
                <CardTitle>4. Amplify</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We launch, manage, and optimize campaigns to deliver measurable results and drive growth.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Meet the Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">Meet Our Leadership</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              The masterminds behind our success and yours.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="p-6">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4"
                    data-ai-hint="person"
                  />
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
      <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Join Forces With Us</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/90">
              Ready to see what a dedicated, strategic partner can do for your brand? Let's create something exceptional together.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
    </>
  );
}
