// A new PageHeader component
import { Users } from 'lucide-react'; // You'll need the icon for this one

const ModernPageHeader = ({ title, icon }) => (
    <div className="bg-gradient-to-r from-[#201d2a] to-slate-900 py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-4">
                <div className="text-[#d4af37]">
                    {icon}
                </div>
                <h1 className="text-4xl font-extrabold text-white tracking-tight">{title}</h1>
            </div>
        </div>
        {/* The golden divider line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#d4af37]"></div>
    </div>
);

export default ModernPageHeader; // In PlayersPage.tsx, use it like this:
// <ModernPageHeader title="First Team Squad" icon={<Users size={40} />} />