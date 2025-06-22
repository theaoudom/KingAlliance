export const playersByPosition = {
  Goalkeepers: [
    { id: 4, name: "Sam Wilson", position: "Goalkeeper", number: 1, imageUrl: `https://placehold.co/400x400/201d2a/d4af37?text=SW` },
  ],
  Defenders: [
    { id: 3, name: "Ben Carter", position: "Defender", number: 4, imageUrl: `https://placehold.co/400x400/201d2a/d4af37?text=BC` },
    { id: 5, name: "Chris Lee", position: "Defender", number: 5, imageUrl: `https://placehold.co/400x400/201d2a/d4af37?text=CL` },
    { id: 8, name: "Ryan Thompson", position: "Defender", number: 3, imageUrl: `https://placehold.co/400x400/201d2a/d4af37?text=RT` },
  ],
  Midfielders: [
    { id: 15, name: "Chea Lyhorng", position: "Midfielder", number: 15, imageUrl: `/images/players/tutu_2023_kit2.png` },
    { id: 6, name: "Marco Diaz", position: "Midfielder", number: 6, imageUrl: `https://placehold.co/400x400/201d2a/d4af37?text=MD` },
  ],
  Forwards: [
    { id: 1, name: "Leo Santos", position: "Forward", number: 10, imageUrl: `https://placehold.co/400x400/201d2a/d4af37?text=LS` },
    { id: 7, name: "David Martinez", position: "", number: 9, imageUrl: `https://placehold.co/400x400/201d2a/d4af37?text=DM` },
  ],
};

// Helper function to get all players as a flat array (if needed)
export const getAllPlayers = () => {
  return Object.values(playersByPosition).flat();
};

// Helper function to get players by specific position
export const getPlayersByPosition = (position) => {
  return playersByPosition[position] || [];
}; 