"use client";

import React from 'react';
import { Calendar, Shield } from 'lucide-react';
import PageHeader from '../../components/PageHeader';

// Mock data
const mockFixtures = [
  { id: 1, opponent: "City Rovers", date: "2024-08-12", time: "15:00", venue: "Home", competition: "League", result: null },
  { id: 2, opponent: "United FC", date: "2024-08-19", time: "19:45", venue: "Away", competition: "League", result: null },
  { id: 3, opponent: "Coastal Town", date: "2024-08-05", time: "14:00", venue: "Home", competition: "Cup", result: "W 3-0" },
  { id: 4, opponent: "Mountain View", date: "2024-07-29", time: "16:00", venue: "Away", competition: "League", result: "D 1-1" },
];

export default function FixturesPage() {
  const upcomingFixtures = mockFixtures.filter(f => f.result === null).sort((a, b) => new Date(a.date) - new Date(b.date));
  const recentResults = mockFixtures.filter(f => f.result !== null).sort((a, b) => new Date(b.date) - new Date(a.date));

  const FixtureCard = ({ fixture }) => (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 transform hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center space-x-4 text-center sm:text-left">
        <div className={`w-12 h-12 rounded-full bg-[#201d2a] flex items-center justify-center text-white font-bold`}>
          <Shield size={24} />
        </div>
        <div>
          <p className="font-bold text-lg text-[#201d2a]">{fixture.opponent}</p>
          <p className="text-sm text-gray-500">{fixture.competition}</p>
        </div>
      </div>
      <div className="text-center">
        <p className="font-semibold text-gray-800">{new Date(fixture.date).toLocaleDateString('en-GB', { weekday: 'short', day: '2-digit', month: 'short' })}</p>
        <p className="text-sm text-gray-600">{fixture.time}</p>
      </div>
      <div className="text-center">
        {fixture.result ? (
          <p className={`text-2xl font-bold ${fixture.result.startsWith('W') ? 'text-green-500' : fixture.result.startsWith('D') ? 'text-gray-500' : 'text-red-500'}`}>{fixture.result}</p>
        ) : (
          <p className="text-sm font-semibold bg-[#d4af37] text-[#201d2a] px-3 py-1 rounded-full">{fixture.venue}</p>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <PageHeader title="Fixtures & Results" icon={<Calendar size={36} />} />
      <main className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-[#201d2a] mb-6">Upcoming Fixtures</h2>
            <div className="space-y-4">
              {upcomingFixtures.map(fixture => <FixtureCard key={fixture.id} fixture={fixture} />)}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#201d2a] mb-6">Recent Results</h2>
            <div className="space-y-4">
              {recentResults.map(fixture => <FixtureCard key={fixture.id} fixture={fixture} />)}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 