import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Clarity in design. Impact in results.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Twitter</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Facebook</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">LinkedIn</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Instagram</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold font-headline">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="/portfolio" className="text-muted-foreground hover:text-primary">Work</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold font-headline">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>123 Creative Lane, Suite 100</li>
              <li>Innovation City, 54321</li>
              <li className="pt-2"><a href="mailto:hello@grownex.com" className="hover:text-primary">hello@grownex.com</a></li>
              <li><a href="tel:+1234567890" className="hover:text-primary">+1 (234) 567-890</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold font-headline">Updates</h4>
            <p className="mt-4 text-sm text-muted-foreground">Subscribe for our latest insights.</p>
            <form className="mt-4 flex gap-2">
              <Input type="email" placeholder="Email address" className="flex-1" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Grownex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
