// src/pages/components/MachineTableSection.jsx
import { useEffect, useState } from "react";
import Table from "../../../components/table/Table";
import Pagination from "../../../components/table/Pagination";
import Dropdown from "../../../components/common/Dropdown";
import SearchInput from "../../../components/common/SearchInput";
import RedCautionIcon from "../../../assets/icons/caution-red.svg";
import OrangeCautionIcon from "../../../assets/icons/caution-orange.svg";
import { FiEye, FiTrash2 } from "react-icons/fi";
import { MdModeEdit } from "react-icons/md";
import { allMachines } from "../../../lib/machinesData";

const MachineTableSection = () => {
  const tabs = ["All Machines", "Operational", "Warning", "Critical"];
  const plantOptions = ["All Plants", "Operational", "Under Maintenance"];
  const utilizationOptions = [
    "Less than 25%",
    "Below 50%",
    "More than 50%",
    "More than 75%",
  ];

  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All Machines");
  const [selectedPlant, setSelectedPlant] = useState("Plants");
  const [selectedUtilization, setSelectedUtilization] = useState("Utilization %");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState({ field: "name", direction: "asc" });
  const [selectedRows, setSelectedRows] = useState({});
  const [displayedMachines, setDisplayedMachines] = useState([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedMachines(allMachines.slice(startIndex, endIndex));
  }, [currentPage, itemsPerPage]);

  const handleSelectRow = (id) => {
    setSelectedRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectAll = (isSelected, data) => {
    const newSelected = {};
    data.forEach((row) => { newSelected[row.id] = isSelected; });
    setSelectedRows(newSelected);
  };

  const columns = [
    { type: "checkbox", field: "checkbox", label: "", sortable: false },
    { field: "id", label: "ID", sortable: true },
    { field: "name", label: "Name", sortable: true },
    { field: "status", label: "Status", sortable: true },
    { field: "plant", label: "Plant", sortable: true, widthClass: "w-32" },
    { field: "utilization", label: "Utilization", sortable: true },
    { field: "lastMaintenance", label: "Last Maintenance", sortable: true },
    { field: "digitalTwin", label: "Digital Twin", sortable: true },
    { field: "issueFlag", label: "Issue Flag", sortable: true },
    { field: "action", label: "Action", sortable: false },
  ];

  const renderRow = (machine) => (
    <tr key={machine.id} className="border-b hover:bg-gray-50">
      <td className="p-3 w-8">
        <input
          type="checkbox"
          className="h-4 w-4"
          checked={selectedRows[machine.id] || false}
          onChange={() => handleSelectRow(machine.id)}
        />
      </td>
      <td className="p-2 text-sm text-gray-800">{machine.id}</td>
      <td className="p-2 text-sm text-gray-800">{machine.name}</td>
      <td className="p-2 text-sm text-gray-800">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${
            machine.status.toLowerCase() === 'critical' ? 'bg-[#F64C4C]' :
            machine.status.toLowerCase() === 'warning' ? 'bg-[#FFAD0D]' :
            'bg-[#47B881]'}`}></span>
          {machine.status}
        </div>
      </td>
      <td className="p-2 text-sm text-gray-800">{machine.plant}</td>
      <td className="p-2">
        <div className="flex items-center">
          <div className={`w-16 h-1 rounded mr-2 overflow-hidden ${
            machine.utilization >= 70 ? 'bg-[#C4EEC6]' :
            machine.utilization >= 50 ? 'bg-[#FFEAB3]' : 'bg-[#FFCCD2]'}`}>
            <div className={`h-full rounded ${
              machine.utilization >= 70 ? 'bg-[#2C8D32]' :
              machine.utilization >= 50 ? 'bg-[#FFAD0D]' : 'bg-[#F64C4C]'}`}
              style={{ width: `${machine.utilization}%` }}></div>
          </div>
          <span className="text-sm text-gray-800">{machine.utilization}%</span>
        </div>
      </td>
      <td className="p-2 text-sm text-gray-800">{machine.lastMaintenance}</td>
      <td className="p-2">
        <div className="py-1 border border-[#4B4B4B] rounded flex justify-center items-center">
          <div className={`w-2 h-2 rounded-full mr-1 ${
            machine.digitalTwin.toLowerCase() === 'active'
              ? 'bg-[#47B881]' : 'bg-[#8E8E8E]'}`}></div>
          <span className="text-sm text-gray-800">{machine.digitalTwin}</span>
        </div>
      </td>
      <td className="px-2 py-1">
        <div className="flex items-center">
          {machine.status.toLowerCase() === 'critical' ? (
            <>
              <img src={RedCautionIcon} alt="Critical" className="w-4 h-4 mr-1" />
              <span className="text-sm text-gray-800">Critical</span>
            </>
          ) : machine.status.toLowerCase() === 'warning' ? (
            <>
              <img src={OrangeCautionIcon} alt="Warning" className="w-4 h-4 mr-1" />
              <span className="text-sm text-gray-800">Warning</span>
            </>
          ) : (
            <span className="text-sm text-gray-800">N/A</span>
          )}
        </div>
      </td>
      <td className="p-2">
        <div className="flex space-x-2">
          <button className="text-[#3B82F6]"><FiEye className="h-5 w-5" /></button>
          <button className="text-black"><MdModeEdit className="h-5 w-5" /></button>
          <button className="text-red-500"><FiTrash2 className="h-5 w-5" /></button>
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
                  : "text-gray-600 hover:text-primary"}`}>
              {tab}
            </button>
          ))}
          <div className="flex gap-3">
            <span className="text-base font-medium text-gray-600">Filter by :</span>
            <Dropdown options={plantOptions} selectedOption={selectedPlant} onSelect={setSelectedPlant} buttonText="Plants" />
            <Dropdown options={utilizationOptions} selectedOption={selectedUtilization} onSelect={setSelectedUtilization} buttonText="Utilization %\" />
          </div>
        </div>
        <div className="w-60">
          <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
        </div>
      </div>
      
      <Table
        columns={columns}
        data={displayedMachines}
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
        totalPages={Math.ceil(allMachines.length / itemsPerPage)}
        totalItems={allMachines.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
        onItemsPerPageChange={(newVal) => {
          setItemsPerPage(newVal);
          setCurrentPage(1);
        }}
      />
    </div>
  );
};

export default MachineTableSection;
