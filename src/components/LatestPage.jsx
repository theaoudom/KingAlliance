import React from 'react';
import { Newspaper } from 'lucide-react';
import PageHeader from './PageHeader';

// Mock data
const mockNews = [
  {
    id: 1,
    title: "King Alliance Lifts the Championship Trophy!",
    date: "2024-05-28",
    summary: "A thrilling 2-1 victory in the final match secured the league title for King Alliance in a historic season.",
    category: "Club News",
  },
  {
    id: 2,
    title: "Star Striker Signs New 3-Year Contract",
    date: "2024-05-25",
    summary: "Our top goalscorer has committed his future to the club, signing a new long-term deal.",
    category: "Transfers",
  },
  {
    id: 3,
    title: "Upcoming Pre-Season Fixtures Announced",
    date: "2024-05-22",
    summary: "The club has announced an exciting lineup of pre-season friendlies against top-tier opposition.",
    category: "Fixtures",
  },
];

const LatestPage = () => (
  <div>
    <PageHeader title="Latest News" icon={<Newspaper size={36} />} />
    <main className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mockNews.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <div className="p-6">
                <p className="text-sm text-[#d4af37] font-semibold">{item.category.toUpperCase()}</p>
                <h3 className="mt-2 text-xl font-bold text-[#201d2a]">{item.title}</h3>
                <p className="mt-3 text-gray-600">{item.summary}</p>
                <p className="mt-4 text-xs text-gray-500">{new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  </div>
);

export default LatestPage; 