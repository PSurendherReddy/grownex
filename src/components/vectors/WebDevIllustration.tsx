import React from 'react';

export const WebDevIllustration = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} data-ai-hint="web development">
    <rect width="600" height="400" fill="hsl(var(--background))" />
    <g opacity="0.1">
        <circle cx="600" cy="0" r="300" fill="hsl(var(--secondary))" />
    </g>
    <g transform="translate(50, 50)">
        {/* Browser Window */}
        <rect x="0" y="0" width="500" height="300" rx="8" fill="hsl(var(--secondary))" fillOpacity="0.5" />
        <rect x="0" y="0" width="500" height="30" rx="0" fill="hsl(var(--muted))" />
        <circle cx="20" cy="15" r="5" fill="hsl(var(--destructive))" fillOpacity="0.5" />
        <circle cx="40" cy="15" r="5" fill="hsl(var(--accent))" fillOpacity="0.5" />
        <circle cx="60" cy="15" r="5" fill="hsl(var(--primary))" fillOpacity="0.5" />
        <rect x="80" y="10" width="400" height="10" rx="2" fill="hsl(var(--background))" />

        {/* Content */}
        <rect x="20" y="50" width="200" height="230" fill="hsl(var(--background))" rx="4" />
        <text x="30" y="70" fontFamily="monospace" fontSize="14" fill="hsl(var(--primary))">&lt;div&gt;</text>
        <text x="50" y="90" fontFamily="monospace" fontSize="14" fill="hsl(var(--foreground))">&lt;h1&gt;...&lt;/h1&gt;</text>
        <text x="50" y="110" fontFamily="monospace" fontSize="14" fill="hsl(var(--foreground))">&lt;p&gt;...&lt;/p&gt;</text>
        <text x="30" y="130" fontFamily="monospace" fontSize="14" fill="hsl(var(--primary))">&lt;/div&gt;</text>

        <rect x="240" y="50" width="240" height="150" fill="hsl(var(--background))" rx="4" />
        <rect x="250" y="60" width="220" height="20" rx="2" fill="hsl(var(--muted))"/>
        <rect x="250" y="90" width="120" height="100" rx="2" fill="hsl(var(--muted))"/>
        <rect x="380" y="90" width="100" height="100" rx="2" fill="hsl(var(--accent))" opacity="0.8"/>
    </g>
  </svg>
);
