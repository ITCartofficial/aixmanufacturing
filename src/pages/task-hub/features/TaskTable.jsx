import React, {useState, useEffect} from "react";
import Dropdown from "@/components/common/Dropdown";
import Table from "@/components/table/Table";
import Pagination from "@/components/table/Pagination";
import {task} from "@/lib/taskData";
import SearchInput from "@/components/common/SearchInput.jsx";
import {FiChevronDown, FiList, FiGrid} from "react-icons/fi";
import Avatar from "@/components/table/Avatar";

const TaskTable = () => {
  const [search, setSearch] = useState("");
  // Tab is purely visual with no data connection
  const [activeTab, setActiveTab] = useState("List View");
  const tabs = [
    {name: "List View", icon: <FiList size={16} />},
    {name: "Kanban View", icon: <FiGrid size={16} />},
  ];

  // Filter state
  const [statusFilter, setStatusFilter] = useState("Status");
  const [priorityFilter, setPriorityFilter] = useState("Priority");
  const [roleFilter, setRoleFilter] = useState("Roles");

  const statusOptions = ["All Status", "Pending", "In Progress", "Completed"];
  const priorityOptions = ["All Priority", "High", "Medium", "Low"];
  const roleOptions = [
    "All Roles",
    "Floor Supervisor",
    "Maintenance Lead",
    "Shift Manager",
    "QA Manager",
    "Inventory Manager",
    "Floor Supervisor",
  ];

  const handleStatusFilterChange = (statusOptions) => {
    setStatusFilter(statusOptions);
  };
  const handlePriorityFilterChange = (priorityOptions) => {
    setPriorityFilter(priorityOptions);
  };
  const handleRoleFilterChange = (roleOptions) => {
    setRoleFilter(roleOptions);
  };

  // Pagination and sorting state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState({
    field: "",
    direction: "",
  });
  const [selectedRows, setSelectedRows] = useState({});

  // Display plants from pagination
  const [displayedTasks, setDisplayedTasks] = useState([]);

  // Handle pagination - slicing plants for the current page
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedTasks(task.slice(startIndex, endIndex));
  }, [currentPage, itemsPerPage]);

  // Define table columns
  const columns = [
    {type: "checkbox", field: "checkbox", label: "", sortable: false},
    {field: "id", label: "Task ID", sortable: true, widthClass: "w-24"},
    {field: "taskName", label: "Task name", sortable: true},
    {
      field: "assignedTo",
      label: "Assigned To",
      sortable: true,
      widthClass: "w-32",
    },
    {field: "plant", label: "Plant", sortable: true},
    {field: "status", label: "Status", sortable: true},
    {field: "priority", label: "Priority", sortable: true},
    {field: "dueDate", label: "Due Date", sortable: true, widthClass: "w-32"},
    {field: "createdBy", label: "Created By", sortable: true},
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
  const renderRow = (task, selectedRows, onSelectRow) => (
    <tr key={task.id} className="border-b hover:bg-gray-50">
      <td className="p-3 w-8">
        <input
          type="checkbox"
          className="h-4 w-4"
          checked={selectedRows[task.id] || false}
          onChange={() => onSelectRow(task.id)}
        />
      </td>
      <td className="p-3 text-gray-800 text-sm">{task.id}</td>
      <td className="p-3 text-gray-800 text-sm">{task.taskName}</td>
      <td className="p-3 text-gray-800 text-sm">
        <div className="flex items-center gap-2">
          <Avatar name={task.assignedTo} size="sm" />
          <span>{task.assignedTo}</span>
        </div>
      </td>
      <td className="p-3 text-gray-800 text-sm">{task.plant}</td>
      <td className="p-3 text-gray-800 text-sm">
        <div className="flex items-center">
          <span
            className={`px-3 py-1 inline-flex items-center justify-center gap-x-1 text-sm font-medium rounded w-32 ${
              task.status === "Pending"
                ? "bg-[#F2E7D3] text-[#AC5F34] border border-[#AC5F34]"
                : task.status === "In Progress"
                ? "bg-[#E1F3FD] text-[#0987C0] border border-[#0987C0]"
                : "bg-[#DBFDEC] text-[#10A95C] border border-[#10A95C]"
            }`}>
            {task.status}
            <FiChevronDown className="w-3 h-3" />
          </span>
        </div>
      </td>
      <td className="p-3 text-gray-800 text-sm">
        <div className="py-1 px-3 border border-[#4B4B4B] rounded flex items-center">
          <div
            className={`w-2 h-2 rounded-full mr-1 ${
              task.priority.toLowerCase() === "high"
                ? "bg-[#F64C4C]"
                : task.priority.toLowerCase() === "medium"
                ? "bg-[#FFAD0D]"
                : "bg-[#47B881]"
            }`}></div>
          <span className="text-sm text-gray-800 ml-1 font-medium">
            {task.priority}
          </span>
          <FiChevronDown className="w-3 h-3 ml-2" />
        </div>
      </td>
      <td className="p-3 text-gray-800 text-sm">{task.dueDate}</td>
      <td className="p-3 text-gray-800 text-sm">
        <div className="flex items-center gap-2">
          <Avatar name={task.createdBy} size="sm" />
          <span>{task.createdBy}</span>
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
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`text-base font-medium pb-2 transition-colors flex items-center gap-2 ${
                activeTab === tab.name
                  ? "border-b-2 border-primary text-black font-semibold"
                  : "text-gray-600 hover:text-primary"
              }`}>
              {tab.icon}
              {tab.name}
            </button>
          ))}
          <span className="text-base font-medium">Filter:</span>
          <div className="flex gap-3">
            <Dropdown
              options={statusOptions}
              selectedOption={statusFilter}
              onSelect={handleStatusFilterChange}
              buttonText="Filter"
              buttonWidth="w-32"
            />
            <Dropdown
              options={priorityOptions}
              selectedOption={priorityFilter}
              onSelect={handlePriorityFilterChange}
              buttonText="Filter"
              buttonWidth="w-32"
            />
            <Dropdown
              options={roleOptions}
              selectedOption={roleFilter}
              onSelect={handleRoleFilterChange}
              buttonText="Filter"
              buttonWidth="w-44"
            />
          </div>
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
        data={displayedTasks}
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
        totalPages={Math.ceil(task.length / itemsPerPage)}
        totalItems={task.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
        onItemsPerPageChange={(newValue) => {
          setItemsPerPage(newValue);
          setCurrentPage(1);
        }}
      />
    </div>
  );
};

export default TaskTable;
