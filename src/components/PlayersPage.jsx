import React from 'react';
import { Users } from 'lucide-react';
import PageHeader from './PageHeader';

// Mock data
const mockPlayers = [
  { id: 1, name: "Leo Santos", position: "Forward", number: 10, imageUrl: `https://placehold.co/400x400/201d2a/d4af37?text=LS` },
  { id: 2, name: "Alex Johnson", position: "Midfielder", number: 8, imageUrl: `https://placehold.co/400x400/201d2a/d4af37?text=AJ` },
  { id: 3, name: "Ben Carter", position: "Defender", number: 4, imageUrl: `https://placehold.co/400x400/201d2a/d4af37?text=BC` },
  { id: 4, name: "Sam Wilson", position: "Goalkeeper", number: 1, imageUrl: `https://placehold.co/400x400/201d2a/d4af37?text=SW` },
  { id: 5, name: "Chris Lee", position: "Defender", number: 5, imageUrl: `https://placehold.co/400x400/201d2a/d4af37?text=CL` },
  { id: 6, name: "Marco Diaz", position: "Midfielder", number: 6, imageUrl: `https://placehold.co/400x400/201d2a/d4af37?text=MD` },
];

const PlayersPage = () => (
  <div>
    <PageHeader title="First Team Squad" icon={<Users size={36} />} />
    <main className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {mockPlayers.map(player => (
            <div key={player.id} className="text-center group">
              <div className="relative">
                <img 
                  src={player.imageUrl} 
                  alt={player.name} 
                  className="rounded-lg shadow-lg w-full aspect-square object-cover" 
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400/201d2a/ffffff?text=Error'; }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <span className="text-white text-5xl font-black">{player.number}</span>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#201d2a]">{player.name}</h3>
              <p className="text-gray-600">{player.position}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  </div>
);

export default PlayersPage; 