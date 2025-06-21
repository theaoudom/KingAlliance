// app/loading.jsx

import React from 'react';

// A helper component for the animated dots
const LoadingDots = () => (
    <span className="inline-flex items-center">
        <span className="w-2 h-2 mx-1 bg-current rounded-full animate-pulse delay-0"></span>
        <span className="w-2 h-2 mx-1 bg-current rounded-full animate-pulse delay-200"></span>
        <span className="w-2 h-2 mx-1 bg-current rounded-full animate-pulse delay-400"></span>
    </span>
);

export default function Loading() {
  return (
    <div className="relative flex items-center justify-center h-screen w-full overflow-hidden bg-[#201d2a] text-white">
      {/* 1. Subtle Background Image */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img
          src="/images/logo/logo.png" // A blurry stadium or pitch texture
          alt="Loading background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Pulsing Logo */}
        <div className="relative mb-8">
            <img 
              className="relative h-24 w-24 rounded-full animate-pulse" 
              src="/club-logo.png" // IMPORTANT: Use your actual logo path
              alt="King Alliance FC Logo" 
            />
        </div>
        
        {/* Thematic Text */}
        <h1 className="text-3xl font-bold tracking-tight text-white/90">
          Preparing the Pitch
          <LoadingDots />
        </h1>

        <p className="mt-2 text-white/60">
          Please wait a moment while we load the action.
        </p>
      </div>
    </div>
  );
}