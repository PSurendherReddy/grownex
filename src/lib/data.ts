import type { Service, ServiceGroup, PortfolioItem, Testimonial, Partner, BlogPost, TeamMember } from './types';

const serviceDetails: Record<string, { about: string; whenToChoose: string; whoIsItFor: string }> = {
  'logo-design': {
    about: "Our Logo Design service focuses on creating a powerful, memorable visual identity. We go beyond aesthetics to develop a logo that encapsulates your brand's essence, values, and mission. The process involves in-depth research, conceptualization, and refinement to produce a timeless mark that works across all media.",
    whenToChoose: "Choose this when you're launching a new business, rebranding an existing one, or feel your current logo no longer represents your company. A strong logo is the foundation of your brand identity and crucial for making a lasting first impression.",
    whoIsItFor: "Ideal for startups needing a strong market entry, established businesses looking to modernize their image, and organizations aiming to improve brand recognition and stand out in a crowded marketplace."
  },
  'brand-identity-strategy': {
    about: 'This comprehensive service aligns your business goals with a cohesive brand identity. We develop a complete visual and verbal system, including your mission, vision, voice, and a strategic roadmap for implementation, ensuring every brand touchpoint is consistent and impactful.',
    whenToChoose: 'Select this service when you need more than just a logo. It’s for times of significant business transformation, market repositioning, or when you need to unify a fragmented brand message to build equity and drive growth.',
    whoIsItFor: 'Perfect for businesses seeking to establish a strong, unified market presence, companies undergoing a merger or acquisition, and established brands aiming to reconnect with their audience on a deeper level.'
  },
  'brand-guidelines': {
    about: 'We create a comprehensive rulebook that defines how your brand presents itself. This document covers everything from logo usage and color palettes to typography and tone of voice, ensuring absolute consistency across all internal and external communications.',
    whenToChoose: 'This is essential after a rebrand or if you find your brand is being represented inconsistently. It’s crucial when working with multiple teams, partners, or agencies to maintain a cohesive and professional brand image.',
    whoIsItFor: 'A must-have for any organization with more than one employee. It is especially critical for marketing teams, design departments, and companies that use freelancers or external agencies.'
  },
  'seo-aeo': {
    about: 'Our SEO & AEO (Answer Engine Optimization) service is designed to increase your visibility where it matters most. We focus on a holistic strategy of technical optimization, high-quality content, and authority building to rank for high-intent keywords and directly answer user questions.',
    whenToChoose: 'Engage this service when your website isn’t generating enough organic traffic, your competitors are outranking you, or you’re launching a new website. It’s a long-term strategy for sustainable growth.',
    whoIsItFor: 'Beneficial for any business with an online presence, from local stores wanting to attract nearby customers to global B2B companies looking to capture a niche audience.'
  },
  'lead-generation': {
    about: 'This service is focused on one thing: filling your sales pipeline with qualified, high-intent leads. We implement and manage targeted campaigns across various channels, using data-driven methods to attract, engage, and convert potential customers.',
    whenToChoose: 'If your sales team needs more prospects, your growth has stalled, or your current lead generation efforts are too expensive or ineffective, this service provides a direct path to acquiring new customers.',
    whoIsItFor: 'Primarily for B2B companies, high-value B2C services (e.g., real estate, finance), and any business that relies on a consistent flow of new customer inquiries to fuel growth.'
  },
  'ppc-advertising': {
    about: 'Our Pay-Per-Click advertising service offers immediate visibility and targeted traffic. We manage campaigns on platforms like Google Ads and social media, focusing on maximizing your return on ad spend (ROAS) through meticulous keyword research, ad copy testing, and landing page optimization.',
    whenToChoose: 'Use PPC for quick results, to promote a specific offer, enter a new market, or to complement your long-term SEO efforts. It’s ideal for testing market response and driving traffic while your organic presence grows.',
    whoIsItFor: 'Excellent for e-commerce brands, lead generation campaigns, and any business that wants to control its advertising budget precisely and see immediate, measurable results.'
  },
  'email-marketing': {
    about: 'We help you build and nurture direct relationships with your audience through strategic email campaigns. From automated welcome series to targeted promotional newsletters, we create content that engages subscribers and drives conversions.',
    whenToChoose: 'If you have a list of contacts you aren’t engaging or want to improve customer retention and lifetime value, email marketing is one of the most cost-effective channels available.',
    whoIsItFor: 'Essential for e-commerce businesses, content creators, and any company looking to build a loyal community and drive repeat business from its existing customer base.'
  },
  'social-media-management': {
    about: 'Our team manages your social media presence, creating and curating content that builds your brand and engages your community. We develop a platform-specific strategy to grow your following and drive meaningful interactions.',
    whenToChoose: "If you lack the time or expertise to maintain an active, professional social media presence, or if your current efforts aren't yielding results, it's time to bring in experts.",
    whoIsItFor: 'Crucial for B2C brands, personality-driven businesses, and any organization looking to build brand awareness and connect with its audience on a daily basis.'
  },
  'hoarding-advertising': {
    about: 'Make a big statement with large-format hoarding (billboard) advertising. We secure prime locations and design eye-catching visuals to ensure your message captures the attention of thousands of commuters and pedestrians daily.',
    whenToChoose: 'Ideal for broad brand awareness campaigns, event promotions, or announcing a new store opening. Hoardings are powerful for dominating a specific geographic area with your message.',
    whoIsItFor: 'Best for businesses targeting a mass local audience, such as retail stores, real estate developers, event organizers, and major consumer brands.'
  },
  'mall-advertising': {
    about: 'Engage a captive audience of shoppers in a high-traffic environment. We place your brand across various formats within malls, from digital screens to static posters, targeting consumers when they are in a buying mindset.',
    whenToChoose: 'Choose this to drive foot traffic to your retail store within the mall, launch a new product, or to target specific consumer demographics that frequent shopping centers.',
    whoIsItFor: 'Retailers, restaurants, entertainment venues, and brands targeting families, teens, or affluent shoppers who frequent malls.'
  },
  'college-campus-ads': {
    about: 'Directly target the valuable student and faculty demographic through on-campus advertising. We utilize posters, digital screens, and event sponsorships to integrate your brand into the daily life of the campus community.',
    whenToChoose: "When your product or service is specifically tailored to young adults or academics. It's perfect for recruitment, brand loyalty building, and promoting student-focused offers.",
    whoIsItFor: 'Companies in tech, banking (student accounts), food and beverage, apparel, and entertainment looking to capture the next generation of consumers.'
  },
  'apartment-complex-ads': {
    about: 'Reach residents where they live. We place advertisements in common areas of apartment complexes, such as lobbies, elevators, and clubhouses, providing a highly targeted way to reach a specific neighborhood.',
    whenToChoose: 'This is a great strategy for local businesses like restaurants, gyms, cleaners, and service providers who want to become the go-to choice for a specific residential community.',
    whoIsItFor: 'Local service providers, furniture stores, internet service providers, and any business looking to target new movers or a concentrated local population.'
  },
  'petrol-pump-advertising': {
    about: 'Capture the undivided attention of drivers during the few minutes they spend refueling. We use nozzles, pump toppers, and digital screens to deliver your message to a broad, captive audience.',
    whenToChoose: 'An excellent choice for general brand awareness and targeting a wide demographic of vehicle owners. It’s particularly effective for automotive products, insurance, and local radio stations.',
    whoIsItFor: 'Auto-related businesses, insurance companies, convenience stores, and major consumer brands seeking high-frequency exposure.'
  },
  'pamphlet-distribution': {
    about: 'Our targeted pamphlet and flyer distribution service gets your message directly into the hands of potential customers. We plan strategic distribution in residential areas, business districts, and at events to maximize reach and impact.',
    whenToChoose: 'When you need to promote a local event, a special offer, or a new business opening with a geographically focused, cost-effective method. It provides a tangible reminder of your brand.',
    whoIsItFor: 'Local businesses, restaurants, real estate agents, event organizers, and political campaigns that require deep penetration in a specific geographic area.'
  },
  'product-shoots': {
    about: 'High-quality product photography is essential for e-commerce success. We create clean, professional, and appealing images of your products for use on your website, social media, and marketing materials, making your items look their absolute best.',
    whenToChoose: "This is a must when launching a new product, updating your e-commerce store, or creating a print catalog. Professional photos significantly increase conversion rates.",
    whoIsItFor: 'E-commerce businesses, retailers, Amazon sellers, and anyone who sells a physical product online or in print.'
  },
  'event-photo-video': {
    about: 'We capture the energy and key moments of your corporate events, conferences, sports tournaments, or grand openings. Our professional photo and video coverage provides you with valuable assets for marketing, PR, and internal use.',
    whenToChoose: 'Any time you are hosting a significant event that you want to document for promotional purposes or to share with those who couldn’t attend. It immortalizes the success of your event.',
    whoIsItFor: 'Corporate event planners, marketing departments, PR agencies, sports organizations, and businesses hosting launch parties or conferences.'
  },
  'political-pr': {
    about: 'We provide strategic communications and media relations for political figures and campaigns. Our service focuses on shaping public perception, managing messaging, and securing positive media coverage to build a strong, electable profile.',
    whenToChoose: 'Crucial during an election cycle, when announcing a candidacy, or when a public figure needs to manage their reputation and communicate their platform effectively to voters and the media.',
    whoIsItFor: 'Political candidates, elected officials, political action committees (PACs), and public affairs organizations.'
  },
  'business-pr': {
    about: 'Our Business PR service works to enhance your corporate reputation and build credibility. We craft compelling stories and secure placements in relevant media outlets to position your company as a leader in its industry.',
    whenToChoose: 'Choose this when you are launching a major product, announcing a partnership, sharing company milestones, or want to build long-term brand authority and trust in your market.',
    whoIsItFor: 'Startups seeking credibility, established companies looking to enhance their reputation, and any business that wants to be seen as a thought leader.'
  },
  'entrepreneur-features': {
    about: 'We help founders and entrepreneurs build their personal brand by securing feature articles and interviews in prominent media outlets. This service positions you as a thought leader and expert in your field.',
    whenToChoose: 'When you want to elevate your personal profile beyond your company, attract speaking opportunities, or build a following as an industry expert. It adds significant credibility to both you and your business.',
    whoIsItFor: 'Founders, CEOs, authors, consultants, and any expert looking to build their personal brand and industry influence.'
  },
  'press-release-handling': {
    about: 'We handle the entire press release process, from crafting a newsworthy announcement to distributing it to our network of journalists and media outlets. We focus on getting your news in front of the right people to maximize coverage.',
    whenToChoose: "This is the standard procedure for announcing company news, such as a funding round, a new executive hire, a product launch, or a significant partnership. It's the official way to communicate with the press.",
    whoIsItFor: 'Any business with newsworthy information to share. It is a foundational tool for all corporate communications departments and PR agencies.'
  },
  'sop-creation': {
    about: 'We develop clear and effective Standard Operating Procedures (SOPs) to streamline your business processes. This ensures consistency, reduces errors, improves efficiency, and makes it easier to train new employees.',
    whenToChoose: 'When your business is scaling and processes are becoming inconsistent, or if you find recurring errors in your operations. SOPs are essential for building a scalable and efficient organization.',
    whoIsItFor: 'Growing businesses, startups looking to establish processes, and established companies aiming to optimize their operations and improve quality control.'
  },
  'market-competitor-research': {
    about: 'Gain a competitive edge with our in-depth market and competitor research. We provide detailed analysis of market trends, consumer behavior, and your competitors\' strategies, strengths, and weaknesses to inform your business decisions.',
    whenToChoose: 'Before entering a new market, launching a new product, or when you are losing market share. This research is foundational to any sound business or marketing strategy.',
    whoIsItFor: 'Strategic planners, marketing teams, product managers, and startups looking to validate their business idea and understand the competitive landscape.'
  },
  'architecture-analysis': {
    about: 'We evaluate your business or technical architecture to identify inefficiencies, risks, and opportunities for improvement. Our analysis provides a roadmap for optimizing your systems and structures for better performance and scalability.',
    whenToChoose: 'When you are experiencing scalability issues, high operational costs, or planning a major technological transformation. It helps ensure your foundation can support future growth.',
    whoIsItFor: 'CTOs, IT departments, and business leaders of tech-enabled companies who need to ensure their infrastructure is robust, scalable, and cost-effective.'
  },
  'data-collection-surveys': {
    about: 'Gather crucial insights directly from your target audience through professionally designed and executed surveys. We handle everything from question design to data collection and analysis, providing you with actionable data.',
    whenToChoose: 'When you need to validate a hypothesis, understand customer satisfaction, gauge market demand for a new feature, or gather any form of quantitative or qualitative feedback from a specific group.',
    whoIsItFor: 'Product managers, marketing teams, researchers, and any business that wants to make data-driven decisions based on direct audience feedback.'
  },
  'grant-research': {
    about: 'We help you navigate the complex world of grants by identifying relevant funding opportunities from foundations, government bodies, and corporations. Our service assists in finding grants that align with your mission and projects.',
    whenToChoose: 'If your organization is seeking funding for a specific project or operational support and lacks the resources to constantly search for and evaluate grant opportunities.',
    whoIsItFor: 'Non-profit organizations, educational institutions, research labs, and startups in specific industries (like clean tech or biotech) that are eligible for grant funding.'
  },
  'influencer-sourcing-management': {
    about: 'We connect your brand with the right influencers, content creators, and celebrities to amplify your message. We handle the sourcing, vetting, negotiation, and relationship management to ensure a seamless partnership.',
    whenToChoose: 'When you want to leverage the trust and reach of established voices to promote your product. It’s an effective way to reach a new, engaged audience with an authentic endorsement.',
    whoIsItFor: 'B2C brands, especially in fashion, beauty, gaming, and lifestyle, looking for authentic ways to reach and influence their target demographic.'
  },
  'influencer-campaign-management': {
    about: 'This is a full-service offering where we manage your entire influencer marketing campaign from start to finish. This includes strategy development, creative briefs, execution, and detailed performance reporting to measure ROI.',
    whenToChoose: 'When you want to run a coordinated, multi-influencer campaign but lack the in-house expertise to manage the complexity. We ensure the campaign is cohesive, on-brand, and results-driven.',
    whoIsItFor: 'Brands that are serious about investing in influencer marketing and want a strategic, professionally managed campaign with clear objectives and measurable outcomes.'
  },
  'wordpress-websites': {
    about: 'We build flexible, scalable, and easy-to-manage websites on WordPress, the world’s most popular CMS. Our service includes custom theme development and plugin configuration to meet your specific business needs.',
    whenToChoose: 'WordPress is an excellent choice for content-heavy websites like blogs, news sites, and corporate websites that require flexibility and a user-friendly backend for non-technical users to manage content.',
    whoIsItFor: 'Businesses of all sizes, from bloggers and small businesses to large enterprises, who need a powerful, customizable, and scalable web presence.'
  },
  'shopify-stores': {
    about: 'We design and develop powerful e-commerce solutions on the Shopify platform. Our focus is on creating visually stunning, high-converting online stores that provide a seamless shopping experience for your customers.',
    whenToChoose: 'If you are selling products online, Shopify is the industry-leading platform. Choose this service to launch a new e-commerce store or to redesign and optimize an existing one for better performance.',
    whoIsItFor: 'E-commerce businesses of all sizes, from small artisan shops to large multi-channel retailers, who want a robust, secure, and scalable platform to sell their products.'
  },
  'webflow-designs': {
    about: 'We create visually stunning, highly interactive, and pixel-perfect websites using Webflow. This platform allows for advanced design and animation possibilities without sacrificing performance or a clean codebase.',
    whenToChoose: 'When design and user experience are your top priorities. Webflow is perfect for marketing sites, creative portfolios, and brands that want to make a bold visual statement with rich animations and interactions.',
    whoIsItFor: 'Design-forward companies, creative agencies, and startups that want a high-end, custom-looking website without the need for extensive custom development.'
  },
  'custom-coded-websites': {
    about: 'For projects with unique requirements, we offer fully custom-coded web solutions. We build bespoke websites and web applications from the ground up, giving you complete control over every aspect of design and functionality.',
    whenToChoose: 'When your project has complex functional requirements, needs to integrate with specific APIs, or requires a level of performance and security that off-the-shelf solutions cannot provide.',
    whoIsItFor: 'Tech startups building a web application, businesses with highly specific needs, and companies that require a unique, high-performance web platform tailored exactly to their specifications.'
  }
};

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

    const details = serviceDetails[service.slug];

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
        aboutService: details?.about,
        whenToChoose: details?.whenToChoose,
        whoIsItFor: details?.whoIsItFor,
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
