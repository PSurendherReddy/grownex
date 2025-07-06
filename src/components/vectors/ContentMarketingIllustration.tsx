import React from 'react';

export const ContentMarketingIllustration = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} data-ai-hint="content writing">
    <rect width="600" height="400" fill="hsl(var(--background))" />
    <g opacity="0.1">
        <rect x="0" y="200" width="600" height="200" fill="hsl(var(--secondary))" />
    </g>
    {/* Document/Paper */}
    <g transform="translate(150, 80)">
      <rect width="300" height="240" fill="hsl(var(--secondary))" rx="8" />
      <rect width="300" height="240" stroke="hsl(var(--border))" rx="8" />
      
      {/* Title */}
      <rect x="20" y="20" width="260" height="15" fill="hsl(var(--primary))" rx="2" />
      
      {/* Text lines */}
      <rect x="20" y="50" width="260" height="8" fill="hsl(var(--muted))" rx="1" />
      <rect x="20" y="65" width="220" height="8" fill="hsl(var(--muted))" rx="1" />
      <rect x="20" y="80" width="260" height="8" fill="hsl(var(--muted))" rx="1" />
      
      {/* Chart for Case Study */}
      <g transform="translate(40, 110)">
        <rect x="0" y="0" width="80" height="100" fill="hsl(var(--background))" />
        <rect x="10" y="100" width="15" height="-40" fill="hsl(var(--accent))" />
        <rect x="35" y="100" width="15" height="-70" fill="hsl(var(--accent))" />
        <rect x="60" y="100" width="15" height="-50" fill="hsl(var(--accent))" />
      </g>
      
       {/* More Text lines */}
      <rect x="140" y="120" width="140" height="8" fill="hsl(var(--muted))" rx="1" />
      <rect x="140" y="135" width="120" height="8" fill="hsl(var(--muted))" rx="1" />
      <rect x="140" y="150" width="140" height="8" fill="hsl(var(--muted))" rx="1" />
    </g>
  </svg>
);
