import type { Service, PortfolioItem, Testimonial, Partner, BlogPost, TeamMember } from './types';
import { Paintbrush, LineChart, Megaphone, Users, BrainCircuit, Code, Camera } from 'lucide-react';

export const services: Service[] = [
  {
    title: 'Branding & Design',
    slug: 'branding-design',
    description: 'Crafting unique brand identities that resonate and endure.',
    longDescription: "In a crowded marketplace, a strong brand is your greatest asset. We go beyond logos to build comprehensive brand ecosystems that tell your story, captivate your audience, and create lasting connections. Our process is strategic, creative, and tailored to your unique business goals.",
    icon: Paintbrush,
    category: 'Branding & Design',
    offerings: [
        { title: 'Logo Design & Visual Identity', description: 'Creating memorable logos and a complete visual system for your brand.' },
        { title: 'Brand Strategy & Messaging', description: 'Defining your brand’s core message, voice, and positioning.' },
        { title: 'Corporate Decks & Collaterals', description: 'Designing professional materials that communicate your value effectively.' },
    ],
    caseStudySlug: 'brand-refresh-innovatech'
  },
  {
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    description: 'Driving targeted traffic and generating qualified leads online.',
    longDescription: 'Our digital marketing services are designed to place your brand in front of the right audience at the right time. We use a data-driven approach to create, manage, and optimize campaigns across various channels, ensuring maximum ROI and sustainable growth.',
    icon: LineChart,
    category: 'Digital Marketing',
    offerings: [
        { title: 'SEO & AEO', description: 'Optimizing for search and answer engines to boost organic visibility.' },
        { title: 'Paid Advertising (Google, Meta, LinkedIn)', description: 'Managing targeted ad campaigns to drive immediate results.' },
        { title: 'Email Marketing & Automation', description: 'Nurturing leads and retaining customers through automated email sequences.' },
    ],
    caseStudySlug: 'lead-gen-for-saas'
  },
  {
    title: 'Offline Advertising',
    slug: 'offline-advertising',
    description: 'Making a real-world impact with tangible advertising solutions.',
    longDescription: "While digital is crucial, offline advertising creates a powerful, tangible presence that can't be ignored. We specialize in high-impact offline campaigns that capture attention in physical spaces, from bustling city centers to local communities.",
    icon: Megaphone,
    category: 'Offline Advertising',
    offerings: [
        { title: 'Hoardings & Mall Advertising', description: 'Large-format ads in high-traffic areas.' },
        { title: 'Campus & Apartment Ads', description: 'Targeting specific demographics in their living and learning spaces.' },
        { title: 'Pamphlet Distribution', description: 'Direct, localized marketing for events and promotions.' },
    ]
  },
  {
    title: 'PR & Influencer Marketing',
    slug: 'pr-influencer-marketing',
    description: 'Building credibility and amplifying your message through trusted voices.',
    longDescription: "Shape public perception and leverage influential voices with our PR and influencer marketing services. We build authentic relationships and craft compelling narratives to enhance your brand's reputation and reach.",
    icon: Users,
    category: 'PR & Influencer Marketing',
    offerings: [
        { title: 'Public Relations', description: 'Managing media relations and press releases for politicians, entrepreneurs, and businesses.' },
        { title: 'Influencer Collaboration', description: 'Partnering with influencers to reach engaged audiences.' },
        { title: 'Meme Marketing & Celebrity Endorsements', description: 'Creating viral content and leveraging celebrity power.' },
    ]
  },
  {
    title: 'Business Consulting',
    slug: 'business-consulting',
    description: 'Providing strategic insights and operational frameworks for growth.',
    longDescription: "Beyond marketing, we offer strategic business consulting to help you build a solid foundation for success. Our experts analyze your market, operations, and competition to provide actionable insights and clear roadmaps.",
    icon: BrainCircuit,
    category: 'Consulting Services',
    offerings: [
        { title: 'SOP Creation & Market Research', description: 'Developing standard operating procedures and gathering critical market intelligence.' },
        { title: 'Competitor & Architecture Analysis', description: 'Understanding the competitive landscape and your business structure.' },
        { title: 'Data Collection & Grant Research', description: 'Conducting surveys and identifying funding opportunities.' },
    ]
  },
  {
    title: 'Website Development',
    slug: 'website-development',
    description: 'Building high-performance websites that convert visitors into customers.',
    longDescription: "Your website is your digital storefront. We build websites that are not only beautiful but also fast, secure, and optimized for conversion. From simple landing pages to complex e-commerce platforms, we have the expertise to bring your vision to life.",
    icon: Code,
    category: 'Website Development',
    offerings: [
        { title: 'WordPress, Webflow, & Shopify', description: 'Developing on leading platforms for flexibility and scalability.' },
        { title: 'Custom Website Design', description: 'Creating unique, tailor-made websites from scratch.' },
        { title: 'Performance Optimization', description: 'Ensuring your site is fast, responsive, and SEO-friendly.' },
    ],
    caseStudySlug: 'ecommerce-platform-for-artisan'
  },
  {
    title: 'Shoots & Production',
    slug: 'shoots-production',
    description: 'Creating stunning visual content that tells your brand’s story.',
    longDescription: "High-quality visuals are non-negotiable in today's market. Our production team specializes in creating compelling photography and videography that captures the essence of your brand, products, and events.",
    icon: Camera,
    category: 'Shoots & Production',
    offerings: [
        { title: 'Product Photography', description: 'Crisp, professional photos for e-commerce and marketing.' },
        { title: 'Event Shoots', description: 'Capturing the energy of sports, corporate, and opening events.' },
        { title: 'Corporate Videos', description: 'Producing brand stories, testimonials, and promotional videos.' },
    ]
  }
];

