import React from 'react';

export const DigitalMarketingIllustration = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} data-ai-hint="digital marketing">
    <rect width="600" height="400" fill="hsl(var(--background))" />
    <g opacity="0.1">
        <rect x="0" y="0" width="600" height="400" fill="hsl(var(--secondary))" />
    </g>
    <g transform="translate(50, 50)">
      <rect x="0" y="0" width="500" height="300" rx="8" fill="hsl(var(--secondary))" fillOpacity="0.5" />
      <rect x="0" y="0" width="500" height="300" rx="8" stroke="hsl(var(--border))" />
      
      {/* SEO */}
      <g transform="translate(20, 20)">
        <circle cx="40" cy="40" r="30" fill="hsl(var(--background))" />
        <path d="M25 40 L40 55 L55 25" stroke="hsl(var(--accent))" strokeWidth="4" fill="none" />
        <text x="40" y="90" textAnchor="middle" fontSize="12" fill="hsl(var(--foreground))">SEO</text>
      </g>
      
      {/* PPC */}
      <g transform="translate(120, 20)">
        <rect x="10" y="10" width="60" height="60" rx="4" fill="hsl(var(--background))" />
        <path d="M20 20 L40 20 L40 40 L60 40 L60 60" stroke="hsl(var(--primary))" strokeWidth="4" fill="none"/>
        <circle cx="65" cy="15" r="5" fill="hsl(var(--accent))" />
        <text x="40" y="90" textAnchor="middle" fontSize="12" fill="hsl(var(--foreground))">PPC</text>
      </g>
      
      {/* Social */}
       <g transform="translate(220, 20)">
        <rect x="10" y="10" width="60" height="60" rx="30" fill="hsl(var(--background))" />
         <circle cx="40" cy="30" r="8" stroke="hsl(var(--primary))" strokeWidth="2" />
         <path d="M25 55 C 35 45, 45 45, 55 55" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <text x="40" y="90" textAnchor="middle" fontSize="12" fill="hsl(var(--foreground))">Social</text>
      </g>
      
      {/* Email */}
      <g transform="translate(320, 20)">
         <rect x="10" y="10" width="60" height="60" rx="4" fill="hsl(var(--background))" />
         <path d="M15 15 L40 40 L65 15" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
        <text x="40" y="90" textAnchor="middle" fontSize="12" fill="hsl(var(--foreground))">Email</text>
      </g>
      
      {/* Main Chart */}
      <rect x="20" y="120" width="460" height="160" fill="hsl(var(--background))" rx="4"/>
      <path d="M40 260 C 150 240, 250 160, 460 180" stroke="hsl(var(--accent))" strokeWidth="3" fill="none"/>
    </g>
  </svg>
);
