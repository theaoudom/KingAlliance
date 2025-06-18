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

  const NavLink = ({ link }) => {
    const isActive = pathname === link.path;
    
    return (
      <Link
        href={link.path}
        onClick={() => setIsMenuOpen(false)}
        className={`relative py-2 px-3 text-sm font-medium transition-colors duration-300 ${
          isActive 
            ? 'text-white' 
            : 'text-gray-300 hover:text-white'
        }`}
      >
        {link.name}
        {isActive && (
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-[#d4af37] rounded-full"></span>
        )}
      </Link>
    );
  };

  return (
    <nav className="bg-[#201d2a] sticky top-0 z-50 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/latest">
              <img className="h-14 w-14" src={logoUrl} alt="King Alliance FC Logo" />
              <span className="text-white font-bold text-xl ml-3 hidden sm:block">King Alliance FC</span>
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