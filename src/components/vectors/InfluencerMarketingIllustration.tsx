import React from 'react';

export const InfluencerMarketingIllustration = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} data-ai-hint="influencer marketing">
    <rect width="600" height="400" fill="hsl(var(--background))" />
    <g opacity="0.1">
        <circle cx="0" cy="400" r="200" fill="hsl(var(--secondary))" />
        <circle cx="600" cy="0" r="150" fill="hsl(var(--secondary))" />
    </g>
    <g transform="translate(250, 150)">
      {/* Central Influencer */}
      <circle cx="50" cy="50" r="40" fill="hsl(var(--accent))" />
      <circle cx="50" cy="40" r="12" stroke="hsl(var(--accent-foreground))" fill="hsl(var(--accent-foreground))" strokeWidth="1" />
      <path d="M25 80C25 60 75 60 75 80Z" stroke="hsl(var(--accent-foreground))" fill="hsl(var(--accent))" strokeWidth="1"/>
      
      {/* Megaphone/Broadcast lines */}
      <path d="M90 50 L 150 20" stroke="hsl(var(--primary))" strokeWidth="2" />
      <path d="M90 50 L 150 80" stroke="hsl(var(--primary))" strokeWidth="2" />
      <path d="M150 20 L 150 80" stroke="hsl(var(--primary))" strokeWidth="2" />
    </g>
    
    {/* Audience */}
    <g opacity="0.7">
      <circle cx="100" cy="100" r="20" fill="hsl(var(--secondary))" />
      <circle cx="150" cy="300" r="20" fill="hsl(var(--secondary))" />
      <circle cx="450" cy="80" r="20" fill="hsl(var(--secondary))" />
      <circle cx="500" cy="320" r="20" fill="hsl(var(--secondary))" />
      <circle cx="50" cy="250" r="20" fill="hsl(var(--secondary))" />
      <circle cx="550" cy="200" r="20" fill="hsl(var(--secondary))" />
    </g>
  </svg>
);
