import React from 'react';

export const ServiceIllustration = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 600 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    data-ai-hint="data analysis"
  >
    <rect width="600" height="400" fill="hsl(var(--background))" />
    <g opacity="0.1">
        <path d="M0 400L600 0V400H0Z" fill="hsl(var(--secondary))" />
    </g>
    <g transform="translate(50, 50)">
      <rect width="500" height="300" rx="8" fill="hsl(var(--secondary))" fillOpacity="0.5" />
      <rect width="500" height="300" rx="8" stroke="hsl(var(--border))" />
      
      <rect x="20" y="20" width="150" height="10" rx="2" fill="hsl(var(--muted))" />
      <rect x="20" y="40" width="100" height="10" rx="2" fill="hsl(var(--muted))" />

      <rect x="20" y="80" width="200" height="180" fill="hsl(var(--background))" rx="4" />
      <path d="M30 240 C 80 180, 130 200, 210 100" stroke="hsl(var(--primary))" strokeWidth="2" />
      <path d="M30 240 C 70 210, 140 220, 210 150" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="4 4" />

      <rect x="240" y="80" width="240" height="80" fill="hsl(var(--background))" rx="4"/>
      <line x1="250" y1="100" x2="350" y2="100" stroke="hsl(var(--muted-foreground))" strokeWidth="10" />
      <line x1="250" y1="120" x2="400" y2="120" stroke="hsl(var(--muted-foreground))" strokeWidth="10" />
      <line x1="250" y1="140" x2="300" y2="140" stroke="hsl(var(--muted-foreground))" strokeWidth="10" />

      <rect x="240" y="180" width="100" height="80" fill="hsl(var(--background))" rx="4"/>
      <circle cx="290" cy="220" r="25" stroke="hsl(var(--accent))" strokeWidth="2" />
       <path d="M290 220 L290 195 A 25 25 0 0 1 315 220 Z" fill="hsl(var(--accent))" />


      <rect x="360" y="180" width="120" height="80" fill="hsl(var(--background))" rx="4"/>
       <rect x="370" y="240" width="20" height="-40" fill="hsl(var(--primary))" />
       <rect x="400" y="240" width="20" height="-60" fill="hsl(var(--primary))" />
       <rect x="430" y="240" width="20" height="-20" fill="hsl(var(--primary))" />
    </g>
  </svg>
);
