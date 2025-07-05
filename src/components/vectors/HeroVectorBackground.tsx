import React from 'react';

export const HeroVectorBackground = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 1440 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    data-ai-hint="abstract lines"
  >
    <g opacity="0.05">
      <path d="M-200 400 L400 -200 L1000 400 L400 1000 Z" stroke="hsl(var(--primary))" strokeWidth="2" />
      <path d="M400 400 L1000 -200 L1600 400 L1000 1000 Z" stroke="hsl(var(--primary))" strokeWidth="2" />
    </g>
    <g opacity="0.1">
        <circle cx="720" cy="400" r="80" stroke="hsl(var(--accent))" strokeWidth="1" />
        <circle cx="200" cy="200" r="40" stroke="hsl(var(--accent))" strokeWidth="1" />
        <circle cx="1240" cy="600" r="60" stroke="hsl(var(--accent))" strokeWidth="1" />
    </g>
  </svg>
);
