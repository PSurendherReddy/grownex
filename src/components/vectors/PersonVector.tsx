import React from 'react';

export const PersonVector = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="50" cy="50" r="50" fill="hsl(var(--secondary))" />
    <circle cx="50" cy="40" r="15" stroke="hsl(var(--primary))" strokeWidth="1" />
    <path
      d="M25 85C25 65 75 65 75 85Z"
      stroke="hsl(var(--primary))"
      strokeWidth="1"
      fill="hsl(var(--secondary))"
    />
  </svg>
);
