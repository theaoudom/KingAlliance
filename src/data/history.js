// app/data/history.ts (or wherever your data is)

// Add an imageUrl to each object
export const mockHistory = [
    {
        id: 3,
        season: "2020-2021",
        achievement: "League Champions",
        details: "Clinched the title on the final day of the season with a dramatic late goal, sparking city-wide celebrations.",
        imageUrl: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&w=1649&q=80", // Image of a team celebrating
    },
    {
        id: 2,
        season: "2018-2019",
        achievement: "Birth of KING UNITED",
        details: "In 2018, the team was reborn as KING UNITED, proudly wearing a striking black uniform — marking the beginning of a bold new era.",
        imageUrl: "/images/team/2018_team.jpg", // Image of a silver medal or trophy
    },
    {
        id: 1,
        season: "2016-2017",
        achievement: "Where It All Began",
        details: "Founded by high school friends with a shared passion, the team began its journey in 2016 — a bond built on friendship, dreams, and the love of the game.",
        imageUrl: "/images/team/2016_team.png", // Image of a player looking determined
    },
];

// Sort the data by ID descending to show the newest achievement first
mockHistory.sort((a, b) => b.id - a.id);