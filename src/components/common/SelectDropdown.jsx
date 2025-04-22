import React from "react";

const SelectDropdown = ({ data }) => {
  return (
    <select className="border border-gray-300 rounded-[5px] py-1 px-2 text-gray-700 focus:outline-none text-[14px]">
      {data.map((item, index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default SelectDropdown;
