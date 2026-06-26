import React from 'react';
import Link from 'next/link';
import { Facebook, MapPin, Mail } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Latest News', path: '/latest' },
  { name: 'Fixtures & Results', path: '/fixtures' },
  { name: 'Players', path: '/players' },
  { name: 'History', path: '/history' },
  { name: 'Contact Us', path: '/contact' },
];

const Footer = ({ logoUrl }) => (
  <footer className="bg-[#201d2a] text-gray-400">
    <div className="max-w-7xl mx-auto pt-14 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img className="h-14 w-14 rounded-full border border-[#d4af37]/30" src={logoUrl} alt="King Alliance FC" />
            <div>
              <p className="font-bold text-xl text-white">King Alliance FC</p>
              <p className="text-sm">Est. 2016</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            A local football club built on brotherhood, passion, and the love of the game. Founded in Kompong Popil, Cambodia.
          </p>
          <div className="flex items-center space-x-2 mt-4 text-sm">
            <MapPin size={14} className="text-[#d4af37] flex-shrink-0" />
            <span>KompongPopil High School, Prey Veng, Cambodia</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-bold text-white mb-5 uppercase tracking-wider">Navigation</h3>
          <ul className="space-y-2">
            {quickLinks.map(({ name, path }) => (
              <li key={name}>
                <Link href={path} className="text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-base font-bold text-white mb-5 uppercase tracking-wider">Follow Us</h3>
          <a
            href="https://web.facebook.com/kingalliance1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-white/5 hover:bg-[#1877f2]/20 border border-white/10 hover:border-[#1877f2]/40 px-4 py-3 rounded-xl transition-all duration-300 group"
          >
            <Facebook size={22} className="text-[#1877f2] group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-white font-semibold text-sm">King Alliance FC</p>
              <p className="text-xs text-gray-500">Follow on Facebook</p>
            </div>
          </a>
          <p className="mt-6 text-sm leading-relaxed">
            Stay up to date with match results, photos, and announcements directly from the club.
          </p>
        </div>

      </div>

      <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
        <p>© {new Date().getFullYear()} King Alliance FC. All Rights Reserved.</p>
        <p>Built with passion for the beautiful game.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
