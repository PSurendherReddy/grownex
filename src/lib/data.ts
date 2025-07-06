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
  },
  {
    title: 'Brand Identity & Strategy',
    slug: 'brand-identity-strategy',
    category: { title: 'Graphic Design & Branding', slug: 'graphic-design-branding' },
    hero: {
      description: 'Build a brand that resonates. We define your core message and craft a cohesive visual identity that connects with your audience.',
      illustration: 'BrandingIllustration',
    },
    introduction: {
      title: 'More Than a Look, It\'s a Foundation',
      content: 'A strong brand is your most valuable asset. Our brand strategy and identity service goes deep to uncover your unique story, define your market position, and build a comprehensive visual and verbal system. This is the strategic foundation for all your marketing efforts, ensuring consistency and building long-term brand equity.',
    },
    keyFeatures: {
      title: 'Our Brand-Building Framework',
      items: [
        { title: 'Brand Discovery Workshop', description: 'We facilitate a deep-dive session to uncover your brand’s purpose, vision, values, and personality.' },
        { title: 'Market & Audience Analysis', description: 'Understand your competitive landscape and define your ideal customer profiles to ensure your brand connects.' },
        { title: 'Core Messaging & Positioning', description: 'We craft your mission statement, value propositions, and tagline to clearly communicate your unique value.' },
        { title: 'Complete Visual Identity', description: 'This includes your logo, color palette, typography, and imagery style to create a cohesive look and feel.' },
        { title: 'Verbal Identity & Tone of Voice', description: 'Defining how your brand speaks is as important as how it looks. We establish clear guidelines for your communications.' },
        { title: 'Brand Identity Guidelines', description: 'A comprehensive rulebook on how to use your new brand assets, ensuring consistency across all channels.' },
      ],
    },
    process: {
      title: 'Our Strategic Branding Process',
      steps: [
        { step: 1, title: 'Research & Discovery', description: 'We immerse ourselves in your world through workshops, research, and analysis.' },
        { step: 2, title: 'Strategy & Positioning', description: 'We distill our findings into a clear, actionable brand strategy document.' },
        { step: 3, title: 'Creative Development', description: 'Our designers and writers bring the strategy to life, creating your visual and verbal identity.' },
        { step: 4, title: 'Finalization & Rollout Plan', description: 'We finalize all assets and provide a plan for implementing the new brand across your organization.' },
      ],
    },
  },
  {
    title: 'Brand Guidelines',
    slug: 'brand-guidelines',
    category: { title: 'Graphic Design & Branding', slug: 'graphic-design-branding' },
    hero: {
      description: 'Ensure consistency and protect your brand integrity with a comprehensive set of brand guidelines for your team and partners.',
      illustration: 'BrandingIllustration',
    },
    introduction: {
      title: 'Your Brand\'s Rulebook for Success',
      content: 'A brand is only as strong as its weakest link. Brand guidelines are essential for ensuring that everyone who communicates on behalf of your brand does so with a unified voice and visual style. Our service provides a clear, easy-to-use document that empowers your team to maintain brand consistency everywhere.',
    },
    keyFeatures: {
      title: 'What\'s Inside Your Brand Book',
      items: [
        { title: 'Logo Usage', description: 'Clear rules on logo variations, clear space, minimum size, and what not to do.' },
        { title: 'Color Palette', description: 'Primary, secondary, and tertiary color values for print (CMYK) and digital (RGB, HEX).' },
        { title: 'Typography', description: 'Defined font families, sizes, and weights for headings, body copy, and other text elements.' },
        { title: 'Imagery Style', description: 'Guidelines on photography and illustration style to ensure a consistent visual mood.' },
        { title: 'Tone of Voice', description: 'Instructions on how to write as your brand, including personality, grammar, and key messaging.' },
        { title: 'Application Examples', description: 'Mockups showing how the brand assets should be applied to common materials like business cards or presentations.' },
      ],
    },
    process: {
      title: 'Creating Your Guidelines',
      steps: [
        { step: 1, title: 'Asset Collection', description: 'We gather and review all your existing brand assets and strategic documents.' },
        { step: 2, title: 'Structure & Content Creation', description: 'We organize the guidelines into a logical structure and write clear, concise instructions.' },
        { step: 3, title: 'Design & Layout', description: 'The guidelines are laid out in a beautifully designed, easy-to-navigate document.' },
        { step: 4, title: 'Delivery & Training', description: 'We deliver the final brand book and can provide a training session for your team on how to use it.' },
      ],
    },
  },
  {
    title: 'Lead Generation',
    slug: 'lead-generation',
    category: { title: 'Digital Marketing', slug: 'digital-marketing' },
    hero: {
      description: 'Fill your sales pipeline with a steady stream of high-quality, qualified leads. We build and manage targeted campaigns that convert.',
      illustration: 'DigitalMarketingIllustration',
    },
    introduction: {
      title: 'The Engine of Your Sales Growth',
      content: 'Growth doesn\'t happen by chance. It requires a predictable, scalable system for generating qualified leads. Our lead generation service combines strategy, technology, and compelling content to attract your ideal customers and guide them into your sales funnel, providing your sales team with a consistent flow of opportunities.',
    },
    keyFeatures: {
      title: 'Our Lead Generation Toolkit',
      items: [
        { title: 'Multi-Channel Campaigns', description: 'We use a mix of channels like LinkedIn, Google Ads, SEO, and email to reach your audience where they are.' },
        { title: 'High-Value Content Offers', description: 'We create compelling lead magnets like ebooks, webinars, and case studies that your audience will trade their contact info for.' },
        { title: 'Landing Page Optimization', description: 'Our landing pages are meticulously designed and A/B tested to maximize conversion rates.' },
        { title: 'Lead Nurturing Sequences', description: 'Automated email workflows to educate and build trust with new leads, moving them closer to a sale.' },
        { title: 'CRM Integration', description: 'Seamlessly pass new leads and their data directly into your CRM for your sales team to follow up.' },
        { title: 'Analytics & Reporting', description: 'Track every aspect of your funnel, from cost per lead to conversion rates, with our detailed dashboards.' },
      ],
    },
    process: {
      title: 'How We Build Your Lead Machine',
      steps: [
        { step: 1, title: 'Strategy & Ideal Customer Profile', description: 'We define your target audience and map out the entire lead generation and nurturing journey.' },
        { step: 2, title: 'Campaign & Asset Creation', description: 'We build the landing pages, create the content offers, and set up the ad campaigns.' },
        { step: 3, title: 'Launch & Monitoring', description: 'We launch the campaigns and closely monitor initial performance, making quick optimizations.' },
        { step: 4, title: 'Ongoing Optimization & Scaling', description: 'We continually test and refine every part of the funnel to lower your CPA and scale your lead volume.' },
      ],
    },
    caseStudySlug: 'lead-gen-for-saas',
  },
  {
    title: 'PPC Advertising',
    slug: 'ppc-advertising',
    category: { title: 'Digital Marketing', slug: 'digital-marketing' },
    hero: {
      description: 'Get immediate, targeted traffic and measurable results with expertly managed Pay-Per-Click campaigns on Google, Meta, and LinkedIn.',
      illustration: 'DigitalMarketingIllustration',
    },
    introduction: {
      title: 'Instant Visibility, Measurable ROI',
      content: 'When you need to drive traffic and generate leads *now*, PPC advertising is the answer. It offers unparalleled control, speed, and measurability. Our certified PPC specialists build, manage, and optimize campaigns that don\'t just get clicks—they deliver conversions, ensuring your ad spend translates directly into business growth.',
    },
    keyFeatures: {
      title: 'Our PPC Management Services',
      items: [
        { title: 'Strategic Keyword Research', description: 'We target high-intent keywords to capture users actively searching for your solution.' },
        { title: 'Compelling Ad Copy', description: 'We write persuasive, A/B tested ad copy that maximizes click-through rates.' },
        { title: 'Landing Page Optimization', description: 'We ensure your landing pages are designed to convert visitors into leads or customers.' },
        { title: 'Audience Targeting', description: 'We go beyond keywords, using demographics, interests, and remarketing to reach the right people.' },
        { title: 'Budget Management', description: 'Meticulous budget allocation and bid management to maximize your return on ad spend (ROAS).' },
        { title: 'Transparent Reporting', description: 'Receive clear, concise reports that show you exactly how your campaigns are performing and what we\'re doing to improve.' },
      ],
    },
    process: {
      title: 'Our Approach to PPC',
      steps: [
        { step: 1, title: 'Account Audit & Strategy', description: 'We analyze your goals and existing accounts (if any) to create a data-driven strategy.' },
        { step: 2, title: 'Campaign Build & Launch', description: 'We structure your campaigns, write ad copy, and set up conversion tracking.' },
        { step: 3, title: 'Daily Monitoring & Optimization', description: 'Our team monitors performance daily, adjusting bids, budgets, and targeting to improve results.' },
        { step: 4, title: 'Reporting & Scaling', description: 'We provide monthly reports and strategic recommendations for scaling your successful campaigns.' },
      ],
    },
  },
  {
    title: 'Email Marketing',
    slug: 'email-marketing',
    category: { title: 'Digital Marketing', slug: 'digital-marketing' },
    hero: {
      description: 'Nurture leads, engage customers, and drive repeat business with powerful, automated email marketing campaigns.',
      illustration: 'DigitalMarketingIllustration',
    },
    introduction: {
      title: 'The Highest ROI in Digital Marketing',
      content: 'Email isn\'t dead; it\'s more powerful than ever. It\'s your direct line to your most engaged audience. We help you leverage email marketing to build lasting customer relationships, automate your sales process, and generate revenue on autopilot. From newsletters to complex nurturing sequences, we handle it all.',
    },
    keyFeatures: {
      title: 'What Our Email Marketing Includes',
      items: [
        { title: 'Strategy & Segmentation', description: 'We develop a strategy based on your customer lifecycle and segment your audience for personalized messaging.' },
        { title: 'Automated Nurturing Funnels', description: 'Create "set it and forget it" email sequences that welcome new subscribers, nurture leads, and onboard new customers.' },
        { title: 'Engaging Newsletter Management', description: 'We\'ll design, write, and send regular newsletters that your audience actually wants to read.' },
        { title: 'Template Design', description: 'Beautiful, on-brand, and mobile-responsive email templates that look great in any inbox.' },
        { title: 'List Management & Health', description: 'We keep your email lists clean and engaged to maximize deliverability and open rates.' },
        { title: 'A/B Testing & Optimization', description: 'Continuously testing subject lines, content, and calls-to-action to improve performance.' },
      ],
    },
    process: {
      title: 'Our Email Campaign Process',
      steps: [
        { step: 1, title: 'Platform Setup & Strategy', description: 'We help you choose the right email platform and map out your automation and campaign strategy.' },
        { step: 2, title: 'Content & Design', description: 'Our team creates the email templates, writes the copy, and builds out the automated flows.' },
        { step: 3, title: 'Implementation & Testing', description: 'We set up everything in your email platform and rigorously test every link and trigger.' },
        { step: 4, title: 'Launch & Reporting', description: 'We launch the campaigns and provide regular reports on key metrics like open rates, click-through rates, and conversions.' },
      ],
    },
  },
  {
    title: 'Social Media Management',
    slug: 'social-media-management',
    category: { title: 'Digital Marketing', slug: 'digital-marketing' },
    hero: {
      description: 'Build a thriving community and an authentic brand presence on the social media platforms that matter most to your business.',
      illustration: 'DigitalMarketingIllustration',
    },
    introduction: {
      title: 'Go Beyond Likes and Followers',
      content: 'Effective social media is about building relationships, not just broadcasting messages. We manage your social media presence with a focus on authentic engagement and community building. We create and curate content that resonates with your audience, sparks conversations, and supports your broader business goals.',
    },
    keyFeatures: {
      title: 'Our Social Media Services',
      items: [
        { title: 'Platform-Specific Strategy', description: 'We develop a unique strategy for each platform (e.g., LinkedIn, Instagram, X) tailored to its audience and format.' },
        { title: 'Content Creation & Curation', description: 'We create a mix of original content, curated articles, and user-generated content to keep your feed fresh and engaging.' },
        { title: 'Community Management', description: 'We actively engage with your audience by responding to comments, messages, and mentions in a timely and on-brand manner.' },
        { title: 'Monthly Content Calendar', description: 'You\'ll get a detailed content calendar each month for review and approval, so you always know what\'s being posted.' },
        { title: 'Social Listening', description: 'We monitor conversations about your brand and industry to identify opportunities and manage your reputation.' },
        { title: 'Performance Analytics', description: 'Monthly reports detailing growth, engagement, and how social media is contributing to your business objectives.' },
      ],
    },
    process: {
      title: 'How We Manage Your Social Presence',
      steps: [
        { step: 1, title: 'Strategy & Profile Optimization', description: 'We start with a deep dive into your brand and audience, then optimize your profiles for maximum impact.' },
        { step: 2, title: 'Content Planning & Creation', description: 'We develop a content strategy and create the first month\'s content calendar.' },
        { step: 3, title: 'Daily Management & Engagement', description: 'Our team handles daily posting, scheduling, and community interaction.' },
        { step: 4, title: 'Monthly Reporting & Strategy Review', description: 'We analyze performance and refine our strategy each month to ensure continuous improvement.' },
      ],
    },
  },
  {
    title: 'WordPress Websites',
    slug: 'wordpress-websites',
    category: { title: 'Website Development', slug: 'website-development' },
    hero: {
      description: 'Get a powerful, flexible, and easy-to-manage website built on the world\'s most popular content management system.',
      illustration: 'WebDevIllustration',
    },
    introduction: {
      title: 'The Ultimate in Flexibility and Control',
      content: 'WordPress powers over 40% of the web for a reason: it offers an unmatched combination of flexibility, power, and ease of use. Whether you need a corporate website, a blog, or a complex membership site, our team designs and develops custom WordPress solutions that are secure, scalable, and tailored to your specific business needs.',
    },
    keyFeatures: {
      title: 'Why Choose Our WordPress Development',
      items: [
        { title: 'Custom Theme Development', description: 'We build your site from the ground up with a custom theme—no bloated, off-the-shelf templates. This means better performance and security.' },
        { title: 'User-Friendly Page Builders', description: 'We use flexible content editors like the Block Editor (Gutenberg) or ACF, making it easy for your team to update content.' },
        { title: 'Plugin Expertise', description: 'We select and configure only the most reliable and secure plugins to add functionality without compromising performance.' },
        { title: 'Performance Optimization', description: 'We implement advanced caching, image optimization, and clean coding practices to ensure your site is lightning-fast.' },
        { title: 'Security Hardening', description: 'We take security seriously, implementing best practices to protect your site from threats.' },
        { title: 'Comprehensive Training', description: 'We provide detailed training videos and documentation so you can manage your new website with confidence.' },
      ],
    },
    process: {
      title: 'Our WordPress Build Process',
      steps: [
        { step: 1, title: 'Discovery & Architecture', description: 'We map out your site structure, content requirements, and technical needs.' },
        { step: 2, title: 'Design & Prototyping', description: 'We create wireframes and visual designs for your review and approval.' },
        { step: 3, title: 'Development & Content Entry', description: 'Our developers build the custom theme and functionality, and we assist with initial content migration.' },
        { step: 4, title: 'Launch & Support', description: 'After thorough testing, we handle the migration to your live server and provide ongoing maintenance and support.' },
      ],
    },
  },
  {
    title: 'Webflow Designs',
    slug: 'webflow-designs',
    category: { title: 'Website Development', slug: 'website-development' },
    hero: {
      description: 'Launch visually stunning, highly interactive websites with pixel-perfect animations and a powerful, client-friendly CMS.',
      illustration: 'WebDevIllustration',
    },
    introduction: {
      title: 'Where Design and Development Collide',
      content: 'Webflow empowers us to build complex, visually rich websites with the creative freedom of a design tool and the power of a modern development framework. The result is a website with stunning interactions and a CMS that\'s incredibly easy for your team to use, all without the maintenance headaches of traditional platforms.',
    },
    keyFeatures: {
      title: 'The Webflow Advantage',
      items: [
        { title: 'Pixel-Perfect Design', description: 'We can build exactly what we design, without the constraints of templates, for a truly custom look.' },
        { title: 'Advanced Interactions & Animations', description: 'Create rich, engaging user experiences with scroll-based animations, micro-interactions, and more.' },
        { title: 'Client-Friendly CMS', description: 'The Webflow Editor makes it incredibly simple for your team to edit text, swap images, and manage content on the live site.' },
        { title: 'Blazing-Fast Hosting', description: 'Webflow\'s managed hosting is powered by AWS and Fastly, ensuring top-tier speed, security, and reliability.' },
        { title: 'No Plugins, No Updates', description: 'Say goodbye to security patches and plugin maintenance. Webflow handles all the technical upkeep for you.' },
        { title: 'SEO-Ready', description: 'We have full control over SEO settings, from meta tags to structured data, to ensure your site is optimized for search.' },
      ],
    },
    process: {
      title: 'Building Your Vision in Webflow',
      steps: [
        { step: 1, title: 'Strategy & Wireframing', description: 'We plan the site structure and user flow before diving into visual design.' },
        { step: 2, title: 'Visual Design in Figma', description: 'We create a full visual prototype of the website for your approval.' },
        { step: 3, title: 'Webflow Development', description: 'Our Webflow experts translate the approved design into a fully functional, responsive website.' },
        { step: 4, title: 'CMS Setup & Launch', description: 'We build out your CMS collections, provide training, and manage the seamless launch of your new site.' },
      ],
    },
  },
  {
    title: 'Custom-Coded Sites',
    slug: 'custom-coded-websites',
    category: { title: 'Website Development', slug: 'website-development' },
    hero: {
      description: 'For unique challenges that require maximum performance and scalability, we build bespoke web applications from the ground up.',
      illustration: 'WebDevIllustration',
    },
    introduction: {
      title: 'Unlimited Possibilities, Unmatched Performance',
      content: 'When off-the-shelf solutions won\'t cut it, a custom-coded website or web application is the answer. Built with modern frameworks like Next.js and React, our custom solutions offer unparalleled performance, security, and scalability. This is the choice for ambitious businesses building unique digital products and platforms.',
    },
    keyFeatures: {
      title: 'Why Go Custom?',
      items: [
        { title: 'Maximum Performance', description: 'By writing clean, optimized code and eliminating bloat, we achieve the fastest possible load times.' },
        { title: 'Infinite Scalability', description: 'Our applications are built on serverless architectures that can handle traffic spikes and growth without a hitch.' },
        { title: 'Tailored Functionality', description: 'We build the exact features you need, perfectly tailored to your business logic and user workflows.' },
        { title: 'API Integration', description: 'Seamlessly connect with any third-party service, API, or internal data source.' },
        { title: 'Enhanced Security', description: 'A custom build reduces the attack surface area common in platform-based sites, offering superior security.' },
        { title: 'Full Ownership', description: 'You own the codebase and the intellectual property, giving you complete freedom and control.' },
      ],
    },
    process: {
      title: 'Our Application Development Process',
      steps: [
        { step: 1, title: 'Technical Scoping & Architecture', description: 'We conduct a deep technical discovery to define the project scope and design the system architecture.' },
        { step: 2, title: 'Agile Development Sprints', description: 'We work in two-week sprints, delivering testable increments of the application for your review.' },
        { step: 3, title: 'Rigorous Testing & QA', description: 'We perform automated and manual testing throughout the development process to ensure a bug-free product.' },
        { step: 4, title: 'Deployment & DevOps', description: 'We manage the deployment process using modern CI/CD pipelines and provide ongoing support and maintenance.' },
      ],
    },
  },
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
