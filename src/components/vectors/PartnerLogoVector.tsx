import React from 'react';

export const PartnerLogoVector = ({ name, ...props }: React.SVGProps<SVGSVGElement> & { name: string }) => (
    <svg 
        viewBox="0 0 120 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <rect width="120" height="40" fill="transparent"/>
        <text 
            x="50%" 
            y="50%" 
            dominantBaseline="middle" 
            textAnchor="middle" 
            fontFamily="var(--font-headline)"
            fontSize="14" 
            fontWeight="bold"
            fill="hsl(var(--muted-foreground))"
            className="group-hover:fill-primary transition-colors"
        >
            {name}
        </text>
    </svg>
);
