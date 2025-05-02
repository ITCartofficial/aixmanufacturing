import React, {useState} from "react";
import TitleBar from "../../components/common/TitleBar";
import InventoryStats from "./features/InventoryStats";
import {inventoryStats} from "../../lib/inventoryData";
import InventoryPieChart from "./features/InventoryPieChart";
import Container from "../../components/common/Container";
import LowStocksTable from "./features/LowStocksTable";
import InventoryTable from "./features/InventoryTable";

const Inventory = () => {
  const options = [
    "Today",
    "Last 7 days",
    "Last Month",
    "Last 3 months",
    "Last 6 months",
  ];
  const [selectedFilter, setSelectedFilter] = useState("Today");
  const handleSelect = (selectedOption) => setSelectedFilter(selectedOption);
  return (
    <div className="flex flex-col gap-6">
      <TitleBar title="Inventory" outlineBtn="+ Add Item" fillBtn="Export" />
      <InventoryStats
        stats={inventoryStats}
        filterOptions={options}
        selectedFilter={selectedFilter}
        onFilterChange={handleSelect}
      />
      <div className="grid grid-cols-10 gap-6">
        <div className="col-span-3 bg-white border rounded-[10px] p-6">
            <h2 className="text-[20px] text-black font-bold mb-6">Inventory Analytics</h2>
            <InventoryPieChart />
        </div>
        <Container
            className="col-span-7 h-full"
            label=" AI Predictive Low Stock Alert"
            dropDown={true}
            opt={{label: "View all", url: "/units"}}>
            <LowStocksTable />
          </Container>
      </div>
        <InventoryTable/>
    </div>
  );
};

export default Inventory;
