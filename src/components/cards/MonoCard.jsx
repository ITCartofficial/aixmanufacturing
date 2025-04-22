import React from "react";

const MonoCard = ({ count, label, icon, color="#5D60EF" }) => {

  return (
    <div className="flex flex-col p-4 justify-between border border-[#E1E1E1] rounded-[10px] grow min-w-[200px] h-[200px]">
      <div className="flex w-100 justify-end">
        <div
          className={`icon_placement flex items-center justify-center rounded-full w-[60px] h-[60px] bg-[${color}]`}
        >
          {icon && icon}
        </div>
      </div>

      <div className="text_placement">
        <h2 className="text-[36px] font-bold text-[#000000]">{count}</h2>
        <p className="text-[20px] text-[#8E8E8E] font-medium">{label}</p>
      </div>
    </div>
  );
};

export default MonoCard;
