import type { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  offerings: { title: string; description: string }[];
  caseStudySlug?: string;
}

export interface PortfolioItem {
  title: string;
  slug: string;
  category: string;
  description: string;
  imageUrl: string;
  client: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  images: string[];
}

export interface Testimonial {
  name: string;
  title: string;
  quote: string;
  avatar: string;
}

export interface Partner {
    name: string;
    logoUrl: string;
}

export interface BlogPost {
    slug: string;
    title: string;
    author: string;
    date: string;
    category: string;
    excerpt: string;
    imageUrl: string;
    content: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}