export const portfolio: PortfolioItem[] = [
  {
    title: 'InnovaTech Brand Refresh',
    slug: 'brand-refresh-innovatech',
    category: 'Branding',
    description: 'A complete overhaul of a legacy tech brand for the modern era.',
    imageUrl: 'https://placehold.co/600x400.png',
    client: 'InnovaTech Solutions',
    challenge: 'InnovaTech, a 20-year-old IT company, had a dated brand identity that failed to communicate its cutting-edge services. They were losing bids to younger, more modern-looking competitors.',
    solution: "We conducted a full brand audit and developed a new strategy focused on 'Human-centered Innovation.' This led to a new logo, visual identity, and messaging that was clean, bold, and forward-thinking. We rolled this out across a new website, corporate deck, and all marketing collaterals.",
    results: [
        { metric: '+45%', value: 'Increase in inbound leads', description: 'within the first quarter post-launch.' },
        { metric: '+20%', value: 'Higher contract value', description: 'attributed to improved brand perception.' },
        { metric: '95%', value: 'Positive employee feedback', description: 'on the new brand identity.' },
    ],
    images: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
  },
  {
    title: 'SaaS Startup Lead Generation',
    slug: 'lead-gen-for-saas',
    category: 'Digital Marketing',
    description: 'Scaling a B2B SaaS platform from 10 to 1000 demo requests per month.',
    imageUrl: 'https://placehold.co/600x400.png',
    client: 'ConnectFlow',
    challenge: 'ConnectFlow had a great product but struggled to generate consistent, high-quality leads. Their existing marketing efforts were sporadic and untargeted.',
    solution: "We implemented a multi-channel digital marketing strategy. This included targeted LinkedIn Ads campaigns, a comprehensive SEO strategy to capture high-intent keywords, and an automated email nurturing sequence to convert website visitors into demo requests.",
    results: [
        { metric: '10x', value: 'Increase in MQLs', description: 'from 100 to 1,000 per month in 6 months.' },
        { metric: '-30%', value: 'Cost Per Acquisition', description: 'due to campaign optimization and improved targeting.' },
        { metric: '#1', value: 'Google Ranking', description: 'for 5 high-value commercial keywords.' },
    ],
    images: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
  },
  {
    title: 'Artisan E-commerce Platform',
    slug: 'ecommerce-platform-for-artisan',
    category: 'Web Development',
    description: 'Building a beautiful and functional Shopify store for a luxury goods brand.',
    imageUrl: 'https://placehold.co/600x400.png',
    client: 'The Artisan Collection',
    challenge: "The brand's existing website was clunky, difficult to navigate, and not mobile-friendly, leading to a high cart abandonment rate.",
    solution: "We designed and developed a custom Shopify theme that reflected the brand's luxury aesthetic. The new site featured high-quality product photography, a streamlined checkout process, and was fully optimized for mobile performance.",
    results: [
        { metric: '+150%', value: 'Increase in online sales', description: 'in the first 3 months.' },
        { metric: '-50%', value: 'Reduction in cart abandonment', description: 'thanks to the new checkout flow.' },
        { metric: '+80%', value: 'Increase in mobile traffic', description: 'due to responsive design.' },
    ],
    images: ['https://placehold.co/800x600.png', 'https://placehold.co/800x600.png', 'https://placehold.co/800x600.png'],
  },
];

