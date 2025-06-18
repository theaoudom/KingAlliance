"use client";

import React from 'react';
import { Trophy } from 'lucide-react';
import PageHeader from '../../components/PageHeader';

// Mock data
const mockHistory = [
    {id: 1, season: "2021-2022", achievement: "Division 2 Champions", details: "Promoted to the top flight after a dominant season."},
    {id: 2, season: "2022-2023", achievement: "Domestic Cup Runners-Up", details: "A memorable cup run that ended in a narrow defeat in the final."},
    {id: 3, season: "2023-2024", achievement: "League Champions", details: "Clinched the title on the final day of the season with a dramatic late goal."},
];

export default function HistoryPage() {
  return (
    <div>
      <PageHeader title="Club History" icon={<Trophy size={36} />} />
      <main className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#201d2a] mb-6 border-b-2 border-[#d4af37] pb-2">Our Trophy Cabinet</h2>
            <div className="space-y-6">
              {mockHistory.map(item => (
                <div key={item.id} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Trophy className="text-[#d4af37]" size={28}/>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-[#201d2a]">{item.achievement}</p>
                    <p className="text-sm font-semibold text-gray-500">{item.season}</p>
                    <p className="mt-1 text-gray-700">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 