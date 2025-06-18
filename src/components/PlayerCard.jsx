const PlayerCard = ({ player }) => {
    const [firstName, ...lastNameParts] = player.name.split(' ');
    const lastName = lastNameParts.join(' ');

    return (
        <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden group shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            {/* Player Image */}
            <img
                src={player.imageUrl}
                alt={player.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400/201d2a/ffffff?text=Error'; }}
            />
            
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            {/* Player Number */}
            <div className="absolute top-4 right-4 text-5xl font-black text-[#d4af37] opacity-50 group-hover:opacity-100 transition-opacity">
                {player.number}
            </div>

            {/* Player Info */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <p className="text-lg font-light">{firstName}</p>
                <h3 className="text-3xl lg:text-4xl font-bold uppercase tracking-wider">{lastName}</h3>
                <div className="w-1/4 h-1 bg-[#d4af37] my-2 rounded-full"></div>
                <p className="text-md font-semibold text-gray-300">{player.position}</p>
            </div>
        </div>
    );
};

export default PlayerCard;