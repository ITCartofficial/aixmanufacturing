import React, { useState } from "react";
import TitleBar from "../../components/common/TitleBar";
import PlantsStats from "../plants/features/PlantsStats";
import PlantsTable from "../plants/features/PlantsTable";

const Plants = () => {
  const [selectedFilter, setSelectedFilter] = useState("Last 7 days");
  
  const handleFilterChange = (selectedOption) => {
    setSelectedFilter(selectedOption);
  };

  return (
    <div className="flex flex-col gap-6">
      <TitleBar title='Plants' outlineBtn="+ Add New" fillBtn="Export"/>
      <PlantsStats 
        selectedFilter={selectedFilter} 
        onFilterChange={handleFilterChange} 
      />
      <PlantsTable 
        selectedFilter={selectedFilter} 
        onFilterChange={handleFilterChange} 
      />
    </div>
  );
};

export default Plants;