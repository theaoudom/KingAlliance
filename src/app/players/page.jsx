"use client";

import React from 'react';
import { Users } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import PlayerCard from '../../components/PlayerCard';
import { playersByPosition } from '../../data/players';

export default function PlayersPage() {
  return (
    <div>
      <PageHeader title="First Team Squad" icon={<Users size={36} />} />
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {Object.entries(playersByPosition).map(([position, players]) => (
            players.length > 0 && (
              <section key={position}>
                {/* Player Postion */}
                <h2 className="text-3xl font-bold text-[#201d2a] mb-6 border-l-4 border-[#d4af37] pl-4">{position}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                  {players.map(player => (
                    //  Player Card
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