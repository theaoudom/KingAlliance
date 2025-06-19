"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navbar = ({ logoUrl }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const navLinks = [
    { name: "Latest", path: "/latest" },
    { name: "Fixtures", path: "/fixtures" },
    { name: "Players", path: "/players" },
    { name: "History", path: "/history" }
  ];

  // --- MODIFIED NavLink COMPONENT ---
  const NavLink = ({ link }) => {
    const isActive = pathname === link.path;
    
    // Classes for the hover underline animation, now with sizing and centering
    const hoverAnimationClasses = `
        after:content-[''] after:absolute after:bottom-0 
        after:h-0.5 after:bg-[#d4af37] after:rounded-full
        
        /* Sizing and Centering Classes */
        after:w-2/3 after:left-1/2 after:-translate-x-1/2
        
        /* Animation Classes */
        after:scale-x-0 after:origin-left 
        after:transition-transform after:duration-300 after:ease-out
        hover:after:scale-x-100
    `;

    return (
      <Link
        href={link.path}
        onClick={() => setIsMenuOpen(false)}
        className={`
            relative py-2 px-3 text-sm font-medium transition-colors duration-300
            ${isActive 
              ? 'text-white'
              : `text-gray-300 hover:text-white ${hoverAnimationClasses}`
            }
        `}
      >
        {link.name}
        {/* This static underline ONLY shows for the active link */}
        {isActive && (
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-[#d4af37] rounded-full"></span>
        )}
      </Link>
    );
  };

  return (
    <nav className="bg-[#201d2a]/99 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/latest" className="flex items-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded-full blur-sm opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <img 
                  className="relative h-12 w-12 rounded-full border-2 border-[#d4af37]/30 shadow-lg group-hover:border-[#d4af37] transition-all duration-300" 
                  src={logoUrl} 
                  alt="King Alliance FC Logo" 
                />
              </div>
              <div className="ml-4 hidden sm:block">
                <span className="text-white font-bold text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text ">
                  King Alliance FC
                </span>
                <p className="text-xs text-gray-400 font-medium">Est. 2016</p>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map(link => <NavLink key={link.path} link={link} />)}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#201d2a] border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map(link => <NavLink key={link.path} link={link} />)}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;