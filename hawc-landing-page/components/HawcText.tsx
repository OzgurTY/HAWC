import React from 'react';

interface HawcTextProps {
    className?: string;
}

export default function HawcText({ className = "" }: HawcTextProps) {
    return (
        <span className={`font-display font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 uppercase ${className}`}>
            HAWC
        </span>
    );
}
