import Dropdown from "../../components/common/Dropdown";
import TitleBar from "../../components/common/TitleBar";

import IndustryIcon from "../../assets/icons/industry.png";
import GearIcon from "../../assets/icons/gear.png";
import SettingsPurple from "../../assets/icons/settings-purple.png";
import SettingsGreen from "../../assets/icons/settings-green.png";
import AlertIcon from "../../assets/icons/alert.png";
import StatCard from "../../components/common/StatCard";
import {useState} from "react";

const Machines = () => {
  const stats = [
    {title: "Total Machines", value: "12", icon: IndustryIcon},
    {title: "Operational Machines", value: "09", icon: SettingsPurple},
    {title: "Machines in Warning", value: "3", icon: GearIcon, statusIndicator: { type: "dot", color: "orange" }},
    {title: "Critical Machines", value: "5", icon: AlertIcon, statusIndicator: { type: "dot", color: "red" }},
    {title: "Average Utilization", value: "78%", icon: SettingsGreen, statusIndicator: { type: "arrow", color: "green" }},
  ];

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

  const [activeTab, setActiveTab] = useState("All Machines");
  const tabs = [
    "All Machines",
    "Operational",
    "Warning",
    "Critical"
  ];

  const [selectedPlant, setSelectedPlant] = useState("Plants");
  const plantOptions = ["All Plants", "Operational", "Under Maintenance"];

  const [selectedUtilization, setSelectedUtilization] =
    useState("Utilization %");
  const utilizationOptions = [
    "Less than 25%",
    "Below 50%",
    "More than 50%",
    "More than 75%",
  ];

  return (
    <div className="flex flex-col gap-6">
      <TitleBar title='Machines' outlineBtn="+ Add New" fillBtn="Export" />
      <div className="w-full px-4 p-6 sm:px-6 bg-white border rounded-[10px]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[20px] text-black font-bold">Overview</h2>
          <Dropdown
            options={options}
            selectedOption={selectedFilter}
            onSelect={handleSelect}
            buttonText="Filter"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {stats.map((stat, index) => (
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
            <div className="flex gap-3">
            <span className="text-base font-medium text-gray-600">Filter by :</span>
            <Dropdown
              options={plantOptions}
              selectedOption={selectedPlant}
              onSelect={setSelectedPlant}
              buttonText="Plants"
            />
            <Dropdown
              options={utilizationOptions}
              selectedOption={selectedUtilization}
              onSelect={setSelectedUtilization}
              buttonText="Utilization %"
            />
            </div>
          </div>
          <Dropdown
            options={options}
            selectedOption={selectedFilter}
            onSelect={handleSelect}
            buttonText="Filter"
          />
        </div>
      </div>
    </div>
  );
};

export default Machines;
