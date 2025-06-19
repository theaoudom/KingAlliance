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

      {/* A concluding section to bookend the timeline */}
      <footer className="h-screen w-full flex flex-col items-center justify-center text-center text-white bg-black">
        <Star size={48} className="text-[#d4af37]" />
        <h2 className="text-4xl font-bold mt-4">Founded 2016</h2>
        <p className="mt-2 text-white/70">The beginning of our journey.</p>
      </footer>
    </div>
  );
}