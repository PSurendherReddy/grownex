import React from 'react';

export const OfflineAdvertisingIllustration = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} data-ai-hint="offline advertising">
    <rect width="600" height="400" fill="hsl(var(--background))" />
    <g opacity="0.1">
        <rect x="0" y="0" width="300" height="400" fill="hsl(var(--secondary))" />
    </g>
    {/* Billboard */}
    <g transform="translate(100, 80)">
      <rect width="400" height="200" fill="hsl(var(--secondary))" rx="8" />
      <rect width="400" height="200" stroke="hsl(var(--border))" rx="8" />
      <circle cx="200" cy="100" r="50" fill="hsl(var(--accent))" />
      <text x="200" y="110" textAnchor="middle" fontFamily="var(--font-headline)" fontSize="32" fill="hsl(var(--accent-foreground))">AD</text>
      <line x1="280" y1="280" x2="200" y2="200" stroke="hsl(var(--muted-foreground))" strokeWidth="4" />
      <line x1="320" y1="280" x2="400" y2="200" stroke="hsl(var(--muted-foreground))" strokeWidth="4" />
    </g>
     {/* Pamphlet */}
    <g transform="translate(50, 250)">
      <rect width="150" height="100" fill="hsl(var(--background))" stroke="hsl(var(--border))" rx="4" />
      <rect x="10" y="10" width="130" height="10" fill="hsl(var(--muted))" />
      <rect x="10" y="30" width="80" height="8" fill="hsl(var(--muted))" />
      <rect x="10" y="45" width="100" height="8" fill="hsl(var(--muted))" />
    </g>
  </svg>
);
