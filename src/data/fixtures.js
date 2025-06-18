// --- RESTRUCTURED DATA: Split into Upcoming and Matched for each year ---
export const mockFixturesByYear = {
  "2024": {
    upcoming: [
      { 
        id: 1, 
        homeTeam: { name: "King Alliance", logoUrl: "/images/logo/logo.png" }, 
        awayTeam: { name: "City Rovers", logoUrl: "/images/logo/logo.png" },
        date: "2024-08-12", 
        time: "15:00", 
        venue: "King's Stadium", 
        competition: "League"
      },
      { 
        id: 2, 
        homeTeam: { name: "United FC", logoUrl: "/images/logo/logo.png" }, 
        awayTeam: { name: "King Alliance", logoUrl: "/images/logo/logo.png" },
        date: "2024-08-19", 
        time: "19:45", 
        venue: "The Grand Arena", 
        competition: "League"
      }
    ],
    matched: [
      { 
        id: 3, 
        homeTeam: { name: "King Alliance", logoUrl: "/images/logo/logo.png" }, 
        awayTeam: { name: "Coastal Town", logoUrl: "/images/logo/logo.png" },
        date: "2024-08-05", 
        time: "14:00", 
        venue: "King's Stadium", 
        competition: "Cup", 
        result: "W 3-0", 
        score: "3 - 0"
      },
      { 
        id: 4, 
        homeTeam: { name: "Mountain View", logoUrl: "/images/logo/logo.png" }, 
        awayTeam: { name: "King Alliance", logoUrl: "/images/logo/logo.png" },
        date: "2024-07-29", 
        time: "16:00", 
        venue: "Summit Park", 
        competition: "League", 
        result: "D 1-1", 
        score: "1 - 1"
      }
    ]
  },
  "2023": {
    upcoming: [],
    matched: [
      { 
        id: 5, 
        homeTeam: { name: "King Alliance", logoUrl: "/images/logo/logo.png" }, 
        awayTeam: { name: "Old Rivals", logoUrl: "/images/logo/logo.png" },
        date: "2023-05-20", 
        time: "15:00", 
        venue: "King's Stadium", 
        competition: "League Final", 
        result: "W 2-1", 
        score: "2 - 1"
      },
      { 
        id: 6, 
        homeTeam: { name: "Harbor Side", logoUrl: "/images/logo/logo.png" }, 
        awayTeam: { name: "King Alliance", logoUrl: "/images/logo/logo.png" },
        date: "2023-05-13", 
        time: "12:30", 
        venue: "The Docks", 
        competition: "League", 
        result: "L 0-1", 
        score: "0 - 1"
      }
    ]
  },
  "2022": {
    upcoming: [],
    matched: [
      { 
        id: 7, 
        homeTeam: { name: "King Alliance", logoUrl: "/images/logo/logo.png" }, 
        awayTeam: { name: "City Champions", logoUrl: "/images/logo/logo.png" },
        date: "2022-12-15", 
        time: "15:00", 
        venue: "King's Stadium", 
        competition: "League", 
        result: "W 1-0", 
        score: "1 - 0"
      }
    ]
  },
  "2021": {
    upcoming: [],
    matched: [
      { 
        id: 8, 
        homeTeam: { name: "King Alliance", logoUrl: "/images/logo/logo.png" }, 
        awayTeam: { name: "Rising Stars", logoUrl: "/images/logo/logo.png" },
        date: "2021-11-20", 
        time: "14:00", 
        venue: "Community Ground", 
        competition: "Cup", 
        result: "D", 
        score: "2 - 2"
      }
    ]
  },
  "2025": {
    upcoming: [],
    matched: []
  }
};

// Helper functions for data manipulation
export const getFixturesByYear = (year) => {
  return mockFixturesByYear[year] || { upcoming: [], matched: [] };
};

export const getAllYears = () => {
  return Object.keys(mockFixturesByYear).sort((a, b) => b - a);
};

export const getUpcomingFixtures = (year) => {
  const yearData = getFixturesByYear(year);
  return yearData.upcoming || [];
};

export const getMatchedFixtures = (year) => {
  const yearData = getFixturesByYear(year);
  return yearData.matched || [];
}; 