// app/history/page.tsx

"use client";

import React from 'react';
import { mockHistory } from '../../data/history'; // Ensure path is correct
import HeroSection from '../../components/HeroSection';
import HistoryEvent from '../../components/HistoryEvent.jsx'; // Import our new component
import { Star } from 'lucide-react';

export default function HistoryPage() {
  // We need to reverse the array so the oldest event is first in the timeline
  const chronologicalHistory = [...mockHistory].sort((a, b) => a.id - b.id);

  return (
    // Use a dark background for seamless transitions between sections
    <div className="bg-gray-900">
      <HeroSection 
        title="Our Legacy"
        subtitle="A journey of passion, struggle, and glory. This is the history of King Alliance."
        imageUrl="https://assets.the-afc.com/2022_FIFA_World_Cup_Qatar/Build_Up/Seoul-World-Cup-Stadium.jpg"
      />
      
      {/* The main content is just a sequence of our new HistoryEvent components */}
      <main>
        {chronologicalHistory.map((item) => (
          <HistoryEvent key={item.id} item={item} />
        ))}
      </main>

      {/* Closing section */}
      <div className="h-screen w-full flex flex-col items-center justify-center text-center text-white bg-black px-4">
        <Star size={48} className="text-[#d4af37] mb-6" />
        <h2 className="text-5xl md:text-7xl font-black uppercase">The Journey</h2>
        <div className="w-20 h-1 bg-[#d4af37] my-6 rounded-full" />
        <p className="text-2xl font-light text-white/70 max-w-lg">
          From a group of friends with a football to a proud club. The story continues.
        </p>
        <a
          href="/fixtures"
          className="mt-10 inline-flex items-center bg-[#d4af37] text-[#201d2a] px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition-colors duration-300"
        >
          See Our Matches
        </a>
      </div>
    </div>
  );
}