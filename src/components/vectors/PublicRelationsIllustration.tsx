import React from 'react';

export const PublicRelationsIllustration = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} data-ai-hint="public relations">
    <rect width="600" height="400" fill="hsl(var(--background))" />
    <g opacity="0.1">
      <path d="M0 0 H 600 V 200 L 300 400 L 0 200 Z" fill="hsl(var(--secondary))" />
    </g>
    {/* Speech bubbles */}
    <g opacity="0.9">
      <path d="M100 100 h 150 a 10 10 0 0 1 10 10 v 50 a 10 10 0 0 1 -10 10 h -140 l -20 20 v -30 a 10 10 0 0 1 10 -10 Z" fill="hsl(var(--secondary))" stroke="hsl(var(--border))" />
      <path d="M450 180 h -150 a 10 10 0 0 0 -10 -10 v -50 a 10 10 0 0 0 10 -10 h 140 l 20 -20 v 30 a 10 10 0 0 0 -10 10 Z" fill="hsl(var(--accent))" stroke="hsl(var(--border))" />
    </g>
    
    {/* Newspaper */}
    <g transform="translate(180, 250)">
        <rect width="240" height="120" fill="hsl(var(--background))" stroke="hsl(var(--border))" rx="4" />
        <rect x="10" y="10" width="80" height="10" fill="hsl(var(--primary))" />
        <rect x="10" y="30" width="220" height="5" fill="hsl(var(--muted))" />
        <rect x="10" y="45" width="220" height="5" fill="hsl(var(--muted))" />
        <rect x="10" y="60" width="180" height="5" fill="hsl(var(--muted))" />
    </g>
  </svg>
);
