import React, {useState} from "react";
import TitleBar from "../../components/common/TitleBar";
import Dropdown from "../../components/common/Dropdown";
import AiStatsOverview from "./features/AiStatsOverview";
1;
import {aiStats} from "../../lib/aiInsights";
import SearchInput from "../../components/common/SearchInput";
import PlantAiInsights from "./features/PlantAiInsights";
import MachineAiInsights from "./features/MachineAiInsight";
import FinanceAiInsights from "./features/FinanceAiInsight";
import PredictionMaintenanceChart from "./features/PredictionMaintenanceChart";
import FinanceDeviationChart from "./features/FinanceDeviationChart";
import PredictiveMaintenanceTable from "./features/PredictiveMaintenanceTable";
import MachineDowntimeForecast from "./features/Machine Downtime Forecast";
import {FiCalendar} from "react-icons/fi";

const AiInsights = () => {
  const options = [
    "Last 7 days",
    "Last Month",
    "Last 3 months",
    "Last 6 months",
  ];

  const [selectedFilter, setSelectedFilter] = useState("Last 7 days");
  const handleSelect = (selectedOption) => {
    setSelectedFilter(selectedOption);
  };

  // State for selected options
  const [selectedPlant, setSelectedPlant] = useState("All");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedMachine, setSelectedMachine] = useState("All");
  const [selectedDate, setSelectedDate] = useState("");

  // Sample options for dropdowns
  const plantOptions = ["All", "Plant 1", "Plant 2", "Plant 3"];
  const departmentOptions = [
    "All",
    "Engineering",
    "Production",
    "Quality Control",
    "Maintenance",
  ];
  const machineOptions = [
    "All",
    "Machine 1",
    "Machine 2",
    "Machine 3",
    "Machine 4",
  ];

  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col gap-6">
      <TitleBar title="AI Insights" fillBtn="Export" />
      <div className="w-full grid grid-cols-12 justify-center px-4 p-6 sm:px-6 bg-white border rounded-[10px]">
        <div className="col-span-3 flex flex-col gap-4">
          <div>
            <h2 className="text-base font-semibold text-black">Plants</h2>
          </div>
          <Dropdown
            options={plantOptions}
            selectedOption={selectedPlant}
            onSelect={setSelectedPlant}
            buttonText="Select Plant"
            buttonWidth="w-64"
          />
        </div>
        <div className="col-span-3 flex flex-col gap-4">
          <div>
            <h2 className="text-base font-semibold text-black">Departments</h2>
          </div>
          <Dropdown
            options={departmentOptions}
            selectedOption={selectedDepartment}
            onSelect={setSelectedDepartment}
            buttonText="Select Department"
            buttonWidth="w-64"
          />
        </div>
        <div className="col-span-3 flex flex-col gap-4">
          <div>
            <h2 className="text-base font-semibold text-black">Machine</h2>
          </div>
          <Dropdown
            options={machineOptions}
            selectedOption={selectedMachine}
            onSelect={setSelectedMachine}
            buttonText="Select Machine"
            buttonWidth="w-64"
          />
        </div>
        <div className="col-span-3 flex flex-col gap-4">
          <div>
            <h2 className="text-base font-semibold text-black">Date Range</h2>
          </div>
          <div className="relative">
            <input
              type="text"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              placeholder="Select Date"
              className="w-full px-4 py-[6px] border border-gray-300 bg-white rounded-md shadow-sm text-black text-sm font-medium hover:bg-gray-100 focus:outline-none pr-10"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <FiCalendar className="h-4 w-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
      <AiStatsOverview
        stats={aiStats}
        filterOptions={options}
        selectedFilter={selectedFilter}
        onFilterChange={handleSelect}
      />
      <div className="w-full h-max px-4 py-8 sm:px-6 bg-white border rounded-[10px]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-6">
            <h2 className="text-[20px] text-black font-bold">
              Plant AI Insights & Suggestions
            </h2>
          </div>
          <div className="w-60">
            <SearchInput
              //   value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
            />
          </div>
        </div>
        <PlantAiInsights />
      </div>
      {/* ---- Machine AI Insight ---- */}
      <div className="w-full h-max px-4 py-8 sm:px-6 bg-white border rounded-[10px]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-6">
            <h2 className="text-[20px] text-black font-bold">
              Machine AI Insights & Suggestions
            </h2>
          </div>
          <div className="w-60">
            <SearchInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
            />
          </div>
        </div>
        <MachineAiInsights />
      </div>
      {/* ---- Finance AI Insight ---- */}
      <div className="w-full h-max px-4 py-8 sm:px-6 bg-white border rounded-[10px]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-6">
            <h2 className="text-[20px] text-black font-bold">
              Finance AI Insights & Suggestions
            </h2>
          </div>
          <div className="w-60">
            <SearchInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
            />
          </div>
        </div>
        <FinanceAiInsights />
      </div>
      <div className="grid grid-cols-10 gap-6">
        <div className="col-span-5 w-full h-max bg-white border rounded-[10px] p-6">
          <h2 className="text-[20px] text-black font-bold mb-4">
            Finance AI Insights & Suggestions
          </h2>
          <PredictiveMaintenanceTable />
        </div>
        <div className="col-span-5">
          <PredictionMaintenanceChart />
        </div>
        <div className="col-span-5">
          <MachineDowntimeForecast />
        </div>
        <div className="col-span-5">
          <FinanceDeviationChart />
        </div>
      </div>
    </div>
  );
};

export default AiInsights;
