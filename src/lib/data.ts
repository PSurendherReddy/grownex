import type { Service, ServiceGroup, PortfolioItem, Testimonial, Partner, BlogPost, TeamMember } from './types';

export const services: Service[] = [
  // AI Services
  {
    title: 'AI Chatbots',
    slug: 'ai-chatbots',
    category: { title: 'AI Services', slug: 'ai-services' },
    hero: {
      description: 'Engage customers 24/7 with intelligent, automated conversations on your website, WhatsApp, and Messenger. Convert visitors into qualified leads, day or night.',
      illustration: 'DigitalMarketingIllustration',
    },
    introduction: {
      title: 'Never Miss a Lead Again',
      content: 'In today\'s market, instant answers win customers. Our AI Chatbots act as your tireless digital receptionists, providing immediate support, answering questions, and capturing lead information around the clock. Stop losing customers to slow response times and empower your website to be a lead-generation machine.',
    },
    keyFeatures: {
      title: 'What Our AI Chatbots Offer',
      items: [
        {
          title: '24/7 Lead Capture',
          description: 'Our bots qualify leads based on your criteria and collect contact details, even when your team is offline.',
        },
        {
          title: 'Multi-Platform Support',
          description: 'Deploy seamlessly on your website, WhatsApp, Facebook Messenger, and other platforms for a unified customer experience.',
        },
        {
          title: 'Instant Customer Support',
          description: 'Provide immediate answers to frequently asked questions, reducing the load on your support team and improving satisfaction.',
        },
        {
          title: 'Seamless Handoff',
          description: 'The chatbot can intelligently route complex queries or high-value leads directly to your human agents.',
        },
        {
          title: 'Appointment Booking',
          description: 'Allow customers to schedule demos, consultations, or appointments directly within the chat interface.',
        },
        {
          title: 'Easy Integration',
          description: 'We connect the chatbot to your existing CRM and marketing tools for a smooth, automated workflow.',
        },
      ],
    },
    process: {
      title: 'Our Chatbot Implementation Process',
      steps: [
        { step: 1, title: 'Discovery & Strategy', description: 'We analyze your business goals, customer queries, and lead qualification process to design the optimal conversation flow.' },
        { step: 2, title: 'Development & Training', description: 'Our team builds the chatbot and trains it on your specific business data to ensure accurate and context-aware responses.' },
        { step: 3, title: 'Integration & Deployment', description: 'We deploy the chatbot on your chosen platforms and integrate it with your key business systems, like your CRM.' },
        { step: 4, title: 'Optimization & Reporting', description: 'We continuously monitor performance, refine conversation flows, and provide you with detailed reports on leads and interactions.' },
      ],
    },
  },
  // Branding
  {
    title: 'Logo Design',
    slug: 'logo-design',
    category: { title: 'Graphic Design & Branding', slug: 'graphic-design-branding' },
    hero: {
      description: 'Forge a memorable identity with a professionally crafted logo that tells your unique story and captures instant attention.',
      illustration: 'BrandingIllustration',
    },
    introduction: {
      title: 'Your Brand\'s First Impression, Perfected',
      content: 'A logo is more than just a picture; it\'s the face of your company. It\'s the single most powerful visual asset for establishing brand recognition and communicating your core values. We design logos that are not only beautiful but also strategic, ensuring they are memorable, timeless, and effective across all platforms.',
    },
    keyFeatures: {
      title: 'Features of Our Logo Design Service',
      items: [
        {
          title: 'Strategic Design',
          description: 'Our designs are based on a deep understanding of your brand, audience, and competitive landscape.',
        },
        {
          title: 'Multiple Concepts',
          description: 'We provide a range of initial design concepts to explore different creative directions for your brand.',
        },
        {
          title: 'Versatile Formats',
          description: 'Receive your final logo in all necessary formats for web, print, and social media applications.',
        },
        {
          title: 'Full Ownership',
          description: 'You get complete copyright ownership of the final logo design for unlimited, unrestricted use.',
        },
        {
          title: 'Brand Guideline Snippet',
          description: 'We provide basic guidelines on logo usage, color codes, and fonts to ensure initial consistency.',
        },
        {
          title: 'Timeless Quality',
          description: 'We focus on creating simple, memorable designs that will stand the test of time and not feel dated in a few years.',
        },
      ],
    },
    process: {
      title: 'Our Collaborative Design Process',
      steps: [
        { step: 1, title: 'Discovery & Research', description: 'We start by learning everything about your business, target market, and vision for the future.' },
        { step: 2, title: 'Conceptualization', description: 'Our designers explore various creative directions and develop initial logo concepts that align with the strategy.' },
        { step: 3, title: 'Refinement & Feedback', description: 'We work closely with you to refine the chosen concept, incorporating your feedback to achieve the perfect result.' },
        { step: 4, title: 'Finalization & Delivery', description: 'Once approved, we prepare and deliver a complete package of logo files and basic usage guidelines.' },
      ],
    },
    stats: [
      { value: '300+', label: 'Logos designed for startups and established enterprises.' },
      { value: '98%', label: 'Client approval rate on first design drafts.' },
    ],
  },
  // Digital Marketing
  {
    title: 'SEO & AEO',
    slug: 'seo-aeo',
    category: { title: 'Digital Marketing', slug: 'digital-marketing' },
    hero: {
      description: 'Dominate search results and become the definitive answer for your customers. Our advanced SEO & AEO strategies drive sustainable organic traffic and establish you as a market leader.',
      illustration: 'DigitalMarketingIllustration',
    },
    introduction: {
      title: 'Be Seen Where It Matters Most',
      content: 'In today\'s digital economy, visibility is currency. If your customers can\'t find you on Google, you don\'t exist. Our SEO (Search Engine Optimization) & AEO (Answer Engine Optimization) service is a holistic approach to not just ranking higher, but owning the conversation in your industry. We turn your website into a powerful magnet for high-intent customers.',
    },
    keyFeatures: {
      title: 'Our Comprehensive SEO Approach',
      items: [
        {
          title: 'Technical SEO Audit',
          description: 'We ensure your website is perfectly optimized for speed, mobile performance, and crawlability with a deep technical audit.',
        },
        {
          title: 'Keyword & Topic Strategy',
          description: 'We identify the high-value keywords and topics your audience is searching for and build a content strategy around them.',
        },
        {
          title: 'Content Optimization',
          description: 'We create and refine content to be authoritative, trustworthy, and structured to appear in featured snippets and answer boxes.',
        },
        {
          title: 'Authority Building',
          description: 'Our team executes strategic outreach to earn high-quality backlinks and mentions from reputable sites in your industry.',
        },
        {
          title: 'Local SEO',
          description: 'For brick-and-mortar businesses, we optimize your Google Business Profile and local citations to dominate local search.',
        },
        {
          title: 'Performance Tracking',
          description: 'We provide transparent, detailed reports on rankings, traffic, and conversions, so you can see the direct impact of our work.',
        },
      ],
    },
    process: {
      title: 'Our Path to Page One',
      steps: [
        { step: 1, title: 'Comprehensive Audit', description: 'We begin with a full analysis of your website, competitors, and market to identify the biggest opportunities.' },
        { step: 2, title: 'Strategic Roadmap', description: 'We develop a clear, prioritized 6-12 month roadmap outlining all on-page, off-page, and technical initiatives.' },
        { step: 3, title: 'Execution & Content Creation', description: 'Our team gets to work, implementing technical fixes, optimizing existing content, and creating new, authoritative articles.' },
        { step: 4, title: 'Reporting & Refinement', description: 'We track progress monthly, providing insights and adjusting our strategy based on performance data and algorithm changes.' },
      ],
    },
    stats: [
      { value: '50%', label: 'Average increase in organic traffic within 6 months.' },
      { value: 'Top 3', label: 'Ranking achieved for 80% of our clients\' target keywords.' },
    ],
  },
  // Web Development
  {
    title: 'Shopify Stores',
    slug: 'shopify-stores',
    category: { title: 'Website Development', slug: 'website-development' },
    hero: {
      description: 'Launch a high-converting, beautifully designed e-commerce store. We build powerful Shopify websites that offer a seamless shopping experience and drive sales.',
      illustration: 'WebDevIllustration',
    },
    introduction: {
      title: 'Turn Clicks into Customers',
      content: 'Your online store is your digital flagship. It needs to be more than just a product catalog; it must be a conversion-focused experience that is fast, intuitive, and trustworthy. We specialize in building custom Shopify and Shopify Plus stores that not only look incredible but are also engineered to maximize sales and customer loyalty.',
    },
    keyFeatures: {
      title: 'Everything You Need to Sell Online',
      items: [
        {
          title: 'Custom Theme Design',
          description: 'We create a unique, on-brand design that makes your products shine and sets you apart from the competition.',
        },
        {
          title: 'Conversion Rate Optimization',
          description: 'From product page layouts to a streamlined checkout, every element is designed to increase your conversion rate.',
        },
        {
          title: 'Mobile-First Experience',
          description: 'With most shoppers on mobile, we ensure your store provides a flawless experience on any device.',
        },
        {
          title: 'App Integration',
          description: 'We integrate the best Shopify apps for reviews, loyalty programs, subscriptions, and more to enhance functionality.',
        },
        {
          title: 'Performance Optimization',
          description: 'A slow store kills sales. We optimize images, code, and server requests for lightning-fast load times.',
        },
        {
          title: 'Training & Support',
          description: 'We provide comprehensive training so your team can easily manage products, orders, and content.',
        },
      ],
    },
    process: {
      title: 'Our E-commerce Development Workflow',
      steps: [
        { step: 1, title: 'Strategy & Planning', description: 'We map out your customer journey, technical requirements, and business goals to create a detailed project plan.' },
        { step: 2, title: 'Design & Prototyping', description: 'Our design team creates wireframes and high-fidelity mockups of your new store for your approval.' },
        { step: 3, title: 'Development & Integration', description: 'Our developers bring the designs to life, building a custom Shopify theme and integrating necessary apps.' },
        { step: 4, title: 'Launch & Post-Launch Support', description: 'After rigorous testing, we manage the launch process and provide ongoing support to ensure a smooth transition.' },
      ],
    },
    stats: [
      { value: '40%', label: 'Average conversion rate uplift for our e-commerce clients.' },
      { value: '100+', label: 'High-performance Shopify stores launched and optimized.' },
    ],
    caseStudySlug: 'ecommerce-platform-for-artisan',
  }
];


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
    title: 'AI Services',
    slug: 'ai-services',
    description: 'Leveraging artificial intelligence to automate tasks and drive growth.',
    services: [
        { title: 'AI Chatbots (Web, WhatsApp, Messenger)', slug: 'ai-chatbots', description: 'Engage customers 24/7 on your website and messaging apps.' },
        { title: 'Custom AI Agents for Sales, Support & Internal Tasks', slug: 'custom-ai-agents', description: 'Automate workflows with intelligent agents tailored to your needs.' },
        { title: 'Business Process Automation (AI + RPA)', slug: 'business-process-automation', description: 'Streamline operations by combining AI with Robotic Process Automation.' },
        { title: 'Voice AI Solutions (Call Assistants & IVR Bots)', slug: 'voice-ai-solutions', description: 'Modernize your customer calls with intelligent voice assistants.' },
        { title: 'AI-Powered Email & Lead Automation', slug: 'ai-email-lead-automation', description: 'Automatically qualify leads and send personalized email campaigns.' },
        { title: 'AI Knowledge Base & Internal Search Assistants', slug: 'ai-knowledge-base', description: 'Empower your team with instant access to company information.' },
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
