export const playersByPosition = {
  Goalkeepers: [
    { id: 1, name: " Ansory", position: "Goalkeeper", number: 1, imageUrl: `/images/players/ansory_gk_2023.png` },
  ],
  Defenders: [
    { id: 22, name: " Reaksa", position: "Defender", number: 22, imageUrl: `/images/players/reaksa_yellow.png` },
    { id: 24, name: "Chek Pich", position: "Defender", number: 24, imageUrl: `/images/players/pich_yellow.png` },
    { id: 27, name: "Meng MinhCheong", position: "Defender", number: 27, imageUrl: `/images/players/minhcheong_yellow.png` },
    { id: 30, name: "Kouy ChhengKorng", position: "Defender", number: 30, imageUrl: `/images/players/chhengkorng_yellow.png` },
  ],
  Midfielders: [
    { id: 15, name: "Chea Lyhorng", position: "Midfielder", number: 15, imageUrl: `/images/players/tutu_2023_kit2.png` },
    { id: 23, name: " Ngie", position: "Midfielder", number: 23, imageUrl: `/images/players/ngie_yellow.png` },
    { id: 27, name: "Choeun Chhinlong", position: "Midfielder", number: 27, imageUrl: `/images/players/chinlong_yellow.png` },
  ],
  Forwards: [
    { id: 7, name: "Pheap Sophanna", position: "Forward", number: 7, imageUrl: `/images/players/sophana_yellow.png` },
    { id: 9, name: "Phol Karana", position: "Forward", number: 9, imageUrl: `/images/players/karona_yellow.png` },
    { id: 10, name: "Leng Chhayhong", position: "Forward", number: 10, imageUrl: `/images/players/chhayhong_yellow.png` },
    { id: 19, name: "Thy KimChorng", position: "Forward", number: 19, imageUrl: `/images/players/chhorng_yellow.png` },
    { id: 20, name: "Sun Sela", position: "Forward", number: 20, imageUrl: `/images/players/sela_yellow.png` },
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