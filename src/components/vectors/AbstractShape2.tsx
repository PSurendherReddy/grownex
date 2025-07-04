import React from 'react';

export const AbstractShape2 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 600 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="600" height="400" fill="hsl(var(--secondary))" />
    <rect x="50" y="50" width="500" height="300" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.2"/>
    <line x1="50" y1="50" x2="550" y2="350" stroke="hsl(var(--accent))" strokeWidth="1" />
    <line x1="550" y1="50" x2="50" y2="350" stroke="hsl(var(--accent))" strokeWidth="1" strokeOpacity="0.5"/>
  </svg>
);
