// app/not-found.jsx

import React from 'react';
import Link from 'next/link';
import { Compass, Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="relative flex items-center justify-center h-screen w-full overflow-hidden bg-gray-900 text-white">
      {/* 1. Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://assets.publishing.service.gov.uk/media/63f62823d3bf7f62e4409e3a/s960_Football_gov.uk.jpg" // An empty, dramatically lit stadium
          alt="Empty stadium"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </div>
      
      {/* 2. Giant "404" as a background element */}
      <h1 className="absolute z-10 text-[30vw] md:text-[25vw] lg:text-[20vw] font-black text-white/5 pointer-events-none select-none">
        404
      </h1>

      {/* 3. Main Content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-lg px-4">
        <div className="flex items-center justify-center w-20 h-20 bg-[#d4af37]/10 border-2 border-[#d4af37]/30 rounded-full mb-6">
          <Compass size={40} className="text-[#d4af37]" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Page Not Found
        </h2>

        <p className="mt-4 text-lg text-white/70">
          Looks like you've taken a wrong turn on the pitch. The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Primary Call to Action */}
        <Link
          href="/latest" // Link to your main landing page
          className="mt-8 inline-flex items-center bg-[#d4af37] text-[#201d2a] px-8 py-3 font-bold rounded-md transition-all duration-300 hover:bg-yellow-300 hover:scale-105 transform shadow-lg shadow-yellow-500/20"
        >
          <Home className="h-5 w-5 mr-3" />
          Return to Home Pitch
        </Link>

        {/* Secondary Navigation */}
        <div className="mt-12 text-center">
            <p className="text-sm text-white/50">Or try one of these pages:</p>
            <div className="mt-4 flex justify-center space-x-6">
                <Link href="/fixtures" className="font-semibold text-white/80 hover:text-[#d4af37] hover:underline transition-colors">Fixtures</Link>
                <Link href="/players" className="font-semibold text-white/80 hover:text-[#d4af37] hover:underline transition-colors">Players</Link>
                <Link href="/history" className="font-semibold text-white/80 hover:text-[#d4af37] hover:underline transition-colors">History</Link>
            </div>
        </div>
      </div>
    </div>
  );
}