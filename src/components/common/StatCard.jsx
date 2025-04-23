
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";


// Tailwind-safe mapping for colors
const colorMap = {
  red: { text: "text-[#F64C4C]", bg: "bg-[#F64C4C]", arrow: TiArrowSortedDown },
  orange: { text: "text-[#FFAD0D]", bg: "bg-[#FFAD0D]", arrow: TiArrowSortedDown },
  green: { text: "text-[#47B881]", bg: "bg-[#47B881]", arrow: TiArrowSortedUp },
};

const StatCard = ({ title, value, icon, statusIndicator }) => {
  const renderIndicator = () => {
    if (!statusIndicator) return null;

    const { type, color } = statusIndicator;
    const { text, bg, arrow } = colorMap[color] || {};

    if (type === "dot") {
      return <span className={`w-[10px] h-[10px] rounded-full inline-block mr-1 ${bg}`} />;
    }

    if (type === "arrow" && arrow) {
      const ArrowIcon = arrow;
      return <ArrowIcon className={`inline-block mr-1 ${text}`} />;
    }

    return null;
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col justify-between h-full border">
      <div className="flex justify-end">
        <img src={icon} alt="Icon" className="w-12 h-12 object-contain" />
      </div>
      <div className="mt-4 text-3xl font-bold text-black flex items-center">
        {value}
      </div>
      <div className="text-base font-medium text-[#8E8E8E] mt-1">{renderIndicator()} {title}</div>
    </div>
  );
};

export default StatCard;
