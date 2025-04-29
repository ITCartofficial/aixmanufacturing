import React, { useEffect, useState } from "react";

import Table from "@/components/table/Table";
import { FiEye, FiTrash2, FiArrowDown } from "react-icons/fi";
import { Link } from "react-router";
import { MdModeEdit } from "react-icons/md";
import getUserDetails from "../../../utils/getUserDetails";
import ShowProfile from "../../../components/common/ShowProfile";
import Pagination from "@/components/table/Pagination";

const LaborStatsTable = ({ tableData = [] }) => {
  // Pagination and sorting state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState({
    field: "",
    direction: "",
  });
  const [selectedRows, setSelectedRows] = useState({});

  // Display plants from pagination
  const [displayedPlants, setDisplayedPlants] = useState([]);

  // Handle pagination - slicing plants for the current page
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedPlants(tableData.slice(startIndex, endIndex));
  }, [currentPage, itemsPerPage, tableData]);

  const columns = [
    { type: "checkbox", field: "checkbox", label: "", sortable: false },
    { field: "name", label: "Name", sortable: true },
    { field: "role", label: "Role", sortable: true },
    { field: "plant", label: "Plant", sortable: true },
    { field: "shift", label: "Shift", sortable: true },
    { field: "tasks", label: "Tasks", sortable: true },
    { field: "status", label: "Status", sortable: true },
    { field: "productivity", label: "Productivity", sortable: true },
    { field: "action", label: "Action", sortable: false },
  ];

  const statusStyles = {
    "On Duty": "bg-[#DBFDEC] text-[#10A95C] border border-[#10A95C]",
    Leave: "bg-[#E1F3FD] text-[#0987C0] border border-[#0987C0]",
    Out: "bg-[#F9EAF5] text-[#C43E8A] border border-[#C43E8A]",
    Scheduled: "bg-[#F2E7D3] text-[#AC5F34] border border-[#AC5F34]",
  };

  // Row selection handlers
  const handleSelectRow = (id) => {
    setSelectedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSelectAll = (isSelected, data) => {
    const newSelected = { ...selectedRows };
    data.forEach((row) => {
      newSelected[row.id] = isSelected;
    });
    setSelectedRows(newSelected);
  };

  // Define custom row renderer
  const renderRow = (labor, selectedRows, onSelectRow) => (
    <tr key={labor.id} className="border-b hover:bg-gray-50 last:border-none">
      <td className="p-3 w-8">
        <input
          type="checkbox"
          className="h-4 w-4"
          checked={selectedRows[labor.id] || false}
          onChange={() => onSelectRow(labor.id)}
        />
      </td>
      <td className="px-4 py-4 text-sm text-[#4B4B4B] flex gap-2 items-center">
        <span>{<ShowProfile user={getUserDetails(labor.user)} />}</span>
        <span>{getUserDetails(labor.user).fullName}</span>
      </td>
      <td className="p-3  text-sm">{getUserDetails(labor.user).role}</td>
      <td className="p-3  text-sm">{labor.plant}</td>
      <td className="p-3">
        <span className="px-4 py-2 border border-[#1F1F1F] rounded-[5px] text-sm font-medium">
          {labor.shift}
        </span>
      </td>
      <td className="p-3">{labor.tasks}</td>
      <td className="p-3  text-sm">
        <span
          className={`px-3 py-1 rounded-md text-xs font-medium ${
            statusStyles[labor.status]
          }`}
        >
          {labor.status}
        </span>
      </td>
      <td className="p-3">
        {labor.productivity ? (
          <div className="flex items-center">
            <div className="w-16 bg-[#C4EEC6] h-1 rounded mr-2 overflow-hidden">
              <div
                className="h-full bg-green-500 rounded"
                style={{ width: `${labor.productivity}%` }}
              ></div>
            </div>
            <span className=" text-sm">{labor.productivity}%</span>
          </div>
        ) : (
          "-"
        )}
      </td>
      <td className="p-3">
        <div className="flex space-x-2">
          <Link to={"#"} className="text-[#3B82F6]">
            <FiEye className="h-5 w-5" />
          </Link>
          <button className="text-black">
            <MdModeEdit className="h-5 w-5" />
          </button>
          <button className="text-red-500">
            <FiTrash2 className="h-5 w-5" />
          </button>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="w-full h-max px-4 py-8 sm:px-6 bg-white border rounded-[10px]">
      <div className="flex items-center justify-between mb-4"></div>
      <Table
        columns={columns}
        data={displayedPlants}
        renderRow={renderRow}
        initialSortField={sortConfig.field}
        initialSortDirection={sortConfig.direction}
        onSortChange={setSortConfig}
        selectedRows={selectedRows}
        onSelectRow={handleSelectRow}
        onSelectAll={handleSelectAll}
        headerColor="#EEF2FF"
      />

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(tableData.length / itemsPerPage)}
        totalItems={tableData.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
        onItemsPerPageChange={(newValue) => {
          setItemsPerPage(newValue);
          setCurrentPage(1); // Reset to first page when changing items per page
        }}
      />
    </div>
  );
};

export default LaborStatsTable;
