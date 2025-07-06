import type { Metadata } from 'next';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Ready to start a project? Get in touch with the Grownex team. We\'re here to discuss your branding, marketing, or web development needs and help you grow.',
};

export default function ContactPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-secondary py-20 sm:py-24 md:py-32">
                <div className="container mx-auto px-4 text-center">
                    <Badge>Contact</Badge>
                    <h1 className="text-2xl md:text-3xl font-bold mt-4 font-headline">
                        Let's Talk
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        We're here to help. Reach out to discuss your project or ask a question.
                    </p>
                </div>
            </section>

            {/* Contact Form and Info Section */}
            <section className="py-16 sm:py-20 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-2xl font-bold font-headline mb-6">Send a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input id="name" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="john.doe@example.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input id="subject" placeholder="e.g., Branding Inquiry" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea id="message" placeholder="Tell us about your project..." rows={6} />
                                </div>
                                <Button type="submit" size="lg">
                                    Send Message
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Button>
                            </form>
                        </div>
                        <div className="space-y-8">
                             <h2 className="text-2xl font-bold font-headline mb-6">Contact Info</h2>
                             <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <a href="mailto:info@grownexdigital.com" className="text-muted-foreground hover:text-primary">info@grownexdigital.com</a>
                                    </div>
                                </div>
                                 <div className="flex items-start gap-4">
                                    <div>
                                        <h3 className="font-semibold">Phone</h3>
                                        <a href="tel:+916281981832" className="text-muted-foreground hover:text-primary">+91 628-198-1832</a>
                                    </div>
                                </div>
                                 <div className="flex items-start gap-4">
                                    <div>
                                        <h3 className="font-semibold">Office</h3>
                                        <p className="text-muted-foreground">2nd Floor ikeva Coworking Space, Lotus Heights, Kavuri Hills, Madhapur Hyderabad</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
