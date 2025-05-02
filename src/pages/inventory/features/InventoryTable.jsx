// src/pages/components/MachineTableSection.jsx
import {useEffect, useState} from "react";
import Table from "../../../components/table/Table";
import Pagination from "../../../components/table/Pagination";
import Dropdown from "../../../components/common/Dropdown";
import SearchInput from "../../../components/common/SearchInput";
import RedCautionIcon from "../../../assets/icons/caution-red.svg";
import OrangeCautionIcon from "../../../assets/icons/caution-orange.svg";
import {FiChevronDown, FiEye, FiTrash2} from "react-icons/fi";
import {MdModeEdit} from "react-icons/md";
import {inventoryData} from "../../../lib/inventoryData";
import {Link} from "react-router";
import {textToSlug} from "../../../utils/textToSlug";

const InventoryTable = () => {
  const plantOptions = ["All Plants", "Operational", "Under Maintenance"];
  const stockStatusOptions = ["In Stock", "Low Stock", "Out of Stock"];

  const [search, setSearch] = useState("");
  const [selectedPlant, setSelectedPlant] = useState("Plants");
  const [selectedStockStatus, setSelectedStockStatus] =
    useState("Stock Status");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState({
    field: "",
    direction: "",
  });
  const [selectedRows, setSelectedRows] = useState({});
  const [displayedInventory, setDisplayedInventory] = useState([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedInventory(inventoryData.slice(startIndex, endIndex));
  }, [currentPage, itemsPerPage]);

  const handleSelectRow = (id) => {
    setSelectedRows((prev) => ({...prev, [id]: !prev[id]}));
  };

  const handleSelectAll = (isSelected, data) => {
    const newSelected = {};
    data.forEach((row) => {
      newSelected[row.id] = isSelected;
    });
    setSelectedRows(newSelected);
  };

  const columns = [
    {type: "checkbox", field: "checkbox", label: "", sortable: false},
    {field: "itemId", label: "Item ID", sortable: true},
    {field: "itemName", label: "Item Name", sortable: true},
    {field: "plant", label: "Plant", sortable: true},
    {
      field: "inStockQty",
      label: "In-Stock Qty",
      sortable: true,
    },
    {field: "unitPrice", label: "Unit Price", sortable: true},
    {field: "status", label: "Status", sortable: true},
    {field: "lastUpdated", label: "Last Updated", sortable: true},
    {field: "reorderLevel", label: "Reorder Level", sortable: true},
    {field: "action", label: "Action", sortable: false},
  ];

  const renderRow = (inventory) => (
    <tr key={inventory.itemId} className="border-b hover:bg-gray-50">
      <td className="p-3 w-8">
        <input
          type="checkbox"
          className="h-4 w-4"
          checked={selectedRows[inventory.id] || false}
          onChange={() => handleSelectRow(inventory.id)}
        />
      </td>
      <td className="p-2 text-sm text-gray-800">{inventory.itemId}</td>
      <td className="p-2 text-sm text-gray-800">{inventory.itemName}</td>
      <td className="p-2 text-sm text-gray-800">{inventory.plant}</td>
      <td className="p-2 text-sm text-gray-800">{inventory.inStockQty}</td>
      <td className="p-2">{inventory.unitPrice}</td>
      <td className="p-2 text-sm text-gray-800">
        <div className="flex items-center">
          <span
            className={`px-3 py-1 inline-flex items-center justify-center gap-x-1 text-xs font-medium rounded w-32 ${
              inventory.status === "Out of Stock"
                ? "bg-[#F9EAF5] text-[#C43E8A] border border-[#C43E8A]"
                : inventory.status === "Low Stock"
                ? "bg-[#F2E7D3] text-[#AC5F34] border border-[#AC5F34]" 
                : inventory.status === "In Stock"
                ? "bg-[#E1F3FD] text-[#0987C0] border border-[#0987C0]"
                : "bg-[#DBFDEC] text-[#10A95C] border border-[#10A95C]"
            }`}>
            {inventory.status}
            <FiChevronDown className="w-3 h-3" />
          </span>
        </div>
      </td>
      <td className="p-2">{inventory.lastUpdated}</td>
      <td className="px-2 py-1">{inventory.reorderLevel}</td>
      <td className="p-2">
        <div className="flex space-x-2">
          <Link
            to={`/inventory/${inventory.itemId}/${textToSlug(
              inventory.itemName
            )}`}
            className="text-[#3B82F6]">
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
          <div className="flex gap-3">
            <span className="text-base font-medium text-gray-600">
              Filter by :
            </span>
            <Dropdown
              options={plantOptions}
              selectedOption={selectedPlant}
              onSelect={setSelectedPlant}
              buttonText="Plants"
            />
            <Dropdown
              options={stockStatusOptions}
              selectedOption={selectedStockStatus}
              onSelect={setSelectedStockStatus}
              buttonText="Stock Status"
            />
            <Dropdown
              options={stockStatusOptions}
              selectedOption={selectedStockStatus}
              onSelect={setSelectedStockStatus}
              buttonText="Plant Location"
            />
            <Dropdown
              options={stockStatusOptions}
              selectedOption={selectedStockStatus}
              onSelect={setSelectedStockStatus}
              buttonText="Last Updated Date"
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
        data={displayedInventory}
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
        totalPages={Math.ceil(inventoryData.length / itemsPerPage)}
        totalItems={inventoryData.length}
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

export default InventoryTable;
