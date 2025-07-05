'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { serviceGroups } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowRight, Menu } from 'lucide-react';

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
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);

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
                <div 
                  key={href}
                  className="relative"
                  onMouseEnter={() => setIsServicesMenuOpen(true)}
                  onMouseLeave={() => setIsServicesMenuOpen(false)}
                >
                  <Link
                    href="/services"
                    className={cn(
                      'flex items-center gap-1 text-sm transition-colors hover:text-primary focus:outline-none nav-link-underline',
                      pathname.startsWith('/services') ? 'text-primary active' : 'text-foreground'
                    )}
                  >
                    {label}
                  </Link>
                  {isServicesMenuOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-screen max-w-7xl">
                      <div className="bg-background shadow-lg rounded-lg border overflow-hidden">
                        <div className="p-8">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
                            {serviceGroups.map((group) => (
                              <div key={group.slug}>
                                <h3 className="font-semibold text-base font-headline mb-4 text-primary">
                                  <Link href={`/services#${group.slug}`} onClick={() => setIsServicesMenuOpen(false)} className="hover:text-accent hover:no-underline flex items-center gap-2">
                                    {group.title}
                                  </Link>
                                </h3>
                                <ul className="space-y-3">
                                  {group.services.map((service) => (
                                    <li key={service.slug}>
                                      <Link href={`/services/${service.slug}`} onClick={() => setIsServicesMenuOpen(false)} className="text-foreground hover:text-accent text-sm">
                                        {service.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="h-1 bg-accent"></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'text-sm transition-colors hover:text-primary nav-link-underline',
                  pathname === href ? 'text-primary active' : 'text-foreground'
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild>
            <Link href="/contact">
              Book a Free Call
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
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
            <nav className="grid gap-6 p-6 text-lg">
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
                            'py-2 text-lg hover:no-underline transition-colors hover:text-primary',
                            pathname.startsWith('/services') ? 'text-primary' : 'text-foreground'
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
                                  pathname === '/services' ? 'text-primary' : 'text-foreground'
                                )}
                              >
                                All Services
                              </Link>
                            {serviceGroups.map((group) => (
                              <Accordion type="single" collapsible className="w-full" key={group.slug}>
                                <AccordionItem value={group.slug} className="border-b-0">
                                  <AccordionTrigger className="py-2 text-base hover:no-underline">
                                    {group.title}
                                  </AccordionTrigger>
                                  <AccordionContent className="pl-4">
                                      <div className="flex flex-col gap-3 mt-2">
                                        {group.services.map(service => (
                                          <Link
                                            key={service.slug}
                                            href={`/services/${service.slug}`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={cn(
                                              'text-base font-normal transition-colors hover:text-primary',
                                              pathname === `/services/${service.slug}` ? 'text-primary' : 'text-foreground'
                                            )}
                                          >
                                            {service.title}
                                          </Link>
                                        ))}
                                      </div>
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
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
                      pathname === href ? 'text-primary' : 'text-foreground'
                    )}
                  >
                    {label}
                  </Link>
                );
              })}
              <Button asChild className="mt-4">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Book a Free Call
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
