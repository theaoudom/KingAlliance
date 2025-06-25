"use client";

import React, { useState } from 'react';
import { Calendar, Shield, Ticket, ArrowRight, MapPin } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import { mockFixturesByYear, getAllYears } from '../../data/fixtures';

// --- FixtureCard Component ---
const FixtureCard = ({ fixture, type }) => {
  const isResult = type === 'result';
  const matchDate = new Date(fixture.date).toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric'
  });

  const ResultBadge = ({ result }) => {
    const getResultClasses = () => {
      if (result.startsWith('W')) return 'bg-green-100 text-green-800';
      if (result.startsWith('D')) return 'bg-gray-100 text-gray-800';
      if (result.startsWith('L')) return 'bg-red-100 text-red-800';
      return 'bg-gray-100 text-gray-800';
    };
    return (
      <span className={`px-2 py-1 text-xs font-bold rounded-full ${getResultClasses()}`}>
        {result.charAt(0)}
      </span>
    );
  };
  
  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 hover:shadow-xl">
      {/* Card Header */}
      <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex justify-between items-center text-sm">
        <div className="flex items-center space-x-2 text-gray-600">
          <Shield size={16} />
          <span>{fixture.competition}</span>
        </div>
        <span className="text-gray-500">{matchDate}</span>
      </div>

      {/* Main Content: Matchup */}
      <div className="p-6 flex items-center justify-center space-x-4">
        {/* Home Team */}
        <div className="flex-1 flex flex-col items-center text-center">
          {fixture.homeTeam.logoUrl ? (
            <img src={fixture.homeTeam.logoUrl} alt={fixture.homeTeam.name} className="h-16 w-16 mb-2" />
          ) : (
            <Shield size={64} className="mb-2 text-gray-300" />
          )}
          <p className="font-bold text-lg text-[#201d2a]">{fixture.homeTeam.name}</p>
        </div>

        {/* Center Info: Score or Time */}
        <div className="w-24 text-center">
          {isResult ? (
            <div className="flex flex-col items-center">
                <p className="text-4xl font-bold text-[#201d2a]">{fixture.score}</p>
                <ResultBadge result={fixture.result} />
            </div>
          ) : (
            <p className="text-3xl font-bold text-[#d4af37]">{fixture.time}</p>
          )}
        </div>

        {/* Away Team */}
        <div className="flex-1 flex flex-col items-center text-center">
          {fixture.awayTeam.logoUrl ? (
            <img src={fixture.awayTeam.logoUrl} alt={fixture.awayTeam.name} className="h-16 w-16 mb-2" />
          ) : (
            <Shield size={64} className="mb-2 text-gray-600" />
          )}
          <p className="font-bold text-lg text-[#201d2a]">{fixture.awayTeam.name}</p>
        </div>
      </div>

      {/* Card Footer with Hover Action */}
      <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 flex justify-between items-center">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <MapPin size={16}/>
          <span>{fixture.venue}</span>
        </div>
        <a href="#" className="flex items-center bg-[#201d2a] text-white px-3 py-1.5 rounded-md text-xs font-semibold
                               opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-95
                               transition-all duration-300 ease-in-out">
            {isResult ? 'Match Report' : 'Get Tickets'}
            {isResult ? <ArrowRight size={14} className="ml-2"/> : <Ticket size={14} className="ml-2"/>}
        </a>
      </div>
    </div>
  );
};

// --- Year Selector Component ---
const YearSelector = ({ years, selectedYear, onSelectYear }) => (
  <div className="bg-white p-2 rounded-lg shadow-md mb-12">
    <div className="flex justify-center">
      <div className="flex space-x-2 bg-gray-100 p-1 rounded-md overflow-x-auto scrollbar-hide max-w-full">
        {years.map(year => (
          <button
            key={year}
            onClick={() => onSelectYear(year)}
            className={`flex-shrink-0 px-6 py-2 text-sm font-bold rounded-md transition-colors duration-300
              ${selectedYear === year 
                ? 'bg-[#d4af37] text-[#201d2a] shadow' 
                : 'bg-transparent text-gray-600 hover:bg-gray-200'
              }`}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default function FixturesPage() {
  const availableYears = getAllYears();
  const [selectedYear, setSelectedYear] = useState('2025');

  // --- Get data for selected year ---
  const yearData = mockFixturesByYear[selectedYear] || { upcoming: [], matched: [] };
  const { upcoming, matched } = yearData;

  return (
    <div className="bg-gray-50">
      <HeroSection 
        title="Fixtures & Results"
        subtitle="Stay up to date with every match from the season"
        imageUrl="https://wallpapercat.com/w/full/7/5/0/172434-3840x2160-desktop-4k-football-wallpaper-image.jpg"
      />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 -mt-20 relative z-10">

        <YearSelector 
          years={availableYears}
          selectedYear={selectedYear}
          onSelectYear={setSelectedYear}
        />

        {(upcoming.length > 0 || matched.length > 0) ? (
          <div className="space-y-16">
            {/* Upcoming Fixtures Section */}
            {upcoming.length > 0 && (
              <div>
                <h2 className="text-3xl font-extrabold text-[#201d2a] border-b-2 border-[#d4af37] pb-2 mb-8">Upcoming Fixtures</h2>
                <div className="space-y-6">
                  {upcoming.map(fixture => <FixtureCard key={fixture.id} fixture={fixture} type="upcoming" />)}
                </div>
              </div>
            )}

            {/* Matched Results Section */}
            {matched.length > 0 && (
              <div>
                <h2 className="text-3xl font-extrabold text-[#201d2a] border-b-2 border-[#d4af37] pb-2 mb-8">
                  {selectedYear} Results
                </h2>
                <div className="space-y-6">
                  {matched.map(fixture => <FixtureCard key={fixture.id} fixture={fixture} type="result" />)}
                </div>
              </div>
            )}
          </div>
        ) : (
          // --- Handling for empty years like 2025 ---
          <div className="text-center bg-white p-10 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-[#201d2a]">Fixtures for {selectedYear} have not been announced.</h3>
            <p className="mt-2 text-gray-600">Please check back later for updates.</p>
          </div>
        )}
        
      </main>
    </div>
  );
}