import React from 'react';

export const PhotoVideoIllustration = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} data-ai-hint="photo video">
    <rect width="600" height="400" fill="hsl(var(--background))" />
    <g opacity="0.1">
        <rect x="400" y="0" width="200" height="400" fill="hsl(var(--secondary))" />
    </g>
    {/* Camera */}
    <g transform="translate(80, 100)">
        <rect width="200" height="150" fill="hsl(var(--secondary))" rx="10" />
        <rect width="200" height="150" stroke="hsl(var(--border))" rx="10" />
        <circle cx="100" cy="75" r="50" fill="hsl(var(--background))" />
        <circle cx="100" cy="75" r="30" fill="hsl(var(--accent))" />
        <rect x="10" y="10" width="30" height="10" rx="2" fill="hsl(var(--muted-foreground))" />
    </g>
    {/* Video Player */}
    <g transform="translate(320, 100)">
        <rect width="200" height="150" fill="hsl(var(--secondary))" rx="10" />
        <rect width="200" height="150" stroke="hsl(var(--border))" rx="10" />
        <path d="M80 50 L 140 75 L 80 100 Z" fill="hsl(var(--primary))" />
        <rect x="20" y="120" width="160" height="5" fill="hsl(var(--background))" />
        <rect x="20" y="120" width="80" height="5" fill="hsl(var(--accent))" />
    </g>
  </svg>
);
