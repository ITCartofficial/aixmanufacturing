import React from "react";
import Dropdown from "../../../components/common/Dropdown";
import StatCard from "../../../components/common/StatCard";
import { plantStats } from "../../../lib/plantsData";

const PlantsStats = ({ selectedFilter, onFilterChange }) => {
  const options = [
    "Last 7 days",
    "Last Month",
    "Last 3 months",
    "Last 6 months",
  ];

  return (
    <div className="w-full px-4 p-6 sm:px-6 bg-white border rounded-[10px]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[20px] text-black font-bold">Overview</h2>
        <Dropdown
          options={options}
          selectedOption={selectedFilter}
          onSelect={onFilterChange}
          buttonText="Filter"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {plantStats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            statusIndicator={stat.statusIndicator}
          />
        ))}
      </div>
    </div>
  );
};

export default PlantsStats;