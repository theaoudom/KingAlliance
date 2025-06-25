export const playersByPosition = {
  Goalkeepers: [
    { id: 1, name: " Ansory", position: "Goalkeeper", number: 1, imageUrl: `/images/players/ansory_gk_2023.png` },
  ],
  Defenders: [
    { id: 30, name: "Kouy ChhengKorng", position: "Defender", number: 30, imageUrl: `/images/players/chhengkorng_yellow.png` },
    { id: 5, name: "Chris Lee", position: "Defender", number: 5, imageUrl: `https://placehold.co/400x400/201d2a/d4af37?text=CL` },
    { id: 8, name: "Ryan Thompson", position: "Defender", number: 3, imageUrl: `https://placehold.co/400x400/201d2a/d4af37?text=RT` },
  ],
  Midfielders: [
    { id: 15, name: "Chea Lyhorng", position: "Midfielder", number: 15, imageUrl: `/images/players/tutu_2023_kit2.png` },
    { id: 27, name: "Choeun Chhinlong", position: "Midfielder", number: 27, imageUrl: `/images/players/chinlong_yellow.png` },
  ],
  Forwards: [
    { id: 9, name: "Phol Karana", position: "Forward", number: 9, imageUrl: `/images/players/karona_yellow.png` },
    { id: 7, name: "David Martinez", position: "", number: 19, imageUrl: `https://placehold.co/400x400/201d2a/d4af37?text=DM` },
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