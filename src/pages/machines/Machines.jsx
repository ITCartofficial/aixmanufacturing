import TitleBar from "../../components/common/TitleBar";
import { useState } from "react";
import { stats } from "../../lib/machinesData";
import StatsOverview from "./features/StatsOverview";
import MachineTableSection from "./features/MachineTableSection";

const Machines = () => {
  const options = [
    "Last 7 days",
    "Last Month",
    "Last 3 months",
    "Last 6 months",
  ];
  const [selectedFilter, setSelectedFilter] = useState("Last 7 days");
  const handleSelect = (selectedOption) => setSelectedFilter(selectedOption);

  return (
    <div className="flex flex-col gap-6">
      <TitleBar title="Machines" outlineBtn="+ Add New" fillBtn="Export" />
      <StatsOverview
        stats={stats}
        filterOptions={options}
        selectedFilter={selectedFilter}
        onFilterChange={handleSelect}
      />
      <MachineTableSection />
    </div>
  );
};

export default Machines;
