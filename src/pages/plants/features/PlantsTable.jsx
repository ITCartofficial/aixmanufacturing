import React, { useState, useEffect } from "react";
import Dropdown from "../../../components/common/Dropdown";
import Table from "../../../components/table/Table";
import Pagination from "../../../components/table/Pagination";
import { allPlants } from "../../../lib/plantsData";
import { FiEye, FiTrash2, FiArrowDown } from "react-icons/fi";
import { MdModeEdit } from "react-icons/md";
import UpGraph from "../../../assets/icons/UpGraph.svg";
import DownGraph from "../../../assets/icons/DownGraph.svg";
import { Link } from "react-router";
import { textToSlug } from "../../../utils/textToSlug";

const PlantsTable = ({ selectedFilter, onFilterChange }) => {
  // Tab is purely visual with no data connection
  const [activeTab, setActiveTab] = useState("All Plants");
  const tabs = ["All Plants", "Operational", "Under Maintenance"];

  const options = [
    "Last 7 days",
    "Last Month",
    "Last 3 months",
    "Last 6 months",
  ];

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
    setDisplayedPlants(allPlants.slice(startIndex, endIndex));
  }, [currentPage, itemsPerPage]);

  // Define table columns
  const columns = [
    {type: "checkbox", field: "checkbox", label: "", sortable: false},
    {field: "name", label: "Plant Name", sortable: true},
    {field: "machine", label: "Machine", sortable: true},
    {field: "labour", label: "Labour", sortable: true},
    {field: "oee", label: "OEE (%)", sortable: true},
    {field: "downtime", label: "Downtime", sortable: true},
    {field: "lastActivity", label: "Last Activity", sortable: true},
    {field: "financialStatus", label: "Financial Status", sortable: true},
    {field: "action", label: "Action", sortable: false},
  ];

  // Row selection handlers
  const handleSelectRow = (id) => {
    setSelectedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSelectAll = (isSelected, data) => {
    const newSelected = {...selectedRows};
    data.forEach((row) => {
      newSelected[row.id] = isSelected;
    });
    setSelectedRows(newSelected);
  };

  // Define custom row renderer
  const renderRow = (plant, selectedRows, onSelectRow) => (
    <tr key={plant.id} className="border-b hover:bg-gray-50">
      <td className="p-3 w-8">
        <input
          type="checkbox"
          className="h-4 w-4"
          checked={selectedRows[plant.id] || false}
          onChange={() => onSelectRow(plant.id)}
        />
      </td>
      <td className="p-3 text-gray-800 text-sm">{plant.name}</td>
      <td className="p-3 text-gray-800 text-sm">{plant.machine}</td>
      <td className="p-3 text-gray-800 text-sm">{plant.labour}</td>
      <td className="p-3">
        <div className="flex items-center">
          <div className="w-16 bg-[#C4EEC6] h-1 rounded mr-2 overflow-hidden">
            <div
              className="h-full bg-green-500 rounded"
              style={{width: `${plant.oee}%`}}></div>
          </div>
          <span className="text-gray-800 text-sm">{plant.oee}%</span>
        </div>
      </td>
      <td className="p-3">
        <div className="flex items-center">
          <span className="flex items-center justify-center w-5 h-5 bg-[#F64C4C] rounded-full mr-2">
            <FiArrowDown className="text-white" />
          </span>
          <span className="text-gray-800 text-sm">{plant.downtime}</span>
        </div>
      </td>
      <td className="p-3 text-gray-800 text-sm">{plant.lastActivity}</td>
      <td className="p-3">
        <div className="flex items-center">
          {plant.financialStatus.startsWith("+") ? (
            <span className="text-gray-800 text-sm flex items-center gap-2">
              <img src={UpGraph} alt="Positive Graph" />
              {plant.financialStatus}
            </span>
          ) : (
            <span className="text-gray-800 text-sm flex items-center gap-2">
              <img src={DownGraph} alt="Negative Graph" />
              {plant.financialStatus}
            </span>
          )}
        </div>
      </td>
      <td className="p-3">
        <div className="flex space-x-2">
          <Link to={`/plants/${plant.id}/${textToSlug(plant.name)}`} className="text-[#3B82F6]">
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
        <div className="flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-base font-medium pb-2 transition-colors ${
                activeTab === tab
                  ? "border-b-2 border-primary text-black font-semibold"
                  : "text-gray-600 hover:text-primary"
              }`}>
              {tab}
            </button>
          ))}
        </div>
        <Dropdown
          options={options}
          selectedOption={selectedFilter}
          onSelect={onFilterChange}
          buttonText="Filter"
          buttonWidth="w-40"
        />
      </div>
      
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
      />

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(allPlants.length / itemsPerPage)}
        totalItems={allPlants.length}
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

export default PlantsTable;