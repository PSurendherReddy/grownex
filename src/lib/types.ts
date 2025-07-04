export interface Service {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  category: {
    title: string;
    slug: string;
  };
  caseStudySlug?: string;
  stats?: {
    value: string;
    label: string;
  }[];
}

export interface ServiceGroup {
  title: string;
  slug: string;
  description: string;
  services: {
    title: string;
    slug: string;
    description: string;
  }[];
}

export interface PortfolioItem {
  title: string;
  slug: string;
  category: string;
  description: string;
  client: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
}

export interface Testimonial {
  name: string;
  title: string;
  quote: string;
}

export interface Partner {
    name: string;
}

export interface BlogPost {
    slug: string;
    title: string;
    author: string;
    date: string;
    category: string;
    excerpt: string;
    content: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}
