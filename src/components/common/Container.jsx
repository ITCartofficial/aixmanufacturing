import React, { Children } from "react";
import SelectDropdown from "./SelectDropdown";

const Container = ({ id, label, dropDown, children, opt, className = "" }) => {
  return (
    <div
      id={id}
      className={`w-full border h-max grow bg-[#ffffff] rounded-[10px] p-6 flex flex-col gap-6 ${className}`}
    >
      <div className="card_header flex items-center justify-between w-100">
        <h2 className="text-[20px] font-bold">{label}</h2>
        {dropDown && (
          <SelectDropdown
            data={[
              { value: 7, label: "Last 7 Days" },
              { value: 30, label: "Last 30 Days" },
            ]}
          />
        )}
        {opt && opt}
      </div>
      {children}
    </div>
  );
};

export default Container;
