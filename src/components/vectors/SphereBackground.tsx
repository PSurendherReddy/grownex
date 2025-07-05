import React from 'react';

export const SphereBackground = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-[-20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-white/5 backdrop-blur-lg border border-white/10" />
            <div className="absolute top-[30%] right-[-15%] w-[50vw] h-[50vw] rounded-full bg-white/5 backdrop-blur-lg border border-white/10" />
            <div className="absolute bottom-[-25%] left-[20%] w-[35vw] h-[35vw] rounded-full bg-white/5 backdrop-blur-lg border border-white/10" />
            <div className="absolute bottom-[5%] right-[25%] w-[20vw] h-[20vw] rounded-full bg-white/5 backdrop-blur-lg border border-white/10" />
        </div>
    );
};
