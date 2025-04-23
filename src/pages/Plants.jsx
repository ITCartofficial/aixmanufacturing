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
import UpGraph from "../assets/icons/UpGraph.svg";
import DownGraph from "../assets/icons/DownGraph.svg"

import {
  FiEye,
  FiTrash2,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
  FiArrowDown,
} from "react-icons/fi";
import { MdModeEdit } from "react-icons/md";

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

  const [activeTab, setActiveTab] = useState("All Plants");
  const tabs = ["All Plants", "Operational", "Under Maintenance"];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Sample data matching the image
  const plants = [
    {
      id: 1,
      name: "Orion Plant",
      machine: 65,
      labour: 48,
      oee: 88.3,
      downtime: "1h 15m",
      lastActivity: "1 hr ago",
      financialStatus: "+$4,250",
      financialTrend: "up",
    },
    {
      id: 2,
      name: "Zephyr Works",
      machine: 74,
      labour: 53,
      oee: 81.9,
      downtime: "2h 10m",
      lastActivity: "30 min ago",
      financialStatus: "-$3,700",
      financialTrend: "down",
    },
    {
      id: 3,
      name: "Titan Foundry",
      machine: 40,
      labour: 32,
      oee: 91.3,
      downtime: "40m",
      lastActivity: "5 hr ago",
      financialStatus: "+$5,980",
      financialTrend: "up",
    },
    {
      id: 4,
      name: "Nexa Hub",
      machine: 52,
      labour: 47,
      oee: 87.6,
      downtime: "1h 10m",
      lastActivity: "1 hr ago",
      financialStatus: "+$2,200",
      financialTrend: "up",
    },
    {
      id: 5,
      name: "Altura Base",
      machine: 38,
      labour: 35,
      oee: 79.2,
      downtime: "56m",
      lastActivity: "25 min ao",
      financialStatus: "-$2,500",
      financialTrend: "down",
    },
    {
      id: 6,
      name: "Solace Facility",
      machine: 46,
      labour: 40,
      oee: 90.1,
      downtime: "2h 31m",
      lastActivity: "2 hr ago",
      financialStatus: "+$6,300",
      financialTrend: "up",
    },
    {
      id: 7,
      name: "Astra Forge",
      machine: 33,
      labour: 29,
      oee: 85.5,
      downtime: "55m",
      lastActivity: "3 hr ago",
      financialStatus: "+$1,750",
      financialTrend: "down",
    },
    {
      id: 8,
      name: "NovaCore Plant",
      machine: 58,
      labour: 44,
      oee: 77.8,
      downtime: "1h 20m",
      lastActivity: "1 day ago",
      financialStatus: "-$3,600",
      financialTrend: "down",
    },
    {
      id: 9,
      name: "Helix Works",
      machine: 41,
      labour: 36,
      oee: 89.0,
      downtime: "25m",
      lastActivity: "1 day ago",
      financialStatus: "+$3,400",
      financialTrend: "up",
    },
    {
      id: 10,
      name: "Vertex Assembly",
      machine: 49,
      labour: 38,
      oee: 83.7,
      downtime: "1h 40m",
      lastActivity: "2 day ago",
      financialStatus: "+$2,900",
      financialTrend: "up",
    },
  ];

  const totalItems = plants.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const visiblePlants = plants.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <MainLayout>
      <div className="flex flex-col gap-6">
        <TitleBar />
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
              />
            ))}
          </div>
        </div>

        <div className="w-full h-max px-4 p-6 sm:px-6 bg-white border rounded-[10px]">
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
            </div>
            <Dropdown
              options={options}
              selectedOption={selectedFilter}
              onSelect={handleSelect}
              buttonText="Filter"
            />
          </div>

          <div className="w-full bg-gray-50 p-2 rounded">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b text-sm">
                    <th className="p-3 text-left w-8">
                      <input type="checkbox" className="h-4 w-4" />
                    </th>
                    <th className="p-3 text-left font-medium text-gray-800">
                      <div className="flex items-center">
                        Plant Name <FiChevronDown className="ml-1 h-4 w-4" />
                      </div>
                    </th>
                    <th className="p-3 text-left font-medium text-gray-800">
                      <div className="flex items-center">
                        Machine <FiChevronDown className="ml-1 h-4 w-4" />
                      </div>
                    </th>
                    <th className="p-3 text-left font-medium text-gray-800">
                      <div className="flex items-center">
                        Labour <FiChevronDown className="ml-1 h-4 w-4" />
                      </div>
                    </th>
                    <th className="p-3 text-left font-medium text-gray-800">
                      <div className="flex items-center">
                        OEE (%) <FiChevronDown className="ml-1 h-4 w-4" />
                      </div>
                    </th>
                    <th className="p-3 text-left font-medium text-gray-800">
                      <div className="flex items-center">
                        Downtime <FiChevronDown className="ml-1 h-4 w-4" />
                      </div>
                    </th>
                    <th className="p-3 text-left font-medium text-gray-800">
                      <div className="flex items-center">
                        Last Activity <FiChevronDown className="ml-1 h-4 w-4" />
                      </div>
                    </th>
                    <th className="p-3 text-left font-medium text-gray-800">
                      <div className="flex items-center">
                        Financial Status{" "}
                        <FiChevronDown className="ml-1 h-4 w-4" />
                      </div>
                    </th>
                    <th className="p-3 text-left font-medium text-gray-800">
                      <div className="flex items-center">
                        Action <FiChevronDown className="ml-1 h-4 w-4" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {visiblePlants.map((plant) => (
                    <tr key={plant.id} className="border-b hover:bg-gray-50">
                      <td className="p-3 w-8">
                        <input type="checkbox" className="h-4 w-4" />
                      </td>
                      <td className="p-3 text-gray-800">{plant.name}</td>
                      <td className="p-3 text-gray-800">{plant.machine}</td>
                      <td className="p-3 text-gray-800">{plant.labour}</td>
                      <td className="p-3">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 h-1 rounded mr-2 overflow-hidden">
                            <div
                              className="h-full bg-green-500 rounded"
                              style={{width: `${plant.oee}%`}}></div>
                          </div>
                          <span className="text-gray-800">{plant.oee}%</span>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center">
                          <span className="flex items-center justify-center w-5 h-5 bg-[#F64C4C] rounded-full mr-2">
                            <FiArrowDown className="text-white"/>
                          </span>
                          <span className="text-gray-800">
                            {plant.downtime}
                          </span>
                        </div>
                      </td>
                      <td className="p-3 text-gray-800">
                        {plant.lastActivity}
                      </td>
                      <td className="p-3">
                        <div className="flex items-center">
                          {plant.financialStatus.startsWith("+") ? (
                            <span className="text-black font-medium flex items-center gap-2">
                              <img src={UpGraph} alt="Positive Graph" />
                              {plant.financialStatus}
                            </span>
                          ) : (
                            <span className="text-black font-medium flex items-center gap-2">
                              <img src={DownGraph} alt="Negative Graph" />
                              {plant.financialStatus}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          <button className="text-blue-500">
                            <FiEye className="h-5 w-5" />
                          </button>
                          <button className="text-black">
                          <MdModeEdit className="h-5 w-5" />
                          </button>
                          <button className="text-red-500">
                            <FiTrash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination controls - fixed layout exactly as in design */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm text-gray-600">
              {/* Left side - Items count */}
              <div className="mb-2 md:mb-0">1-10 of {totalItems} items</div>

              {/* Center - Pagination */}
              <div className="flex items-center mb-2 md:mb-0">
                <button
                  onClick={() => goToPage(1)}
                  className="px-2 py-1 rounded border border-gray-300 hover:bg-gray-100"
                  disabled={currentPage === 1}>
                  <FiChevronsLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  className="ml-1 px-2 py-1 rounded border border-gray-300 hover:bg-gray-100"
                  disabled={currentPage === 1}>
                  <FiChevronLeft className="h-4 w-4" />
                </button>

                {[1, 2, 3, 4, 5].map(
                  (pageNum) =>
                    pageNum <= totalPages && (
                      <button
                        key={pageNum}
                        onClick={() => goToPage(pageNum)}
                        className={`ml-1 px-3 py-1 rounded ${
                          currentPage === pageNum
                            ? "bg-blue-600 text-white"
                            : "border border-gray-300 hover:bg-gray-100"
                        }`}>
                        {pageNum}
                      </button>
                    )
                )}

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  className="ml-1 px-2 py-1 rounded border border-gray-300 hover:bg-gray-100"
                  disabled={currentPage === totalPages}>
                  <FiChevronRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => goToPage(totalPages)}
                  className="ml-1 px-2 py-1 rounded border border-gray-300 hover:bg-gray-100"
                  disabled={currentPage === totalPages}>
                  <FiChevronsRight className="h-4 w-4" />
                </button>
              </div>

              {/* Right side - Items per page */}
              <div className="flex items-center">
                <select
                  className="border border-gray-300 rounded px-2 py-1"
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                </select>
                <span className="ml-2">Items per page</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Plants;
