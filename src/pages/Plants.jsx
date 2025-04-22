import React, {useState} from "react";
import TitleBar from "../components/common/TitleBar";
import StatCard from "../components/common/StatCard";
import DashboardIcon from "../assets/icons/dashboard-icon.png";
import IndustryIcon from "../assets/icons/industry.png";
import FinanceIcon from "../assets/icons/finance.png";
import GearIcon from "../assets/icons/gear.png";
import SettingsIcon from "../assets/icons/settings.png";
import Dropdown from "../components/common/Dropdown";
import MainLayout from "../components/MainLayout";

const Plants = () => {
  const stats = [
    {title: "Total plants", value: "12", icon: IndustryIcon},
    {title: "Operational Plants", value: "09", icon: SettingsIcon},
    {title: "Under Maintenance", value: "3", icon: GearIcon},
    {title: "Overall OEE", value: "89.3%", icon: DashboardIcon},
    {title: "Budget Deviation", value: "+ $12,400", icon: FinanceIcon},
  ];

  const options = [
    "Last 7 days",
    "Last Month",
    "Last 3 months",
    "Last 6 months",
  ];

  const [selectedFilter, setSelectedFilter] = useState("Last 7 days");

  const handleSelect = (selectedOption) => {
    setSelectedFilter(selectedOption); // Update the selected filter
  };

  return (
    <MainLayout>
      <div>
      <TitleBar />
      <div className="mt-6 px-4 py-6 sm:px-6 bg-white shadow border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-700">Overview</h2>
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
            />
          ))}
        </div>
      </div>
    </div>
    </MainLayout>
  );
};

export default Plants;
