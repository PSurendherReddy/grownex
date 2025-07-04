import React from 'react';

export const BrandingIllustration = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} data-ai-hint="branding design">
    <rect width="600" height="400" fill="hsl(var(--background))" />
    <g opacity="0.1">
      <path d="M0 0L600 400H0V0Z" fill="hsl(var(--secondary))" />
    </g>
    <g transform="translate(50, 50)">
      <rect x="20" y="0" width="200" height="300" fill="hsl(var(--secondary))" opacity="0.5" rx="8" />
      <text x="120" y="60" textAnchor="middle" fontFamily="var(--font-headline)" fontSize="24" fill="hsl(var(--primary))">Aa</text>
      <text x="120" y="90" textAnchor="middle" fontFamily="var(--font-body)" fontSize="16" fill="hsl(var(--foreground))">Typography</text>

      <circle cx="80" cy="150" r="30" fill="hsl(var(--primary))" />
      <circle cx="160" cy="150" r="30" fill="hsl(var(--accent))" />
      <circle cx="120" cy="210" r="30" fill="hsl(var(--muted-foreground))" />
      <text x="120" y="270" textAnchor="middle" fontFamily="var(--font-body)" fontSize="16" fill="hsl(var(--foreground))">Colors</text>
      
      <g transform="translate(250, 50)">
        <path d="M50 0 L100 86.6 L0 86.6 Z" fill="hsl(var(--accent))" opacity="0.8" />
        <circle cx="150" cy="43.3" r="50" stroke="hsl(var(--primary))" strokeWidth="2" />
        <rect x="220" y="0" width="100" height="86.6" fill="hsl(var(--secondary))" stroke="hsl(var(--border))" />
         <text x="160" y="150" textAnchor="middle" fontFamily="var(--font-headline)" fontSize="24" fill="hsl(var(--primary))">Logo System</text>
      </g>
    </g>
  </svg>
);
