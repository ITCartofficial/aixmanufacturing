

const StatCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col justify-between h-full border">
      <div className="flex justify-end">
        <img src={icon} alt="Icon" className="w-12 h-12 object-contain" />
      </div>
      <div className="mt-4 text-2xl font-bold text-black">{value}</div>
      <div className="text-sm text-gray-500 mt-1">{title}</div>
    </div>
  );
};

export default StatCard;