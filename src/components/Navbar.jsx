"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Latest", path: "/latest" },
  { name: "Fixtures", path: "/fixtures" },
  { name: "Players", path: "/players" },
  { name: "History", path: "/history" },
  { name: "Kits", path: "/kit" },
];

const Navbar = ({ logoUrl }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ link }) => {
    const isActive = pathname === link.path;
    return (
      <Link
        href={link.path}
        onClick={() => setIsMenuOpen(false)}
        className={`
          relative py-2 px-3 text-sm font-semibold transition-colors duration-300
          after:content-[''] after:absolute after:bottom-0 after:h-0.5 after:bg-[#d4af37] after:rounded-full
          after:w-2/3 after:left-1/2 after:-translate-x-1/2
          ${isActive
            ? 'text-white after:scale-x-100'
            : 'text-gray-300 hover:text-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100'
          }
        `}
      >
        {link.name}
      </Link>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#201d2a] shadow-xl shadow-black/30'
          : 'bg-[#201d2a]/95 backdrop-blur-sm shadow-lg shadow-black/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-[#d4af37] rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              <img
                className="relative h-11 w-11 rounded-full border-2 border-[#d4af37]/30 shadow-lg group-hover:border-[#d4af37] transition-all duration-300"
                src={logoUrl}
                alt="King Alliance FC"
              />
            </div>
            <div className="ml-3 hidden sm:block">
              <span className="text-white font-bold text-lg">King Alliance FC</span>
              <p className="text-xs text-gray-400 font-medium">Est. 2016</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => <NavLink key={link.path} link={link} />)}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#201d2a] border-t border-white/10">
          <div className="px-4 pt-3 pb-4 space-y-1 flex flex-col">
            {navLinks.map(link => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                  pathname === link.path
                    ? 'bg-[#d4af37]/20 text-[#d4af37]'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
