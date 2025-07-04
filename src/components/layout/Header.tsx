'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, Mountain, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { services } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/marketing-advisor', label: 'AI Advisor' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map(({ href, label }) => {
            if (href === '/services') {
              return (
                <DropdownMenu key={href}>
                  <DropdownMenuTrigger
                    className={cn(
                      'flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary focus:outline-none',
                      pathname.startsWith('/services') ? 'text-primary font-semibold' : 'text-muted-foreground'
                    )}
                  >
                    {label} <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link href="/services">Services Overview</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    {services.map((service) => (
                      <DropdownMenuItem key={service.slug} asChild>
                        <Link href={`/services/${service.slug}`}>{service.title}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === href ? 'text-primary font-semibold' : 'text-muted-foreground'
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild>
            <Link href="/contact">Book a Free Call</Link>
          </Button>
        </div>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 p-6 text-lg font-medium">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Logo />
              </Link>
              {navLinks.map(({ href, label }) => {
                if (href === '/services') {
                  return (
                    <Accordion type="single" collapsible className="w-full -my-2" key={href}>
                      <AccordionItem value="services" className="border-b-0">
                        <AccordionTrigger
                          className={cn(
                            'py-2 text-lg font-medium hover:no-underline transition-colors hover:text-primary [&[data-state=open]>svg]:text-primary',
                            pathname.startsWith('/services') ? 'text-primary' : 'text-muted-foreground'
                          )}
                        >
                          {label}
                        </AccordionTrigger>
                        <AccordionContent className="pl-4">
                          <div className="flex flex-col gap-4 mt-2">
                            <Link
                              href="/services"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={cn(
                                'text-base font-normal transition-colors hover:text-primary',
                                pathname === '/services' ? 'text-primary' : 'text-muted-foreground'
                              )}
                            >
                              Services Overview
                            </Link>
                            {services.map((service) => (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                  'text-base font-normal transition-colors hover:text-primary',
                                  pathname === `/services/${service.slug}` ? 'text-primary' : 'text-muted-foreground'
                                )}
                              >
                                {service.title}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  );
                }
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'transition-colors hover:text-primary',
                      pathname === href ? 'text-primary' : 'text-muted-foreground'
                    )}
                  >
                    {label}
                  </Link>
                );
              })}
              <Button asChild className="mt-4">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Book a Free Call
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
