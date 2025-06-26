import React from 'react';

// The getFontSize function remains the same
const getFontSize = (name) => {
    if (name.length > 12) return 'text-lg sm:text-xl lg:text-2xl';
    if (name.length > 9) return 'text-xl sm:text-2xl lg:text-3xl';
    return 'text-2xl sm:text-3xl lg:text-4xl';
};

const PlayerCard = ({ player }) => {
    const [firstName, ...lastNameParts] = player.name.split(' ');
    const lastName = lastNameParts.join(' ');

    return (
        <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden group shadow-lg transform hover:-translate-y-2 transition-transform duration-300 bg-[#201d2a]">
            
            {/* Player Image with a Gradient Mask */}
            <img
                src={player.imageUrl}
                alt={player.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                // --- THIS IS THE KEY CHANGE ---
                style={{
                    maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', // For Safari compatibility
                }}
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400/201d2a/ffffff?text=Error'; }}
            />
            
            {/* REMOVED: The old gradient overlay div is gone! */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div> */}

            {/* Player Number */}
            <div className="absolute top-4 right-4 text-5xl font-black text-[#d4af37] opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                {player.number}
            </div>

            {/* Player Info - positioned at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <p className="text-lg font-light">{firstName}</p>
                <h3 className={`font-bold uppercase tracking-wider ${getFontSize(lastName)}`}>{lastName}</h3>
                <div className="w-1/4 h-1 bg-[#d4af37] my-2 rounded-full"></div>
                <p className="text-md font-semibold text-gray-300">{player.position}</p>
            </div>
        </div>
    );
};

export default PlayerCard;