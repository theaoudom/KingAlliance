// app/data/history.ts (or wherever your data is)

// Add an imageUrl to each object
export const mockHistory = [
    {
        id: 3,
        season: "2023-2024",
        achievement: "League Champions",
        details: "Clinched the title on the final day of the season with a dramatic late goal, sparking city-wide celebrations.",
        imageUrl: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&w=1649&q=80", // Image of a team celebrating
    },
    {
        id: 2,
        season: "2022-2023",
        achievement: "Domestic Cup Runners-Up",
        details: "A memorable cup run that ended in a narrow defeat in the final, but won the hearts of fans everywhere.",
        imageUrl: "https://images.unsplash.com/photo-1534018443125-949d94535334?auto=format&fit=crop&w=1770&q=80", // Image of a silver medal or trophy
    },
    {
        id: 1,
        season: "2021-2022",
        achievement: "Division 2 Champions",
        details: "Dominated the second division to secure promotion to the top flight in our first full season.",
        imageUrl: "https://images.unsplash.com/photo-1628891890377-573783d7e5a7?auto=format&fit=crop&w=1770&q=80", // Image of a player looking determined
    },
];

// Sort the data by ID descending to show the newest achievement first
mockHistory.sort((a, b) => b.id - a.id);