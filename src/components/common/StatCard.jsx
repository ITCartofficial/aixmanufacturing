import React from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

// Tailwind-safe mapping for colors
const colorMap = {
  red: { text: "text-red-500", bg: "bg-red-500", arrow: TiArrowSortedDown },
  orange: { text: "text-amber-500", bg: "bg-amber-500", arrow: TiArrowSortedDown },
  green: { text: "text-green-500", bg: "bg-green-500", arrow: TiArrowSortedUp },
};

const StatCard = ({ 
  title, 
  value, 
  percentageChange = null, // Can be null, positive, or negative number
  icon, 
  statusIndicator, 
  className = "",       // For the card container
  titleClassName = "",  // For the title text
  valueClassName = "",  // For the value text
  iconClassName = "",   // For the icon wrapper
  percentageClassName = "" // For percentage text
}) => {
  const renderIndicator = () => {
    if (!statusIndicator) return null;

    const { type, color } = statusIndicator;
    const { text, bg, arrow } = colorMap[color] || {};

    if (type === "dot") {
      return <span className={`w-2 h-2 rounded-full inline-block mr-1 ${bg}`} />;
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

  const renderPercentage = () => {
    if (percentageChange === null) return null;
    
    const isPositive = percentageChange > 0;
    const prefix = isPositive ? "+" : "";
    
    return (
      <span className={`ml-2 ${percentageClassName}`}>
        ({prefix}{percentageChange}%)
      </span>
    );
  };

  return (
    <div className={`bg-white p-4 rounded-xl flex flex-col justify-between border ${className}`}>
      <div className="flex justify-end">
        {renderIcon()}
      </div>
      <div className="mt-4 flex items-center">
        <span className={valueClassName}>{value}</span>
        {renderPercentage()}
      </div>
      <div className={`text-base font-medium text-gray-500 mt-1 ${titleClassName}`}>
        {renderIndicator()} {title}
      </div>
    </div>
  );
};

export default StatCard;