import React from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

// Tailwind-safe mapping for colors
const colorMap = {
  red: { text: "text-[#F64C4C]", bg: "bg-[#F64C4C]", arrow: TiArrowSortedDown },
  orange: { text: "text-[#FFAD0D]", bg: "bg-[#FFAD0D]", arrow: TiArrowSortedDown },
  green: { text: "text-[#47B881]", bg: "bg-[#47B881]", arrow: TiArrowSortedUp },
};

const StatCard = ({ 
  title, 
  value, 
  icon, 
  statusIndicator, 
  className = "",       // For the card container
  titleClassName = "",  // For the title text
  valueClassName = "",  // For the value text
  iconClassName = ""    // For the icon wrapper
}) => {
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

  const renderIcon = () => {
    // If icon is a React element, render it directly
    if (React.isValidElement(icon)) {
      return <div className={`text-gray-600 text-2xl ${iconClassName}`}>{icon}</div>;
    }
    
    // If icon is a string (emoji or image URL)
    if (typeof icon === 'string') {
      // Check if it's an emoji (typically short string)
      if (icon.length <= 2) {
        return <div className={`text-2xl ${iconClassName}`}>{icon}</div>;
      }
      // Otherwise treat as image URL
      return <img src={icon} alt="Icon" className={`w-12 h-12 object-contain ${iconClassName}`} />;
    }
    
    return null;
  };

  return (
    <div className={`bg-white p-4 rounded-xl flex flex-col justify-between border ${className}`}>
      <div className="flex justify-end">
        {renderIcon()}
      </div>
      <div className={`mt-4 flex items-center ${valueClassName}`}>
        {value}
      </div>
      <div className={`text-base font-medium text-[#8E8E8E] mt-1 ${titleClassName}`}>
        {renderIndicator()} {title}
      </div>
    </div>
  );
};

export default StatCard;