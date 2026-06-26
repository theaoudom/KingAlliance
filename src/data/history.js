// app/data/history.ts (or wherever your data is)

// Add an imageUrl to each object
export const mockHistory = [
    {
        id: 1,
        season: "2016-2017",
        achievement: "Where It All Began",
        details: "Founded by high school friends with a shared passion, the team began its journey in 2016 — a bond built on friendship, dreams, and the love of the game.",
        imageUrl: "/images/team/2016_team.png",
    },
    {
        id: 2,
        season: "2018-2019",
        achievement: "Birth of KING UNITED",
        details: "In 2018, the team was reborn as KING UNITED, proudly wearing a striking black uniform — marking the beginning of a bold new era.",
        imageUrl: "/images/team/2018_team.jpg",
    },
    {
        id: 3,
        season: "2019",
        achievement: "Growing the Squad",
        details: "By 2019 the squad had grown stronger. Wearing their grey uniform, the players trained on open fields under the Cambodian sky — more brothers, more hunger, one goal.",
        imageUrl: "/images/team/2019_team.jpg",
    },
    {
        id: 4,
        season: "2019",
        achievement: "The White & Red Kit",
        details: "Alongside the grey uniform, the squad also took to the field in white and red — training and competing on dusty grounds with the same fire and determination.",
        imageUrl: "/images/team/2019_team_white.jpg",
    },
    {
        id: 5,
        season: "2020-2021",
        achievement: "League Champions",
        details: "Clinched the title on the final day of the season with a dramatic late goal, sparking city-wide celebrations.",
        imageUrl: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&w=1649&q=80",
    },
];

// Sort the data by ID descending to show the newest achievement first
mockHistory.sort((a, b) => b.id - a.id);