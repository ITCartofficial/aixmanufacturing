import React, { Children } from "react";
import SelectDropdown from "./SelectDropdown";
import { Link } from "react-router";
import { MdChevronRight } from "react-icons/md";


const Container = ({ id, label, dropDown, children, opt, className = "" }) => {
  const options = [
    { value: 7, label: "Last 7 Days" },
    { value: 30, label: "Last Month" },
    { value: 90, label: "Last 3 Months" },
    { value: 180, label: "Last 6 Months" },
  ]
  return (
    <div
      id={id}
      className={`w-full border h-full grow bg-[#ffffff] rounded-[10px] p-6 flex flex-col gap-6 ${className}`}
    >
      <div className="card_header flex items-center justify-between w-100">
        <h2 className="text-[20px] font-bold">{label}</h2>
        <div className="flex items-center gap-4">
        {dropDown && (
          <SelectDropdown
            data={options}
          />
        )}
        {opt && (
          <Link to={opt.path} className="flex items-center w-full">
            <button className="text-blue-500 hover:text-blue-700 text-[16px] font-medium">
              {opt.label}
            </button>
            <MdChevronRight className="text-blue-500 hover:text-blue-700 text-[16px]" />
          </Link>
        )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Container;
