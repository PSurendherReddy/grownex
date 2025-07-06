import React from 'react';

export const AIServicesIllustration = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} data-ai-hint="artificial intelligence">
    <rect width="600" height="400" fill="hsl(var(--background))" />
    <g opacity="0.1">
        <path d="M300 0L600 200L300 400L0 200Z" fill="hsl(var(--secondary))" />
    </g>
    <g transform="translate(200, 100)" opacity="0.8">
      {/* Central "brain" shape */}
      <path d="M100 0 C 40 0, 0 40, 0 100 C 0 160, 40 200, 100 200 C 160 200, 200 160, 200 100 C 200 40, 160 0, 100 0 Z" fill="hsl(var(--secondary))" />
      <path d="M100 0 C 40 0, 0 40, 0 100 C 0 160, 40 200, 100 200 C 160 200, 200 160, 200 100 C 200 40, 160 0, 100 0 Z" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.5" />
      
      {/* Circuit lines inside */}
      <path d="M50 50 Q 100 70 150 50" stroke="hsl(var(--accent))" strokeWidth="1" fill="none" />
      <path d="M50 150 Q 100 130 150 150" stroke="hsl(var(--accent))" strokeWidth="1" fill="none" />
      <path d="M70 40 V 160" stroke="hsl(var(--accent))" strokeWidth="1" strokeOpacity="0.5" fill="none" />
      <path d="M130 40 V 160" stroke="hsl(var(--accent))" strokeWidth="1" strokeOpacity="0.5" fill="none" />

      {/* Connection points */}
      <circle cx="100" cy="0" r="5" fill="hsl(var(--accent))" />
      <circle cx="0" cy="100" r="5" fill="hsl(var(--accent))" />
      <circle cx="200" cy="100" r="5" fill="hsl(var(--accent))" />
      <circle cx="100" cy="200" r="5" fill="hsl(var(--accent))" />
    </g>
  </svg>
);
