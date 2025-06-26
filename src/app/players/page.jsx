"use client";

import React from 'react';
import { Users } from 'lucide-react';
import PageHero from '../../components/PageHero'; // <-- Import the new hero
import PlayerCard from '../../components/PlayerCard';
import { playersByPosition } from '../../data/players';

export default function PlayersPage() {
  return (
    <div className="bg-gray-50">
      {/* USE THE NEW HERO COMPONENT */}
      <PageHero 
        title="First Team" 
        icon={<Users size={40} />} 
        backgroundImageUrl="https://assets.the-afc.com/2022_FIFA_World_Cup_Qatar/Build_Up/Seoul-World-Cup-Stadium.jpg" // A placeholder stadium image
      />
      
      <main className="-mt-10"> {/* Negative margin pulls the content up slightly over the hero's margin */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-16">
          {Object.entries(playersByPosition).map(([position, players]) => (
            players.length > 0 && (
              <section key={position}>
                <h2 className="text-3xl font-bold text-[#201d2a] mb-6 border-l-4 border-[#d4af37] pl-4">{position}</h2>
                
                {/* --- RESPONSIVE GRID FIX --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                  {players.map(player => (
                    <PlayerCard key={player.id} player={player} />
                  ))}
                </div>
              </section>
            )
          ))}
        </div>
      </main>
    </div>
  );
}