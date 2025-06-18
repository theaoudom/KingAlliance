const PageHeader = ({ title, icon }) => (
  <div className="bg-[#2a2736] py-8 md:py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-4 text-[#d4af37]">
        {icon}
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{title}</h1>
      </div>
    </div>
  </div>
);

export default PageHeader; 