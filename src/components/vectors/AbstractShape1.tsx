import React from 'react';

export const AbstractShape1 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 600 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="600" height="400" fill="hsl(var(--secondary))" />
    <path
      d="M-100 200L200 -100L500 200L200 500L-100 200Z"
      stroke="hsl(var(--primary))"
      strokeWidth="1"
      strokeOpacity="0.2"
    />
    <path
      d="M100 200L400 -100L700 200L400 500L100 200Z"
      stroke="hsl(var(--primary))"
      strokeWidth="1"
      strokeOpacity="0.2"
    />
     <circle cx="300" cy="200" r="50" stroke="hsl(var(--accent))" strokeWidth="1" />
  </svg>
);
