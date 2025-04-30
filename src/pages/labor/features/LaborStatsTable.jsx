import React, { useEffect, useState } from "react";

import Table from "@/components/table/Table";
import { FiEye, FiTrash2, FiArrowDown } from "react-icons/fi";
import { Link } from "react-router";
import { MdModeEdit } from "react-icons/md";
import getUserDetails from "../../../utils/getUserDetails";
import ShowProfile from "../../../components/common/ShowProfile";
import Pagination from "@/components/table/Pagination";
import Dropdown from "@/components/common/Dropdown";
import SearchInput from "@/components/common/SearchInput";
import { textToSlug } from "../../../utils/textToSlug";

const LaborStatsTable = ({ tableData = [] }) => {
  const [search, setSearch] = useState("");
  const statusArray = [...new Set(tableData.map((item) => item.status))];
  const plantArray = [...new Set(tableData.map((item) => item.plant))];
  const shiftArray = [...new Set(tableData.map((item) => item.shift))];

  // If you later want to fetch role from user DB, do it via user ID (mock shown here)
  const roleArray = [
    ...new Set(tableData.map((item) => getUserRole(item.user))),
  ];

  // Mock function for role if needed
  function getUserRole(userId) {
    const roles = {
      "user-1": "Operator",
      "user-2": "Supervisor",
      "user-3": "Technician",
      "user-4": "Operator",
      "user-5": "Supervisor",
      "user-6": "Technician",
      "user-7": "Operator",
      "user-8": "Operator",
      "user-9": "Technician",
      "user-10": "Operator",
    };
    return roles[userId] || "Unknown";
  }

  const [currentFilter, setCurrentFilter] = useState(tableData);
  const [currentStatus, setCurrentStatus] = useState("");
  const [currentRole, setCurrentRole] = useState("");
  const [currentPlant, setCurrentPlant] = useState("");
  const [currentShift, setCurrentShift] = useState("");

  useEffect(() => {
    let filtered = tableData;

    if (currentStatus) {
      filtered = filtered.filter((item) => item.status === currentStatus);
    }
    if (currentRole) {
      filtered = filtered.filter(
        (item) => getUserRole(item.user) === currentRole
      );
    }
    if (currentPlant) {
      filtered = filtered.filter((item) => item.plant === currentPlant);
    }
    if (currentShift) {
      filtered = filtered.filter((item) => item.shift === currentShift);
    }

    setCurrentFilter(filtered);
  }, [currentStatus, currentRole, currentPlant, currentShift, tableData]);

  // Pagination and sorting state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState({
    field: "",
    direction: "",
  });
  const [selectedRows, setSelectedRows] = useState({});

  // Display plants from pagination
  const [displayedLabor, setDisplayedLabor] = useState([]);

  // Handle pagination - slicing plants for the current page
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedLabor(currentFilter.slice(startIndex, endIndex));
  }, [currentPage, itemsPerPage, currentFilter]);

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

  const clearFilter = () => {};

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
          <Link
            to={`/labor/${labor.id}/${textToSlug(
              getUserDetails(labor.user).fullName
            )}`}
            className="text-[#3B82F6]"
          >
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
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-3 items-center">
          <span className="text-base font-medium text-gray-600">
            Filter by :
          </span>
          <Dropdown
            options={statusArray}
            selectedOption={currentStatus}
            onSelect={setCurrentStatus}
            buttonText="Status"
          />
          <Dropdown
            options={plantArray}
            selectedOption={currentPlant}
            onSelect={setCurrentPlant}
            buttonText="Plants"
          />
          <Dropdown
            options={shiftArray}
            selectedOption={currentShift}
            onSelect={setCurrentShift}
            buttonText="Shift"
          />
          <Dropdown
            options={roleArray}
            selectedOption={currentRole}
            onSelect={setCurrentRole}
            buttonText="Role"
          />
          {currentFilter !== tableData && (
            <button className="text-sm text-gray-600" onClick={clearFilter}>
              Clear Filter
            </button>
          )}
        </div>
        <div className="w-60">
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
          />
        </div>
      </div>
      <Table
        columns={columns}
        data={displayedLabor}
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
