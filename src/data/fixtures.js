// --- RESTRUCTURED DATA: Split into Upcoming and Matched for each year ---
export const mockFixturesByYear = {
  "2024": {
    upcoming: [

    ],
    matched: [
      
    ]
  },
  "2023": {
    upcoming: [],
    matched: [
      { 
        id: 202301, 
        homeTeam: { name: "King Alliance", logoUrl: "/images/logo/logo.png" }, 
        awayTeam: { name: "ក្រុមបាល់ទាត់នគបាលស្រុកពារាំង", logoUrl: "/images/logo/logo.png" },
        date: "2023-11-18", 
        time: "03:00 PM", 
        venue: "KompongPopil High School", 
        competition: "Friendly Match", 
        result: "W 2-0", 
        score: "2 - 0"
      }
    ]
  },
  "2022": {
    upcoming: [],
    matched: []
  },
  "2021": {
    upcoming: [],
    matched: []
  },
  "2019": {
    upcoming: [],
    matched: [
      { 
        id: 201902, 
        homeTeam: { name: "King Alliance", logoUrl: "/images/logo/logo.png" }, 
        awayTeam: { name: "Reab All Star", logoUrl: "/images/logo/logo.png" },
        date: "2019-06-29", 
        time: "14:00", 
        venue: "Uknow", 
        competition: "Friendly Match", 
        result: "W", 
        score: "2 - 1"
      },
      { 
        id: 201901, 
        homeTeam: { name: "King Alliance", logoUrl: "/images/logo/logo.png" }, 
        awayTeam: { name: "Unknow Team", logoUrl: "/images/logo/logo.png" },
        date: "2019-01-11", 
        time: "14:00", 
        venue: "Uknow", 
        competition: "Friendly Match", 
        result: "W", 
        score: "3 - 1"
      }
    ]
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