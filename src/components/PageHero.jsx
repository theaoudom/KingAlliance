import React from 'react';

const PageHero = ({ title, icon, backgroundImageUrl }) => (
    <div className="relative h-64 md:h-72 w-full flex items-center text-white overflow-hidden rounded-b-lg shadow-2xl mb-12 md:mb-16">
        {/* Background Image */}
        <img 
            src={backgroundImageUrl} 
            alt="Page hero background"
            className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 via-black/60 to-black/80 z-10"></div>
        
        {/* Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-5">
                {/* Icon with a styled background */}
                <div className="bg-[#d4af37]/20 p-4 rounded-lg border border-[#d4af37]/50">
                    <div className="text-[#d4af37]">
                        {icon}
                    </div>
                </div>
                {/* Title */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    </div>
);

export default PageHero;