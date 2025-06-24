"use client";

import React from 'react';
import { ShoppingCart } from 'lucide-react';
import HeroSection from '@/components/HeroSection';

// ===================================================================================
//  1. MOCK DATA
//  This data structure drives the entire page's layout. The `layoutType`
//  property determines how each season's section will be rendered.
// ===================================================================================
// In your app/kits/page.tsx file, replace the old mock data

const mockKitsBySeason = [
  {
    season: "2024/25 Collection",
    layoutType: 'standard',
    kits: [
      { id: 1, type: "Home", imageUrl: "https://mufc-live.cdn.scayle.cloud/images/1e7659dda8fed1f7a8465bfd6d7b9b46.jpg?brightness=1&width=720&height=960&quality=75&bg=ffffff", price: "$99.99", isForSale: true },
      { id: 2, type: "Away", imageUrl: "https://mufc-live.cdn.scayle.cloud/images/1e7659dda8fed1f7a8465bfd6d7b9b46.jpg?brightness=1&width=720&height=960&quality=75&bg=ffffff", price: "$99.99", isForSale: true },
      { id: 3, type: "Third", imageUrl: "https://mufc-live.cdn.scayle.cloud/images/1e7659dda8fed1f7a8465bfd6d7b9b46.jpg?brightness=1&width=720&height=960&quality=75&bg=ffffff", isForSale: false }, // Not for sale
    ],
  },
  {
    season: "2023/24 Archive",
    layoutType: 'dual',
    kits: [
      { id: 4, type: "Home", imageUrl: "https://mufc-live.cdn.scayle.cloud/images/1e7659dda8fed1f7a8465bfd6d7b9b46.jpg?brightness=1&width=720&height=960&quality=75&bg=ffffff", price: "$99.99", isForSale: true },
      { id: 6, type: "Goalkeeper", imageUrl: "https://images.unsplash.com/photo-1608229729221-b1137357065a?auto=format&fit=crop&w=1200&q=80", isForSale: false },
    ],
  },
  {
    season: "2022/23 Championship Edition",
    layoutType: 'featured',
    kits: [
      { 
        id: 7, 
        type: "Championship Kit", 
        imageUrl: "https://images.unsplash.com/photo-1600216835223-718c393793b3?auto=format&fit=crop&w=1600&q=80",
        isForSale: false,
        description: "Celebrate a historic season with the limited edition Championship kit, as worn by the team when lifting the trophy. A collector's item for every true fan."
      },
    ],
  },
];


// ===================================================================================
//  2. REUSABLE UI COMPONENTS
//  These components maintain a consistent design across the website.
// ===================================================================================

const SectionHeader = ({ title }) => (
    <h2 className="text-3xl font-extrabold text-[#201d2a] border-b-2 border-[#d4af37] pb-2 mb-8">
        {title}
    </h2>
);

const KitCard = ({ kit }) => (
    // Hover effects are ALWAYS applied, regardless of isForSale status.
    <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-700 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
        <img src={kit.imageUrl} alt={`${kit.type} Kit`} className="w-full h-96 object-cover object-center transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
            <h3 className="text-white text-xl font-bold">{kit.type}</h3>
            {/* Price is only shown if the kit is for sale */}
            {kit.isForSale && (
                <p className="text-[#d4af37] font-semibold">{kit.price}</p>
            )}
        </div>
        {/* "Shop Now" overlay only rendered if the kit is for sale */}
        {kit.isForSale && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="flex items-center bg-[#d4af37] text-[#201d2a] px-6 py-3 font-bold rounded-md transform hover:scale-105 transition-transform">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Shop Now
                </a>
            </div>
        )}
    </div>
);

const FeaturedKitCard = ({ kit }) => (
    // Hover effects are ALWAYS applied.
    <div className="bg-white rounded-lg shadow-xl overflow-hidden md:flex transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
        <div className="md:w-3/5">
            <img src={kit.imageUrl} alt={kit.type} className="w-full h-64 md:h-full object-cover"/>
        </div>
        <div className="p-8 md:p-10 flex flex-col justify-center md:w-2/5">
            <h3 className="text-2xl font-bold text-[#201d2a]">{kit.type}</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">{kit.description}</p>
            
            {/* Price and Button are only rendered if the kit is for sale */}
            {kit.isForSale && (
                <div className="mt-auto pt-6"> {/* mt-auto pushes this block to the bottom */}
                    <div className="mb-4"><span className="text-3xl font-bold text-[#d4af37]">{kit.price}</span></div>
                    <a href="#" className="w-full inline-flex items-center justify-center bg-[#201d2a] text-white px-8 py-3 font-bold rounded-md transition-colors hover:bg-black">
                        <ShoppingCart className="h-5 w-5 mr-3" />
                        View Product
                    </a>
                </div>
            )}
        </div>
    </div>
);


// ===================================================================================
//  3. MAIN PAGE COMPONENT
//  This component renders the page structure and uses the adaptive layout logic.
// ===================================================================================
export default function KitsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection 
        title="The Kits"
        subtitle="Wear the colors. Represent the crest. Explore current and classic kits."
        imageUrl="/images/team/2021_team.png"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        {mockKitsBySeason.map((seasonData, index) => (
          <section key={seasonData.season} className={index > 0 ? 'mt-16' : ''}>
            <SectionHeader title={seasonData.season} />
            
            {/* --- ADAPTIVE RENDERING LOGIC --- */}
            {(() => {
              switch (seasonData.layoutType) {
                case 'featured':
                  return <FeaturedKitCard kit={seasonData.kits[0]} />;
                
                case 'dual':
                  return (
                    <div className="grid gap-8 md:grid-cols-2">
                      {seasonData.kits.map(kit => <KitCard key={kit.id} kit={kit} />)}
                    </div>
                  );

                case 'standard':
                default:
                  return (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                      {seasonData.kits.map(kit => <KitCard key={kit.id} kit={kit} />)}
                    </div>
                  );
              }
            })()}
          </section>
        ))}
      </main>
    </div>
  );
}