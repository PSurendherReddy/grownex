import React from 'react';

export const BusinessConsultingIllustration = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} data-ai-hint="business consulting">
    <rect width="600" height="400" fill="hsl(var(--background))" />
    <g opacity="0.1">
        <rect x="0" y="0" width="600" height="400" fill="hsl(var(--secondary))" />
    </g>
    <g transform="translate(50, 50)" opacity="0.9">
      {/* Pie chart */}
      <g transform="translate(100, 150)">
        <circle cx="0" cy="0" r="80" fill="hsl(var(--secondary))"/>
        <path d="M 0 0 L 80 0 A 80 80 0 0 1 -40 69.28 Z" fill="hsl(var(--primary))" fillOpacity="0.7"/>
        <path d="M 0 0 L -40 69.28 A 80 80 0 0 1 -40 -69.28 Z" fill="hsl(var(--accent))" fillOpacity="0.7"/>
        <circle cx="0" cy="0" r="30" fill="hsl(var(--background))" />
      </g>
      
      {/* Bar chart */}
      <g transform="translate(300, 100)">
        <rect width="200" height="150" fill="hsl(var(--secondary))" rx="8" />
        <rect x="20" y="130" width="30" height="-80" fill="hsl(var(--primary))" fillOpacity="0.7" />
        <rect x="60" y="130" width="30" height="-50" fill="hsl(var(--accent))" fillOpacity="0.7" />
        <rect x="100" y="130" width="30" height="-100" fill="hsl(var(--primary))" fillOpacity="0.7" />
        <rect x="140" y="130" width="30" height="-70" fill="hsl(var(--accent))" fillOpacity="0.7" />
        <line x1="10" y1="130" x2="190" y2="130" stroke="hsl(var(--border))" strokeWidth="2" />
      </g>
    </g>
  </svg>
);
