import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster"
import { FloatingActionButtons } from '@/components/FloatingActionButtons';

export const metadata: Metadata = {
  title: 'Grownex - Focused Design & Marketing',
  description:
    'A design and marketing agency building brands with clarity and impact.',
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
