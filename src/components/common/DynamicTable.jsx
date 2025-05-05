import React from "react";
import { IoWarning } from "react-icons/io5";

const DynamicTable = ({
  tableBody = [],
  cols = [],
  rows,
  riskLabel = false,
  riskCol = 0,
}) => {
  const riskLevelStyle = {
    High: "bg-[#F64C4C] text-white",
    Medium: "bg-[#FFAD0D] text-white",
    Low: "bg-[#47B881] text-white",
  };

  return (
    <div className="overflow-hidden border border-[#F5F5F5] rounded-[10px]">
      <table className="w-full text-base text-left text-gray-700">
        <thead className="bg-[#EEF2FF] text-black font-semibold">
          <tr>
            {cols.map((col, i) => (
              <th key={i} className="px-4 py-4">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBody.slice(0, rows).map((row, idx) => (
            <tr
              key={idx}
              className="border-b last:border-none text-[#4B4B4B] font-medium"
            >
              {cols.map((col, colIdx) => {
                if (riskLabel && colIdx == riskCol - 1) {
                  return (<td key={colIdx} className="px-4">
                    <div
                      className={`flex gap-2 items-center px-2 py-1 border rounded font-medium grow-0 w-min ${
                        riskLevelStyle[row[col.key]]
                      }`}
                    >
                      <IoWarning className="text-white text-sm" />
                      <span className="text-sm">{row[col.key]}</span>
                    </div>
                  </td>);
                } else {
                  return (<td key={colIdx} className="px-4 py-4">
                    {row[col.key]}
                  </td>);
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
