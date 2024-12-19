const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-[#754737]">{title}</h2>
      <p className="text-gray-600 text-lg mt-3 max-w-2xl mx-auto">{subtitle}</p>
      <div className="w-16 h-1 bg-[#BF6159] mx-auto mt-4"></div>
    </div>
  );
};

export default SectionHeader;