export const testimonials: Testimonial[] = [
    { name: 'Sarah Johnson', title: 'CEO, InnovaTech', quote: "Apex Agency completely transformed our brand. Their strategic approach and creative execution were second to none. We've seen a significant impact on our business.", avatar: 'https://placehold.co/100x100.png' },
    { name: 'David Chen', title: 'Founder, ConnectFlow', quote: 'The digital marketing campaign they ran for us was a game-changer. Our lead flow has never been stronger, and our cost per acquisition dropped significantly.', avatar: 'https://placehold.co/100x100.png' },
    { name: 'Maria Rodriguez', title: 'Owner, The Artisan Collection', quote: 'I am absolutely in love with my new website. It perfectly captures the essence of my brand and has made a huge difference in my online sales. The team was a pleasure to work with.', avatar: 'https://placehold.co/100x100.png' },
    { name: 'James Williams', title: 'Marketing Director, FutureCorp', quote: "Their team is incredibly knowledgeable and proactive. They feel like an extension of our own marketing department. Highly recommended for any business looking to grow.", avatar: 'https://placehold.co/100x100.png' },
    { name: 'Li Wei', title: 'Political Candidate', quote: "The PR campaign managed by Apex was instrumental in my election success. They secured key media placements and managed my public image with professionalism and skill.", avatar: 'https://placehold.co/100x100.png' },
];

export const partners: Partner[] = [
    { name: 'Innovatech', logoUrl: 'https://placehold.co/120x40.png' },
    { name: 'ConnectFlow', logoUrl: 'https://placehold.co/120x40.png' },
    { name: 'Artisan', logoUrl: 'https://placehold.co/120x40.png' },
    { name: 'FutureCorp', logoUrl: 'https://placehold.co/120x40.png' },
    { name: 'QuantumLeap', logoUrl: 'https://placehold.co/120x40.png' },
    { name: 'EcoSolutions', logoUrl: 'https://placehold.co/120x40.png' },
];

