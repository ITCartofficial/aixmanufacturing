import React, { useState } from "react";
import {
  FiChevronUp,
  FiChevronDown,
  FiChevronsLeft,
  FiChevronsRight,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import formatCurrency from "@/utils/formatCurrency"

const LargeDataTable = ({ tableData }) => {
  const [data, setData] = useState(tableData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  // Sorting logic
  const handleSort = (field) => {
    const direction =
      sortField === field && sortDirection === "asc" ? "desc" : "asc";
    const sorted = [...data].sort((a, b) => {
      if (a[field] < b[field]) return direction === "asc" ? -1 : 1;
      if (a[field] > b[field]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setData(sorted);
    setSortField(field);
    setSortDirection(direction);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full rounded-[10px] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left p-6">
          <thead className="bg-[#EEF2FF99] text-gray-700">
            <tr>
              <th
                className="p-3 cursor-pointer"
                onClick={() => handleSort("name")}
              >
                Plant Name{" "}
                {sortField === "name" &&
                  (sortDirection === "asc" ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  ))}
              </th>
              <th className="p-3">Revenue ($)</th>
              <th className="p-3">Total Expenses ($)</th>
              <th className="p-3">Net Profit ($)</th>
              <th className="p-3">Profit Margin (%)</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-3">{item.name}</td>
                <td className="p-3">{formatCurrency(item.revenue, 1)}</td>
                <td className="p-3">{formatCurrency(item.expenses, 1)}</td>
                <td className="p-3">{formatCurrency(item.profit, 1)}</td>
                <td className="p-3">{item.margin}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm">
        <div>
          Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, data.length)} of {data.length}{" "}
          items
        </div>
        <div className="flex items-center gap-1 mt-2 md:mt-0">
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="p-1 px-2 hover:bg-gray-100"
          >
            <FiChevronsLeft />
          </button>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="p-1 px-2 hover:bg-gray-100"
          >
            <FiChevronLeft />
          </button>
          <span className="px-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            disabled={currentPage === totalPages}
            className="p-1 px-2 hover:bg-gray-100"
          >
            <FiChevronRight />
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="p-1 px-2 hover:bg-gray-100"
          >
            <FiChevronsRight />
          </button>
        </div>
        <div className="mt-2 md:mt-0 flex items-center">
          <select
            className="border border-gray-300 rounded px-2 py-1"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            {[10, 20, 50].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <span className="ml-2">items per page</span>
        </div>
      </div>
    </div>
  );
};

export default LargeDataTable;
