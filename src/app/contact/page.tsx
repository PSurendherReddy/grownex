import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-secondary py-20 md:py-32">
                <div className="container mx-auto px-4 text-center">
                    <Badge>Contact</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mt-4 font-headline">
                        Let's Talk
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        We're here to help. Reach out to discuss your project or ask a question.
                    </p>
                </div>
            </section>

            {/* Contact Form and Info Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold font-headline mb-6">Send a Message</h2>
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
                                <Button type="submit" size="lg">Send Message</Button>
                            </form>
                        </div>
                        <div className="space-y-8">
                             <h2 className="text-3xl font-bold font-headline mb-6">Contact Info</h2>
                             <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <a href="mailto:hello@grownex.com" className="text-muted-foreground hover:text-primary">hello@grownex.com</a>
                                    </div>
                                </div>
                                 <div className="flex items-start gap-4">
                                    <div>
                                        <h3 className="font-semibold">Phone</h3>
                                        <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">+1 (234) 567-890</a>
                                    </div>
                                </div>
                                 <div className="flex items-start gap-4">
                                    <div>
                                        <h3 className="font-semibold">Office</h3>
                                        <p className="text-muted-foreground">123 Creative Lane, Suite 100<br/>Innovation City, 54321</p>
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
