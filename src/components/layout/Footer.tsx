import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-primary-foreground/80">
              Clarity in design. Impact in results.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">Twitter</Link>
              <Link href="#" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">Facebook</Link>
              <Link href="#" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">LinkedIn</Link>
              <Link href="#" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">Instagram</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold font-headline text-primary-foreground">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="text-primary-foreground/60 transition-colors hover:text-primary-foreground">About</Link></li>
              <li><Link href="/services" className="text-primary-foreground/60 transition-colors hover:text-primary-foreground">Services</Link></li>
              <li><Link href="/portfolio" className="text-primary-foreground/60 transition-colors hover:text-primary-foreground">Work</Link></li>
              <li><Link href="/blog" className="text-primary-foreground/60 transition-colors hover:text-primary-foreground">Blog</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/60 transition-colors hover:text-primary-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold font-headline text-primary-foreground">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/60">
              <li>123 Creative Lane, Suite 100</li>
              <li>Innovation City, 54321</li>
              <li className="pt-2"><a href="mailto:hello@grownex.com" className="transition-colors hover:text-primary-foreground">hello@grownex.com</a></li>
              <li><a href="tel:+1234567890" className="transition-colors hover:text-primary-foreground">+1 (234) 567-890</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold font-headline text-primary-foreground">Updates</h4>
            <p className="mt-4 text-sm text-primary-foreground/80">Subscribe for our latest insights.</p>
            <form className="mt-4 flex gap-2">
              <Input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 bg-transparent border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:ring-accent" 
              />
              <Button type="submit" variant="secondary">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Grownex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