export const blogPosts: BlogPost[] = [
    {
        slug: 'the-ultimate-guide-to-seo-in-2024',
        title: 'The Ultimate Guide to SEO in 2024',
        author: 'Jane Doe',
        date: '2024-07-15',
        category: 'Digital Marketing',
        excerpt: 'Search Engine Optimization is constantly evolving. In this guide, we break down the most important ranking factors and strategies you need to know this year.',
        imageUrl: 'https://placehold.co/800x400.png',
        content: `
## Introduction
The world of SEO is dynamic. What worked last year might not be as effective today. In 2024, the focus has shifted even more towards user experience, AI-driven search, and high-quality, authoritative content.

## Core Pillars of Modern SEO

### 1. Answer Engine Optimization (AEO)
It's no longer just about keywords; it's about answering questions. Structuring your content to directly answer the queries of your target audience is crucial. Use tools like 'AlsoAsked' to find related questions.

### 2. E-E-A-T: Experience, Expertise, Authoritativeness, and Trustworthiness
Google's quality rater guidelines heavily emphasize E-E-A-T. This means you need to:
- Showcase author expertise.
- Build backlinks from reputable sites.
- Have clear contact information.
- Display customer reviews and testimonials.

### 3. Technical SEO
A technically sound website is the foundation of good SEO. Key areas to focus on:
- **Core Web Vitals:** Ensure your site loads quickly and is stable.
- **Mobile-First Indexing:** Your site must be perfectly optimized for mobile devices.
- **Schema Markup:** Help search engines understand your content better with structured data.

## Conclusion
Staying ahead in SEO requires a holistic approach that blends technical excellence with high-quality content and a deep understanding of user intent. Focus on these pillars to build a sustainable organic presence.`
    },
    {
        slug: 'building-a-brand-that-lasts',
        title: 'Beyond the Logo: Building a Brand That Lasts',
        author: 'John Smith',
        date: '2024-07-10',
        category: 'Branding & Design',
        excerpt: 'A great brand is more than a logo. It\'s a promise, a story, and a relationship. Learn the key components of building a resilient and beloved brand.',
        imageUrl: 'https://placehold.co/800x400.png',
        content: `
## The Essence of a Brand
Your brand is the gut feeling a person has about your product, service, or organization. It's not what you say it is, it's what *they* say it is. To build a lasting brand, you need to focus on three core areas:

### 1. Brand Strategy
This is the "why" behind your brand. It includes:
- **Purpose:** Why do you exist beyond making money?
- **Vision:** What future do you want to help create?
- **Values:** What principles guide your behavior?
- **Positioning:** How do you want to be perceived in the market relative to competitors?

### 2. Brand Identity
This is the tangible expression of your brand strategy. It's how your brand looks, feels, and sounds.
- **Visual Identity:** Logo, color palette, typography, imagery.
- **Verbal Identity:** Brand voice, tone, messaging, and tagline.

### 3. Brand Experience
This is how your customers interact with your brand across all touchpoints. Consistency is key. From your website to your customer service, every interaction should reinforce your brand promise.

## Conclusion
Building a strong brand is an ongoing process of aligning your strategy, identity, and experience. It requires commitment, consistency, and a genuine desire to connect with your audience.
`
    },
    {
        slug: 'the-power-of-offline-marketing',
        title: 'Why Offline Marketing Still Matters in a Digital World',
        author: 'Emily White',
        date: '2024-07-05',
        category: 'Offline Advertising',
        excerpt: 'In an age of digital saturation, offline marketing offers a unique opportunity to cut through the noise and create memorable, tangible experiences.',
        imageUrl: 'https://placehold.co/800x400.png',
        content: `
## Cutting Through the Clutter
People are bombarded with digital ads every day, leading to "banner blindness" and ad fatigue. Offline marketing provides a refreshing change of pace and can capture attention in a different way.

## Key Offline Strategies

### 1. Experiential Marketing
Create immersive events or pop-up shops that allow customers to experience your brand firsthand. This builds strong emotional connections.

### 2. Print Advertising
A well-designed ad in a niche magazine or a creative direct mail campaign can have a significant impact. The tangible nature of print makes it feel more personal and trustworthy.

### 3. Out-of-Home (OOH) Advertising
Billboards, transit ads, and other forms of OOH advertising can build massive brand awareness in specific geographic areas. They are unavoidable and can create a larger-than-life impression.

## Integrating Online and Offline
The most powerful strategies combine both online and offline efforts. Use a QR code on a flyer to drive traffic to a landing page, or run a social media campaign to promote a physical event.

## Conclusion
Don't neglect the power of the physical world. A well-executed offline marketing campaign can complement your digital efforts, build deeper brand trust, and create a lasting impact.
`
    },
];

export const team: TeamMember[] = [
  {
    name: "Alex Thompson",
    role: "Founder & CEO",
    bio: "With over 15 years in the industry, Alex is a visionary leader passionate about building brands that make a difference. His strategic mindset and creative drive are the heart of Apex Agency.",
    imageUrl: "https://placehold.co/400x400.png"
  },
  {
    name: "Brenda Chen",
    role: "Creative Director",
    bio: "Brenda is the artistic force behind our most iconic campaigns. She translates brand strategies into stunning visual identities and compelling narratives that captivate audiences.",
    imageUrl: "https://placehold.co/400x400.png"
  },
  {
    name: "Carlos Rodriguez",
    role: "Head of Digital Marketing",
    bio: "A data-driven strategist, Carlos excels at navigating the complexities of the digital landscape. He leads our team of SEO, PPC, and social media experts to deliver measurable results.",
    imageUrl: "https://placehold.co/400x400.png"
  },
  {
    name: "Diana Miller",
    role: "Lead Web Developer",
    bio: "Diana combines technical prowess with a keen eye for design. She leads the development of high-performance, user-friendly websites that are both beautiful and functional.",
    imageUrl: "https://placehold.co/400x400.png"
  }
];
