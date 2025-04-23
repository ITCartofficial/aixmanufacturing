import React, { Children } from "react";
import SelectDropdown from "./SelectDropdown";

const Container = ({ id, label, dropDown, children, opt }) => {
  return (
    <div
      id={id}
      className="w-full border h-max bg-[#ffffff] rounded-[10px] p-6 flex flex-col gap-6"
    >
      <div className="card_header flex items-center justify-between w-100">
        <h2 className="text-[20px] font-bold">{label}</h2>
        {dropDown && <SelectDropdown data={dropDown} />}
        {opt && opt}
      </div>
      {children}
    </div>
  );
};

export default Container;


