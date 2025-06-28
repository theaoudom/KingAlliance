"use client";

import React from 'react';
import { Newspaper, ArrowRight, PlayCircle, Calendar, Trophy, ShoppingCart } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import { Film } from 'lucide-react'; 
// --- MOCK DATA ---

const mockNews = [
  { id: 1, title: "King Alliance Lifts the Championship Trophy!", date: "2024-05-28", summary: "A thrilling 2-1 victory...", category: "Club News", imageUrl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1935&q=80" },
  { id: 2, title: "Upcoming Pre-Season Fixtures Announced", date: "2024-05-25", summary: "The club has announced...", category: "Fixtures", imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=2070&q=80" },
  { id: 3, title: "Star Striker Signs New 3-Year Contract", date: "2024-05-22", summary: "Our top goalscorer has committed...", category: "Transfers", imageUrl: "https://images.unsplash.com/photo-1606925797300-0b35e2d1c9e8?auto=format&fit=crop&w=1974&q=80" },
  { id: 4, title: "New Youth Academy Prospects Promoted", date: "2024-05-20", summary: "Three promising talents...", category: "Academy", imageUrl: "https://images.unsplash.com/photo-1551958214-2d5b03d5c389?auto=format&fit=crop&w=2070&q=80" },
  { id: 5, title: "Behind the Scenes: A Day at the Training Ground", date: "2024-05-18", summary: "Get an exclusive look...", category: "Features", imageUrl: "https://images.unsplash.com/photo-1599587123364-3238a061e893?auto=format&fit=crop&w=1287&q=80" },
  { id: 6, title: "Club Announces New Community Partnership", date: "2024-05-15", summary: "King Alliance is proud to partner...", category: "Community", imageUrl: "https://images.unsplash.com/photo-1593113616828-f6bca7047977?auto=format&fit=crop&w=1287&q=80" },
];

const mockVideos = [
    { id: 1, title: "Match Highlights: King Alliance vs. Rivals FC", duration: "5:32", thumbnailUrl: "https://images.unsplash.com/photo-1517423568342-33b6670e3a65?auto=format&fit=crop&w=1287&q=80" },
    { id: 2, title: "Inside Training: Preparing for the Final", duration: "10:15", thumbnailUrl: "https://images.unsplash.com/photo-1552667466-07770ae110d0?auto=format&fit=crop&w=1287&q=80" },
    { id: 3, title: "Player Interview: Our Star Striker on His New Contract", duration: "7:48", thumbnailUrl: "https://images.unsplash.com/photo-1628891890377-573783d7e5a7?auto=format&fit=crop&w=1287&q=80" },
];

const mockFixtures = {
    previousMatch: { homeTeam: { name: "King Alliance", logo: "/images/logo/logo.png" }, awayTeam: { name: "Godzilla", logo: "https://z-p3-scontent.fpnh5-4.fna.fbcdn.net/v/t39.30808-6/469556369_557057270468558_8009125323027450945_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH-4yxgFdjvVTvBVYQnC4cO-vfnCjl_XGz69-cKOX9cbOANpM_igKaDkEFc5LDHSPuWaLeZVRCuJ2HB3e4nH5n1&_nc_ohc=ke0MkjRCYO0Q7kNvwEAYNE5&_nc_oc=AdmVpdyvRN3spReMPqVooAFkQ7PW9yHNqUrKgXYuvOODxF182rHRjlGKO_pNjcd5rQc&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-4.fna&_nc_gid=1x_PnKRZvQsw_oChGUZkRQ&oh=00_AfOLR2D8UuOENJbH0jrqUqsuQ_xy-J24JYzedXIAjz3nkg&oe=6864A748" }, score: "3 - 5", competition: "Friendly Match", date: "2024-05-28" },
    nextMatch: ""
    // { homeTeam: { name: "King Alliance", logo: "/images/logo/logo.png" }, awayTeam: { name: "City United", logo: "/images/logo/logo.png" }, time: "15:00 BST", competition: "Pre-Season Friendly", date: "2024-07-15" }
};

const promotionData = {
    title: "RISE: The Story of Our Season",
    subtitle: "An all-access documentary following the team's historic championship run. Watch the full feature exclusively on our platform.",
    buttonText: "Watch Now",
    // Find a dramatic, cinematic image of a player or the team
    imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSYDv2ZWAqG_3_MlsMYpl0x8_hGfCn4F2t51OMwOrTIgwe5ou_C5ck4FJRjkKAUWu3i0CeOP12SnBnQuoferMLj-07C759tt-8c30jL4ko",
    link: "/videos/documentary-rise", // Link to the video page
    Icon: Film,
};


// --- REUSABLE COMPONENTS ---

const NewsCard = ({ item, featured = false }) => (
  <div className="group bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl">
    <div className="relative">
      <img src={item.imageUrl} alt={item.title} className={`w-full object-cover ${featured ? 'h-96' : 'h-48'}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <p className="absolute top-4 left-4 bg-[#d4af37] text-white text-xs font-bold uppercase px-2 py-1 rounded">{item.category}</p>
    </div>
    <div className="p-6">
      <p className="text-xs text-gray-500">{new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      <h3 className={`mt-2 font-bold text-[#201d2a] group-hover:text-[#d4af37] transition-colors duration-300 ${featured ? 'text-3xl' : 'text-xl'}`}>{item.title}</h3>
      <p className="mt-3 text-gray-600 leading-relaxed">{item.summary}</p>
      <a href="#" className="mt-4 inline-flex items-center text-[#d4af37] font-semibold">
        Read More <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  </div>
);

const SectionHeader = ({ title }) => (
    <h2 className="text-3xl font-extrabold text-[#201d2a] border-b-2 border-[#d4af37] pb-2 mb-6">
        {title}
    </h2>
);

// --- UPDATED COMPONENT: MatchCenter with Slower Zoom ---
const MatchCenter = () => {
    const { previousMatch, nextMatch } = mockFixtures;

    return (
        <div>
            <SectionHeader title="Match Center" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Last Match Card */}
                <div className="bg-white p-6 rounded-lg shadow-lg 
                                transition-all duration-500 ease-in-out  {/* <-- CHANGED HERE */}
                                hover:shadow-2xl hover:scale-[1.03]">
                    <h3 className="text-lg font-bold text-center text-gray-600 mb-4">Last Match</h3>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col items-center w-1/3">
                            <img src={previousMatch.homeTeam.logo} alt={previousMatch.homeTeam.name} className="h-16 w-16 mb-2" />
                            <span className="font-semibold text-center text-[#201d2a]">{previousMatch.homeTeam.name}</span>
                        </div>
                        <span className="text-5xl font-bold text-[#201d2a]">{previousMatch.score}</span>
                        <div className="flex flex-col items-center w-1/3">
                            <img src={previousMatch.awayTeam.logo} alt={previousMatch.awayTeam.name} className="h-16 w-16 mb-2" />
                            <span className="font-semibold text-center text-[#201d2a]">{previousMatch.awayTeam.name}</span>
                        </div>
                    </div>
                    <div className="text-center mt-4 text-gray-500 text-sm">
                        <p className="flex items-center justify-center"><Trophy className="h-4 w-4 mr-2"/> {previousMatch.competition}</p>
                    </div>
                </div>

                {/* Next Match Card or Placeholder */}
                {nextMatch ? (
                  <div className="bg-white p-6 rounded-lg shadow-lg
                                  transition-all duration-500 ease-in-out  {/* <-- CHANGED HERE */}
                                  hover:shadow-2xl hover:scale-[1.03]">
                      <h3 className="text-lg font-bold text-center text-gray-600 mb-4">Next Match</h3>
                      <div className="flex items-center justify-between">
                          <div className="flex flex-col items-center w-1/3">
                              <img src={nextMatch.homeTeam.logo} alt={nextMatch.homeTeam.name} className="h-16 w-16 mb-2" />
                              <span className="font-semibold text-center text-[#201d2a]">{nextMatch.homeTeam.name}</span>
                          </div>
                          <div className="text-center">
                              <span className="text-3xl font-bold text-[#d4af37]">{nextMatch.time}</span>
                              <p className="text-xs text-gray-500">vs</p>
                          </div>
                          <div className="flex flex-col items-center w-1/3">
                              <img src={nextMatch.awayTeam.logo} alt={nextMatch.awayTeam.name} className="h-16 w-16 mb-2" />
                              <span className="font-semibold text-center text-[#201d2a]">{nextMatch.awayTeam.name}</span>
                          </div>
                      </div>
                       <div className="text-center mt-4 text-gray-500 text-sm">
                          <p className="flex items-center justify-center"><Calendar className="h-4 w-4 mr-2"/> {new Date(nextMatch.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
                      </div>
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-gray-50 to-gray-200 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center min-h-[200px] border border-dashed border-[#d4af37]">
                    <Calendar className="h-12 w-12 text-[#d4af37] mb-4 animate-pulse" />
                    <span className="text-xl font-semibold text-gray-700 text-center mb-2">No Upcoming Matches</span>
                    <p className="text-gray-500 text-center">Stay tuned for future fixtures and updates!</p>
                  </div>
                )}
            </div>
        </div>
    )
}

const PromotionBanner = ({ data }) => (
    <div className="group relative w-full h-96 rounded-lg overflow-hidden shadow-2xl">
        <img src={data.imageUrl} alt={data.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        <div className="relative h-full flex flex-col items-start justify-center p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white max-w-xl">{data.title}</h2>
            <p className="mt-4 text-lg text-white/90 max-w-xl">{data.subtitle}</p>
            <a href={data.link} className="mt-8 inline-flex items-center bg-[#d4af37] text-[#201d2a] px-8 py-3 font-bold rounded-md transition-all duration-300 hover:bg-yellow-300 hover:scale-105 transform">
                {data.Icon && <data.Icon className="h-5 w-5 mr-3" />}
                {data.buttonText}
            </a>
        </div>
    </div>
);

const LatestVideos = () => (
    <div>
        <SectionHeader title="Latest Videos" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mockVideos.map(video => (
                <div key={video.id} className="group relative rounded-lg overflow-hidden shadow-lg cursor-pointer">
                    <img src={video.thumbnailUrl} alt={video.title} className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 flex items-center justify-center"><PlayCircle size={64} className="text-white/80 transform group-hover:scale-110 group-hover:text-white transition-all duration-300" /></div>
                    <div className="absolute bottom-0 left-0 p-4"><h3 className="text-white font-bold text-lg">{video.title}</h3></div>
                    <span className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">{video.duration}</span>
                </div>
            ))}
        </div>
    </div>
);

// --- MAIN PAGE COMPONENT ---
export default function LatestPage() {
  const featuredArticle = mockNews[0];
  const sidebarArticles = mockNews.slice(1, 3);
  const remainingArticles = mockNews.slice(3);

  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection 
            title="Latest News"
            subtitle="All the latest updates, announcements, and stories from King Alliance"
            imageUrl="/images/team/2025_team.png" // Using the championship photo for impact
        />
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-2 mb-8 lg:mb-0"><SectionHeader title="Top Story" /><NewsCard item={featuredArticle} featured={true} /></div>
            <div className="flex flex-col space-y-8"><SectionHeader title="More News" />{sidebarArticles.map(item => <NewsCard key={item.id} item={item} />)}</div>
          </div>

          {remainingArticles.length > 0 && (
            <div className="mt-16">
              <SectionHeader title="More Stories" />
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{remainingArticles.map(item => (<NewsCard key={item.id} item={item} />))}</div>
            </div>
          )}

          {/* Additional Content Sections */}
          <div className="mt-16 space-y-16">
            <MatchCenter />
            <PromotionBanner data={promotionData} />
            <LatestVideos />
          </div>

        </div>
      </main>
    </div>
  );
}