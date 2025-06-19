// app/components/HistoryEvent.tsx

import React from 'react';

const HistoryEvent = ({ item }) => {
  return (
    // Each event is a container that is the full height of the screen
    <div className="h-screen w-full relative">
      
      {/* 1. The Background Image - This stays sticky */}
      <div className="sticky top-0 h-screen w-full">
        <img
          src={item.imageUrl}
          alt={item.achievement}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay */}
      </div>

      {/* 2. The Foreground Content - This scrolls over the image */}
      <div className="absolute inset-0 flex items-center justify-start">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          
          {/* The "Glassmorphism" Info Card */}
          <div className="w-full md:w-1/2 lg:w-2/5 bg-black/40 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
            <h2 className="text-7xl md:text-9xl font-black text-white/20 -ml-1">
              {item.season}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mt-2">
              {item.achievement}
            </h3>
            <div className="w-1/4 h-1 bg-[#d4af37] my-4 rounded-full"></div>
            <p className="text-lg text-white/80 leading-relaxed">
              {item.details}
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HistoryEvent;