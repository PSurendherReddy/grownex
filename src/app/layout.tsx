import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster"
import { FloatingActionButtons } from '@/components/FloatingActionButtons';

export const metadata: Metadata = {
  title: {
    default: 'Grownex - Focused Design & Marketing Agency',
    template: '%s | Grownex',
  },
  description:
    'A design and marketing agency building brands with clarity and impact. We offer SEO, Branding, Web Development, and AI-powered marketing solutions.',
  openGraph: {
    title: 'Grownex - Focused Design & Marketing Agency',
    description: 'A design and marketing agency building brands with clarity and impact.',
    siteName: 'Grownex',
    images: [
      {
        url: 'https://placehold.co/1200x630.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grownex - Focused Design & Marketing Agency',
    description: 'A design and marketing agency building brands with clarity and impact.',
    images: ['https://placehold.co/1200x630.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
       <head>
      </head>
      <body
        className={`font-body antialiased bg-background text-foreground`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActionButtons />
        <Toaster />
      </body>
    </html>
  );
}
