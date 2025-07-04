import type { Service, ServiceGroup, PortfolioItem, Testimonial, Partner, BlogPost, TeamMember } from './types';

export const serviceGroups: ServiceGroup[] = [
  {
    title: 'Graphic Design & Branding',
    slug: 'graphic-design-branding',
    description: 'Creating clear, impactful brand identities.',
    services: [
        { title: 'Logo Design', slug: 'logo-design', description: 'Simple, memorable logo design.' },
        { title: 'Brand Identity & Strategy', slug: 'brand-identity-strategy', description: 'A complete visual system and growth roadmap.' },
        { title: 'Brand Guidelines', slug: 'brand-guidelines', description: 'Ensuring brand consistency across all touchpoints.' },
    ],
  },
  {
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    description: 'Driving targeted traffic and generating qualified leads.',
    services: [
        { title: 'SEO & AEO', slug: 'seo-aeo', description: 'Improving visibility on search and answer engines.' },
        { title: 'Lead Generation', slug: 'lead-generation', description: 'Filling your sales pipeline with qualified leads.' },
        { title: 'PPC Advertising', slug: 'ppc-advertising', description: 'Paid campaigns for immediate impact.' },
        { title: 'Email Marketing', slug: 'email-marketing', description: 'Nurturing leads with targeted campaigns.' },
        { title: 'Social Media Management', slug: 'social-media-management', description: 'Building and engaging your community.' },
    ],
  },
  {
    title: 'Offline Advertising',
    slug: 'offline-advertising',
    description: 'Making a real-world impact with tangible solutions.',
    services: [
        { title: 'Hoarding Advertising', slug: 'hoarding-advertising', description: 'Large-format ads for maximum visibility.' },
        { title: 'Mall Advertising', slug: 'mall-advertising', description: 'Engaging captive audiences in shopping destinations.' },
        { title: 'Campus Ads', slug: 'college-campus-ads', description: 'Targeting students and faculty on campus.' },
        { title: 'Apartment Ads', slug: 'apartment-complex-ads', description: 'Reaching residents within their communities.' },
        { title: 'Petrol Pump Ads', slug: 'petrol-pump-advertising', description: 'Capturing attention during refueling stops.' },
        { title: 'Pamphlet Distribution', slug: 'pamphlet-distribution', description: 'Direct, localized marketing.' },
    ],
  },
    {
    title: 'Photo & Video',
    slug: 'photo-video-production',
    description: 'Creating stunning visual content that tells your story.',
    services: [
        { title: 'Product Shoots', slug: 'product-shoots', description: 'Professional photos for e-commerce and marketing.' },
        { title: 'Event Shoots', slug: 'event-photo-video', description: 'Capturing corporate events, sports, and openings.' },
    ],
  },
  {
    title: 'Public Relations',
    slug: 'public-relations',
    description: 'Building credibility and shaping public perception.',
    services: [
        { title: 'Political PR', slug: 'political-pr', description: 'Strategic communications for political figures.' },
        { title: 'Business PR', slug: 'business-pr', description: 'Enhancing corporate reputation and managing media.' },
        { title: 'Entrepreneur Features', slug: 'entrepreneur-features', description: 'Securing media features for thought leaders.' },
        { title: 'Press Releases', slug: 'press-release-handling', description: 'Crafting and distributing effective press releases.' },
    ],
  },
  {
    title: 'Business Consulting',
    slug: 'business-consulting',
    description: 'Providing strategic insights for sustainable growth.',
    services: [
        { title: 'SOP Creation', slug: 'sop-creation', description: 'Developing procedures to streamline processes.' },
        { title: 'Market Research', slug: 'market-competitor-research', description: 'In-depth analysis of the market and competition.' },
        { title: 'Architecture Analysis', slug: 'architecture-analysis', description: 'Evaluating your business or technical architecture.' },
        { title: 'Data & Surveys', slug: 'data-collection-surveys', description: 'Gathering crucial data through targeted research.' },
        { title: 'Grant Research', slug: 'grant-research', description: 'Identifying and assisting with grant applications.' },
    ],
  },
  {
    title: 'Influencer Marketing',
    slug: 'influencer-marketing',
    description: 'Amplifying your message through trusted voices.',
    services: [
        { title: 'Influencer Sourcing', slug: 'influencer-sourcing-management', description: 'Connecting with influencers, memers, & celebrities.' },
        { title: 'Campaign Management', slug: 'influencer-campaign-management', description: 'Managing campaigns with performance reporting.' },
    ],
  },
  {
    title: 'Website Development',
    slug: 'website-development',
    description: 'Building high-performance websites that convert.',
    services: [
        { title: 'WordPress Websites', slug: 'wordpress-websites', description: 'Flexible and scalable sites on the world’s most popular CMS.' },
        { title: 'Shopify Stores', slug: 'shopify-stores', description: 'Powerful e-commerce solutions for businesses of all sizes.' },
        { title: 'Webflow Designs', slug: 'webflow-designs', description: 'Visually stunning, highly interactive websites.' },
        { title: 'Custom-Coded Sites', slug: 'custom-coded-websites', description: 'Bespoke web solutions for unique requirements.' },
    ],
  },
];


