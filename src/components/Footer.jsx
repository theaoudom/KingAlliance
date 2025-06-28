import React from 'react';
import Link from 'next/link'; // Added for internal navigation
import { Facebook, Twitter, Instagram } from 'lucide-react';

// Data array for the Quick Links
const quickLinks = [
    { name: 'Home', path: '/latest' },
    { name: 'Tickets', path: '/tickets' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact Us', path: '/contact' },
];

// Data array for the Social Links
const socialLinks = [
    { name: 'Facebook', href: 'https://web.facebook.com/kingalliance1', icon: Facebook },
    // { name: 'Twitter', href: 'https://www.twitter.com/your-handle', icon: Twitter },
    // { name: 'Instagram', href: 'https://www.instagram.com/your-username', icon: Instagram },
];

const Footer = ({ logoUrl }) => (
    <footer className="bg-[#201d2a] text-gray-300">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                
                <div className="flex flex-col items-center md:items-start">
                    <img className="h-16 w-16 mb-4" src={logoUrl} alt="King Alliance FC Logo" />
                    <p className="font-bold text-xl text-white">King Alliance FC</p>
                    <p className="text-sm">Est. 2016</p>
                </div>

                {/* --- REFACTORED QUICK LINKS SECTION --- */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        {quickLinks.map(({ name, path }) => (
                            <li key={name}>
                                <Link href={path} className="hover:text-white transition-colors">
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                    <div className="flex items-center space-x-6 justify-center md:justify-start">
                        {socialLinks.map(({ name, href, icon: Icon }) => (
                            <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Follow us on ${name}`} className="text-gray-400 hover:text-[#d4af37] transition-colors duration-300">
                                <Icon size={24} />
                            </a>
                        ))}
                    </div>
                    <p className="text-sm mt-4">
                        Stay connected with the club.
                    </p>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
                <p>© {new Date().getFullYear()} King Alliance FC. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;