"use client";

import React from 'react';
import { Facebook, MapPin, Mail, ExternalLink } from 'lucide-react';
import HeroSection from '../../components/HeroSection';

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with King Alliance FC"
        imageUrl="/images/team/2025_team.png"
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Facebook */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-5">
              <div className="bg-blue-50 p-3 rounded-xl">
                <Facebook size={28} className="text-[#1877f2]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#201d2a]">Facebook Page</h3>
                <p className="text-gray-500 text-sm">Our main social channel</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Follow us on Facebook for the latest match results, announcements, behind-the-scenes content, and videos. The fastest way to reach us.
            </p>
            <a
              href="https://web.facebook.com/kingalliance1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#1877f2] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#1464d2] transition-colors duration-300 hover:scale-105 transform"
            >
              <Facebook size={18} className="mr-2" />
              King Alliance FC
              <ExternalLink size={14} className="ml-2 opacity-70" />
            </a>
          </div>

          {/* Location */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-5">
              <div className="bg-amber-50 p-3 rounded-xl">
                <MapPin size={28} className="text-[#d4af37]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#201d2a]">Home Ground</h3>
                <p className="text-gray-500 text-sm">Where we play</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-2">
              <span className="font-semibold text-[#201d2a]">KompongPopil High School</span>
            </p>
            <p className="text-gray-500 text-sm">Kompong Popil, Prey Veng Province, Cambodia</p>
            <div className="mt-6 bg-gray-50 rounded-xl p-4 border border-gray-100">
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-2">Typical Kick-off Times</p>
              <p className="text-sm text-gray-600">Afternoons: 14:00 – 16:15 local time</p>
            </div>
          </div>

        </div>

        {/* Club Info */}
        <div className="mt-8 bg-[#201d2a] rounded-2xl p-10 text-center">
          <img src="/images/logo/logo.png" alt="King Alliance FC" className="h-16 w-16 rounded-full border-2 border-[#d4af37]/40 mx-auto mb-5" />
          <h2 className="text-2xl font-bold text-white">King Alliance FC</h2>
          <p className="text-gray-400 mt-2 text-sm">Founded 2016 &nbsp;•&nbsp; Kompong Popil, Cambodia</p>
          <div className="mt-6 w-16 h-0.5 bg-[#d4af37] mx-auto rounded-full" />
          <p className="mt-6 text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
            We're a community-driven club. All match inquiries, partnerships, or fan messages are welcome via our Facebook page.
          </p>
        </div>

      </main>
    </div>
  );
}
