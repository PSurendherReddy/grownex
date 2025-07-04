import type { Service, PortfolioItem, Testimonial, Partner, BlogPost, TeamMember } from './types';
import { Paintbrush, LineChart, Megaphone, Users, BrainCircuit, Code, Camera, Share2 } from 'lucide-react';

export const services: Service[] = [
  {
    title: 'Graphic Design & Branding',
    slug: 'graphic-design-branding',
    description: 'Crafting powerful brand identities that connect and convert.',
    longDescription: 'We build memorable brands from the ground up, providing everything you need for a cohesive and compelling brand presence. Our strategic approach ensures your brand not only looks good but also communicates your core values and resonates with your target audience.',
    icon: Paintbrush,
    offerings: [
        { title: 'Logo Design', description: 'Unique and memorable logo creation reflecting your brand’s essence.' },
        { title: 'Brand Identity & Strategy', description: 'Developing a complete brand identity and a roadmap for its growth.' },
        { title: 'Brand Guidelines', description: 'Comprehensive guidelines to ensure brand consistency across all channels.' },
    ],
    caseStudySlug: 'brand-refresh-innovatech'
  },
  {
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    description: 'Driving targeted traffic and generating qualified leads online.',
    longDescription: 'Our digital marketing services are designed to place your brand in front of the right audience at the right time. We use a data-driven approach to create, manage, and optimize campaigns across various channels, ensuring maximum ROI and sustainable growth.',
    icon: LineChart,
    offerings: [
        { title: 'SEO & AEO', description: 'Improving organic visibility on search engines to attract high-intent traffic.' },
        { title: 'Lead Generation', description: 'Building and executing strategies to fill your sales pipeline with qualified leads.' },
        { title: 'PPC ADS - Google, Meta, LinkedIn', description: 'Managing paid campaigns for immediate impact.' },
        { title: 'Email Marketing', description: 'Nurturing leads and customers with targeted email campaigns and automation.' },
        { title: 'Social Media Management', description: 'Building and engaging your community across social platforms.' },
    ],
    caseStudySlug: 'lead-gen-for-saas'
  },
  {
    title: 'Offline Advertising',
    slug: 'offline-advertising',
    description: 'Making a real-world impact with tangible advertising solutions.',
    longDescription: "While digital is crucial, offline advertising creates a powerful, tangible presence that can't be ignored. We specialize in high-impact offline campaigns that capture attention in physical spaces, from bustling city centers to local communities.",
    icon: Megaphone,
    offerings: [
        { title: 'Hoardings & Malls', description: 'Large-format ads in high-traffic areas for maximum visibility.' },
        { title: 'College & Campus Ads', description: 'Targeting specific demographics in their living and learning spaces.' },
        { title: 'Apartment Complexes', description: 'Reaching residents directly within their communities.' },
        { title: 'Petrol Pumps', description: 'Engaging a captive audience during their daily commute.' },
        { title: 'Pamphlet Distribution', description: 'Direct, localized marketing for events, offers, and announcements.' },
    ]
  },
  {
    title: 'Photography & Video Production',
    slug: 'photo-video-production',
    description: 'Creating stunning visual content that tells your brand’s story.',
    longDescription: "High-quality visuals are non-negotiable in today's market. Our production team specializes in creating compelling photography and videography that captures the essence of your brand, products, and events, making your story unforgettable.",
    icon: Camera,
    offerings: [
        { title: 'Product Shoots', description: 'Crisp, professional photos for e-commerce, catalogs, and marketing materials.' },
        { title: 'Event Shoots: Sports, Corporate, Opening Events', description: 'Capturing the energy and key moments of your important events.' },
    ]
  },
  {
    title: 'Public Relations',
    slug: 'public-relations',
    description: 'Building credibility and shaping public perception.',
    longDescription: "Manage your reputation and build trust with our comprehensive public relations services. We craft compelling narratives and secure media coverage to position you or your business as a leader in your field.",
    icon: Users,
    offerings: [
        { title: 'Political PR', description: 'Strategic communications and media management for political campaigns and figures.' },
        { title: 'Business PR', description: 'Enhancing corporate reputation and managing communications for businesses.' },
        { title: 'Entrepreneur Features', description: 'Securing media features and interviews for entrepreneurs and thought leaders.' },
        { title: 'Press Release Handling', description: 'Crafting and distributing effective press releases to the right channels.' },
    ]
  },
  {
    title: 'Business Consulting',
    slug: 'business-consulting',
    description: 'Providing strategic insights for sustainable growth.',
    longDescription: "Beyond marketing, we offer strategic business consulting to help you build a solid foundation for success. Our experts analyze your market, operations, and competition to provide actionable insights and clear roadmaps for growth and efficiency.",
    icon: BrainCircuit,
    offerings: [
        { title: 'SOP Creation', description: 'Developing Standard Operating Procedures to streamline your business processes.' },
        { title: 'Market & Competitor Research', description: 'In-depth analysis of the market landscape and your competition.' },
        { title: 'Architecture Analysis', description: 'Evaluating and optimizing your business or technical architecture.' },
        { title: 'Data Collection & Surveys', description: 'Gathering crucial data through targeted surveys and research methods.' },
        { title: 'Government/Private Grants Research', description: 'Identifying and assisting with applications for funding opportunities.' },
    ]
  },
  {
    title: 'Influencer Marketing',
    slug: 'influencer-marketing',
    description: 'Amplifying your message through trusted voices.',
    longDescription: "Leverage the power of influence to connect with your audience authentically. We design and manage end-to-end influencer marketing campaigns that drive brand awareness, engagement, and conversions.",
    icon: Share2,
    offerings: [
        { title: 'Influencers, Memers, & Celebrities', description: 'Identifying and collaborating with the right voices for your brand.' },
        { title: 'Campaign Execution & Reporting', description: 'Managing campaigns from start to finish with detailed performance reporting.' },
    ]
  },
  {
    title: 'Website Development',
    slug: 'website-development',
    description: 'Building high-performance websites that convert visitors.',
    longDescription: "Your website is your digital storefront. We build websites that are not only beautiful but also fast, secure, and optimized for conversion. From e-commerce to custom platforms, we bring your digital vision to life.",
    icon: Code,
    offerings: [
        { title: 'WordPress Websites', description: 'Flexible and scalable websites built on the world’s most popular CMS.' },
        { title: 'Shopify Stores', description: 'Powerful e-commerce solutions for businesses of all sizes.' },
        { title: 'Webflow Designs', description: 'Visually stunning and highly interactive websites with no-code flexibility.' },
        { title: 'Custom-Coded Websites', description: 'Bespoke web solutions for unique requirements and maximum performance.' },
    ],
    caseStudySlug: 'ecommerce-platform-for-artisan'
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