const createServicePageContent = (group: ServiceGroup, service: { title: string; slug: string; description: string; caseStudySlug?: string }) => {
    let longDescription = `Our ${service.title} service is a core part of our ${group.title} offerings. We believe in a focused approach, tailoring every aspect of our work to fit your unique business needs. Our team collaborates closely with you to understand your vision, ensuring the solutions we provide are effective, innovative, and clear. We leverage data-driven insights to inform our strategies, focusing on delivering measurable outcomes that contribute to your long-term success.`;

    switch (service.slug) {
        case 'logo-design':
            longDescription = `A logo is the face of your brand. Our approach to ${service.title} goes beyond aesthetics; we explore your brand's core values to design a logo that is both timeless and impactful. The result is a simple, memorable mark that reflects your brand's identity.`;
            break;
        case 'seo-aeo':
            longDescription = `Visibility is key. Our ${service.title} (Search & Answer Engine Optimization) services are designed to place your brand at the forefront of search results. We focus on a holistic strategy of technical SEO, quality content, and authority building to drive sustainable, high-intent organic traffic.`;
            break;
        case 'shopify-stores':
            longDescription = `In e-commerce, a functional online store is non-negotiable. We build ${service.title} that are visually clean and engineered for conversion. From custom theme development to performance optimization, we create seamless shopping experiences that drive sales.`;
            break;
    }

    let stats = [
        { value: '95%', label: 'Client satisfaction rate on delivered projects.' },
        { value: '24/7', label: 'Support and consultation available for our partners.' }
    ];

    switch (service.slug) {
        case 'logo-design':
            stats = [
                { value: '300+', label: 'Logos designed for startups and established enterprises.' },
                { value: '98%', label: 'Client approval rate on first design drafts.' }
            ];
            break;
        case 'brand-identity-strategy':
             stats = [
                { value: '45%', label: 'Average increase in brand recognition for our clients.' },
                { value: '100%', label: 'Brand consistency achieved across all platforms.' }
            ];
            break;
        case 'seo-aeo':
            stats = [
                { value: '50%', label: 'Average increase in organic traffic within 6 months.' },
                { value: 'Top 3', label: 'Ranking achieved for 80% of our clients\' target keywords.' }
            ];
            break;
        case 'ppc-advertising':
            stats = [
                { value: '3x', label: 'Average return on ad spend (ROAS) for our campaigns.' },
                { value: '25%', label: 'Average reduction in cost-per-acquisition (CPA).' }
            ];
            break;
        case 'shopify-stores':
            stats = [
                { value: '40%', label: 'Average conversion rate uplift for our e-commerce clients.' },
                { value: '100+', label: 'High-performance Shopify stores launched and optimized.' }
            ];
            break;
         case 'custom-coded-websites':
            stats = [
                { value: '100', label: 'Score on Google Lighthouse for performance and best practices.' },
                { value: '100%', label: 'Control over every aspect of design and functionality.' }
            ];
            break;
    }

    return {
        title: service.title,
        slug: service.slug,
        description: service.description,
        longDescription: longDescription,
        category: {
            title: group.title,
            slug: group.slug,
        },
        caseStudySlug: service.caseStudySlug,
        stats,
    }
}

export const services: Service[] = serviceGroups.flatMap(group => {
    const servicesWithCaseStudies = group.services.map(s => {
        if (s.slug === 'brand-identity-strategy') return { ...s, caseStudySlug: 'brand-refresh-innovatech' };
        if (s.slug === 'lead-generation') return { ...s, caseStudySlug: 'lead-gen-for-saas' };
        if (s.slug === 'shopify-stores') return { ...s, caseStudySlug: 'ecommerce-platform-for-artisan' };
        return s;
    });

    return servicesWithCaseStudies.map(service => createServicePageContent(group, service));
});


