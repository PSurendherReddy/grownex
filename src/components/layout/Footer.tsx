import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Logo } from './Logo';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              A 360° creative & marketing agency driving growth through strategy, creativity, and results.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold font-headline">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="/portfolio" className="text-muted-foreground hover:text-primary">Portfolio</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold font-headline">Contact Us</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>123 Creative Lane, Suite 100</li>
              <li>Innovation City, 54321</li>
              <li className="pt-2"><a href="mailto:hello@apexagency.com" className="hover:text-primary">hello@apexagency.com</a></li>
              <li><a href="tel:+1234567890" className="hover:text-primary">+1 (234) 567-890</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold font-headline">Newsletter</h4>
            <p className="mt-4 text-sm text-muted-foreground">Get our latest insights and strategies delivered to your inbox.</p>
            <form className="mt-4 flex gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Apex Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
