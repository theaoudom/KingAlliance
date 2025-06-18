// --- UPDATED COMPONENT: HeroSection with Animated Accent Bar ---
const HeroSection = ({ title, subtitle, imageUrl }) => (
    // Step 1: Add the "group" class to the main container to enable group-hover
    <div className="group relative h-[28rem] md:h-[32rem] w-full flex items-end text-white overflow-hidden rounded-b-lg shadow-2xl mb-12 md:mb-16">
        <img 
            src={imageUrl} 
            alt="Hero background"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
        
        <div className="relative z-20 p-8 md:p-12 w-full text-left">
            {/* Step 2: Modify the Accent Bar for animation */}
            <div 
                className="w-20 h-1.5 bg-[#d4af37] mb-4 rounded-full
                           scale-x-0 group-hover:scale-x-100 
                           transition-transform duration-500 ease-out 
                           origin-left"
            ></div>

            <h1 className="text-4xl md:text-6xl font-extrabold uppercase" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
                {title}
            </h1>
            
            {subtitle && (
                <p className="mt-2 text-lg md:text-xl font-medium max-w-2xl text-white/90" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                    {subtitle}
                </p>
            )}
        </div>
    </div>
);

export default HeroSection;