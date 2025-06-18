const Footer = ({ logoUrl }) => (
    <footer className="bg-[#201d2a] text-gray-300">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start">
                    <img className="h-16 w-16 mb-4" src={logoUrl} alt="King Alliance FC Logo" />
                    <p className="font-bold text-xl text-white">King Alliance FC</p>
                    <p className="text-sm">Est. 2021</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Tickets</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                    {/* Add social media icons here */}
                    <p className="text-sm">Stay connected with the club.</p>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} King Alliance FC. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer; 