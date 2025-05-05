import React from "react";

const DynamicTable = ({ tableBody = [], cols = [], rows }) => {
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
              {cols.map((col, colIdx) => (
                <td key={colIdx} className="px-4 py-4">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