export const portfolio: PortfolioItem[] = [
  {
    title: 'InnovaTech Brand Refresh',
    slug: 'brand-refresh-innovatech',
    category: 'Branding',
    description: 'Modernizing a legacy tech brand to reflect its innovative services.',
    client: 'InnovaTech Solutions',
    challenge: "InnovaTech's dated brand identity failed to communicate its cutting-edge services, losing them business to modern competitors.",
    solution: "We developed a new strategy focused on 'Human-centered Innovation,' creating a clean, bold identity. This was applied to a new website and all marketing materials.",
    results: [
        { metric: '+45%', value: 'Increase in leads', description: 'post-launch.' },
        { metric: '+20%', value: 'Higher contract value', description: 'from improved brand perception.' },
        { metric: '95%', value: 'Positive employee feedback', description: 'on the new identity.' },
    ],
  },
  {
    title: 'SaaS Lead Generation',
    slug: 'lead-gen-for-saas',
    category: 'Digital Marketing',
    description: 'Scaling a B2B SaaS platform from 100 to 1,000 demo requests per month.',
    client: 'ConnectFlow',
    challenge: 'ConnectFlow had a great product but struggled to generate consistent, high-quality leads. Their marketing efforts were untargeted.',
    solution: "We implemented a multi-channel strategy including targeted LinkedIn Ads, a comprehensive SEO plan, and an automated email nurturing sequence to convert visitors into demo requests.",
    results: [
        { metric: '10x', value: 'Increase in MQLs', description: 'in 6 months.' },
        { metric: '-30%', value: 'Cost Per Acquisition', description: 'due to optimization.' },
        { metric: '#1', value: 'Google Ranking', description: 'for 5 high-value keywords.' },
    ],
  },
  {
    title: 'Artisan E-commerce Store',
    slug: 'ecommerce-platform-for-artisan',
    category: 'Web Development',
    description: 'Building a beautiful and functional Shopify store for a luxury goods brand.',
    client: 'The Artisan Collection',
    challenge: "The brand's existing website was clunky, difficult to navigate, and not mobile-friendly, causing a high cart abandonment rate.",
    solution: "We designed and developed a custom Shopify theme reflecting the brand's luxury aesthetic. The new site features a streamlined checkout and is fully optimized for mobile.",
    results: [
        { metric: '+150%', value: 'Increase in sales', description: 'in the first 3 months.' },
        { metric: '-50%', value: 'Cart abandonment rate', description: 'thanks to the new checkout.' },
        { metric: '+80%', value: 'Increase in mobile traffic', description: 'due to responsive design.' },
    ],
  },
];

export const testimonials: Testimonial[] = [
    { name: 'Sarah Johnson', title: 'CEO, InnovaTech', quote: "Grownex transformed our brand with a clear strategy and creative execution. The impact on our business was significant." },
    { name: 'David Chen', title: 'Founder, ConnectFlow', quote: 'The digital marketing campaign was a game-changer. Our lead flow has never been stronger, and our CPA dropped significantly.' },
    { name: 'Maria Rodriguez', title: 'Owner, The Artisan Collection', quote: "I'm in love with my new website. It perfectly captures my brand's essence and has made a huge difference in online sales." },
    { name: 'James Williams', title: 'Marketing Director, FutureCorp', quote: "Their team is incredibly knowledgeable and proactive. They feel like an extension of our own department. Highly recommended." },
    { name: 'Li Wei', title: 'Political Candidate', quote: "The PR campaign was instrumental in my election success. They managed my public image with professionalism and skill." },
];

export const partners: Partner[] = [
    { name: 'Innovatech' },
    { name: 'ConnectFlow' },
    { name: 'Artisan' },
    { name: 'FutureCorp' },
    { name: 'QuantumLeap' },
    { name: 'EcoSolutions' },
];

export const blogPosts: BlogPost[] = [
    {
        slug: 'the-ultimate-guide-to-seo-in-2024',
        title: 'A Guide to SEO in 2024',
        author: 'Jane Doe',
        date: '2024-07-15',
        category: 'Digital Marketing',
        excerpt: 'SEO is always evolving. Here are the most important ranking factors and strategies you need to know this year.',
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
        category: 'Branding',
        excerpt: 'A great brand is a promise, a story, and a relationship. Learn the key components of building a resilient and beloved brand.',
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
        title: 'Offline Marketing in a Digital World',
        author: 'Emily White',
        date: '2024-07-05',
        category: 'Advertising',
        excerpt: 'In an age of digital saturation, offline marketing offers a unique opportunity to cut through the noise and create memorable experiences.',
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
    bio: "With over 15 years in the industry, Alex is a visionary leader passionate about building brands that make a difference. His strategic mindset is the heart of Grownex.",
  },
  {
    name: "Brenda Chen",
    role: "Creative Director",
    bio: "Brenda is the artistic force behind our most iconic campaigns. She translates brand strategies into stunning visual identities and compelling narratives.",
  },
  {
    name: "Carlos Rodriguez",
    role: "Head of Digital",
    bio: "A data-driven strategist, Carlos excels at navigating the digital landscape. He leads our team of SEO, PPC, and social media experts to deliver measurable results.",
  },
  {
    name: "Diana Miller",
    role: "Lead Developer",
    bio: "Diana combines technical prowess with a keen eye for design. She leads the development of high-performance, user-friendly websites that are both beautiful and functional.",
  }
];
