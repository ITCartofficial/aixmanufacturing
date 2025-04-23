import React from "react";

import PrimaryBtn from "../components/buttons/PrimaryBtn";
import { BiExport } from "react-icons/bi";
import { IoClose, IoWarning } from "react-icons/io5";

import Container from "../components/common/Container";
import AreaCharts from "../components/charts/AreaCharts";
import { FaArrowCircleDown } from "react-icons/fa";

import { MdChevronRight } from "react-icons/md";
import SemiDonut from "../components/charts/SemiDonut";
import { Link } from "react-router";
import StatCard from "../components/common/StatCard";
import DashboardIcon from "../assets/icons/dashboard-icon.png";
import IndustryIcon from "../assets/icons/industry.png";
import FinanceIcon from "../assets/icons/finance.png";
import GearIcon from "../assets/icons/gear.png";
import SettingsIcon from "../assets/icons/settings.png";

const Dashboard = () => {
  const units = [
    { unit: "Unit A", machine: 14, oee: 81.5, downtime: 48, activeTasks: 6 },
    { unit: "Unit B", machine: 12, oee: 87.2, downtime: 19, activeTasks: 2 },
    { unit: "Unit C", machine: 9, oee: 78.0, downtime: 68, activeTasks: 4 },
    { unit: "Unit D", machine: 8, oee: 80.0, downtime: 25, activeTasks: 3 },
    { unit: "Unit E", machine: 8, oee: 80.0, downtime: 25, activeTasks: 3 },
  ];

  const stats = [
    { title: "Total plants", value: "6", icon: IndustryIcon },
    { title: "Total Machines", value: "74", icon: SettingsIcon },
    { title: "Overall OEE", value: "79.3", icon: GearIcon },
    { title: "Total Labour", value: "198", icon: DashboardIcon },
    { title: "Operating Cost", value: "+ $142,000", icon: FinanceIcon },
  ];

  const tasks = [
    {
      task: "Replace motor (BX-450)",
      assignee: "Raj (Engineer)",
      due: "14 Apr, 2025",
      status: "In Progress",
    },
    {
      task: "Inspect Nozzies",
      assignee: "Sunil (Maintena)",
      due: "14 Apr, 2025",
      status: "Pending",
    },
    {
      task: "Refill Coolant (CX-120)",
      assignee: "Alia (Engineer)",
      due: "16 Apr, 2025",
      status: "Scheduled",
    },
    {
      task: "Refill Coolant (CX-128)",
      assignee: "Raj (Engineer)",
      due: "14 Apr, 2025",
      status: "Completed",
    },
  ];

  const statusColors = {
    "In Progress": "bg-blue-100 text-blue-600",
    Pending: "bg-amber-100 text-amber-600",
    Scheduled: "bg-fuchsia-100 text-fuchsia-600",
    Completed: "bg-green-100 text-green-600",
  };

  const inventoryData = [
    { category: "Spare Parts", inStock: 89, lowStock: 9, restocking: 4 },
    { category: "Raw Material", inStock: 132, lowStock: 6, restocking: 3 },
    { category: "Tools", inStock: 37, lowStock: 1, restocking: 0 },
    { category: "Consumables", inStock: 58, lowStock: 2, restocking: 1 },
  ];

  const data = [
    {
      machine: "CNC Lathe #3",
      plat: "Orion Plant",
      alert: "Temp Strike",
      risk: "High",
      action: "Schedule Immediate Maintenance",
    },
    {
      machine: "Conveyor Motor #",
      plat: "Zephyr Works",
      alert: "Overheating Detected",
      risk: "High",
      action: "Reduce Load & Inspect Fan System",
    },
    {
      machine: "Robotic Arm #2",
      plat: "Titan Foundry",
      alert: "Predictive Part Failure",
      risk: "Medium",
      action: "Pre-order Replacement Part",
    },
    {
      machine: "Welding Machine #5",
      plat: "Nexa Hub",
      alert: "Power Fluctuation Pattern",
      risk: "Low",
      action: "Monitor Continuously",
    },
  ];

  const riskLevelStyle = {
    High: "bg-[#F64C4C] text-white",
    Medium: "bg-[#FFAD0D] text-white",
    Low: "bg-[#47B881] text-white",
  };

  const alertStyles = {
    danger: "border-red-200 bg-red-50 text-red-700",
    warning: "border-yellow-200 bg-yellow-50 text-yellow-700",
    success: "border-green-200 bg-green-50 text-green-700",
  };

  const alertIcons = {
    danger: "⚠️",
    warning: "❗",
    success: "✅",
  };

  const alerts = [
    {
      id: 1,
      message: "Severe Vibration Detected in CNC Lathe #3 (Unit A)",
      type: "danger",
    },
    {
      id: 2,
      message: "Temperature Spike in Conveyor Motor #1 (Unit B)",
      type: "warning",
    },
    {
      id: 3,
      message: "Routine Lubrication Needed for Robotic Arm #2 (Unit C)",
      type: "success",
    },
    {
      id: 4,
      message: "Severe Vibration Detected in CNC Lathe #4 (Unit D)",
      type: "danger",
    },
  ];

  return (
    <>
      <div className="hero_dash flex items-center justify-between w-100">
        <div className="hero_dash_texts">
          <h1 className="text-[32px] font-semibold">Hello John,</h1>
          <p className="text-[14px] text-[#000000] font-normal">
            Welcome to AiXManufacturing
          </p>
        </div>
        <div className="hero_dash_img">
          <PrimaryBtn
            label="Export"
            icon={<BiExport className="text-[20px]" />}
          />
        </div>
      </div>

      <Container id={"overviewDashboard"} label={"Overview"} dropDown={true}>
        <div className="card_body grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
            />
          ))}
        </div>
      </Container>

      <Container id="trendGraph" label="OEE Trend Graph" dropDown={true}>
        <AreaCharts name="OEE Trend Graph" />
      </Container>

      <div className="gap-4 grid grid-cols xl:grid-cols-10 w-full">
        <Container
          className="col-span-7"
          label="Unit -Wise OEE & Activity"
          dropDown={true}
          opt={{ label: "View all", url: "/units" }}
        >
          <table className="table rounded-[10px] shadow-sm overflow-hidden text-center">
            <thead className="bg-[#EEF2FF99] text-left">
              <tr>
                <th className="px-4 py-4">Unit</th>
                <th className="px-4 py-4">Machines</th>
                <th className="px-4 py-4">OEE</th>
                <th className="px-4 py-4">Downtime</th>
                <th className="px-4 py-4">Active Tasks</th>
              </tr>
            </thead>
            <tbody className="text-left">
              {units.map((unit, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-0">{unit.unit}</td>
                  <td className="px-4 py-0">{unit.machine}</td>
                  <td className="px-4 py-0 flex items-center justify-start gap-2">
                    <div className="w-[50px] bg-[#C4EEC6] max-w-sm my-4 rounded-lg overflow-hidden border border-gray-300">
                      <div
                        className="bg-[#2C8D32] text-xs leading-none py-1"
                        style={{ width: `${unit.oee}%` }}
                      ></div>
                    </div>
                    <span className="text-sm">{unit.oee}%</span>
                  </td>
                  <td className="px-4 py-0">
                    <div className="flex items-center justify-start gap-2">
                      <FaArrowCircleDown className="text-[16px] text-[#F64C4C]" />
                      <span className="text-sm">{unit.downtime} hrs</span>
                    </div>
                  </td>
                  <td className="px-4 py-0">{unit.activeTasks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>

        <Container
          className="col-span-3"
          label="Machine Summary"
          dropDown={true}
        >
          <div className="flex flex-col items-center justify-between w-[100%] h-[260px] mt-4 relative">
            <SemiDonut />
            <Link
              to="#"
              className="p-0 h-auto flex items-center hover:gap-2 cursor-pointer"
            >
              <span className="text-blue-500 hover:text-blue-700 text-[16px]">
                View All Activity
              </span>
              <MdChevronRight className="text-blue-500 hover:text-blue-700 text-[16px]" />
            </Link>
          </div>
        </Container>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-10 gap-4">
        <Container
          className="col-span-5"
          label="Task Status"
          dropDown={true}
          opt={{ label: "View all", url: "/tasks" }}
        >
          <table className="table rounded-[10px] shadow-sm overflow-hidden text-center">
            <thead className="bg-[#EEF2FF99] text-left">
              <tr>
                <th className="px-4 py-4">Task</th>
                <th className="px-4 py-4">Assign To</th>
                <th className="px-4 py-4">Due Date</th>
                <th className="px-4 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="text-left">
              {tasks.map((task, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-4">{task.task}</td>
                  <td className="px-4 py-4">{task.assignee}</td>
                  <td className="px-4 py-4">{task.due}</td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        statusColors[task.status]
                      }`}
                    >
                      {task.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>

        <Container
          className="col-span-5"
          label="Inventory Overview"
          dropDown={true}
        >
          <table className="table rounded-[10px] shadow-sm overflow-hidden text-center">
            <thead className="bg-[#EEF2FF99] text-left">
              <tr>
                <th className="px-4 py-4">Category</th>
                <th className="px-4 py-4">In Stock</th>
                <th className="px-4 py-4">Low Stock</th>
                <th className="px-4 py-4">Restocking</th>
              </tr>
            </thead>
            <tbody className="text-left">
              {inventoryData.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-4">{item.category}</td>
                  <td className="px-4 py-4">{item.inStock}</td>
                  <td className="px-4 py-4">{item.lowStock}</td>
                  <td className="px-4 py-4">{item.restocking}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-10 gap-4 items-stretch">
        <Container
          className="col-span-6 h-full"
          label="AI Insights"
          dropDown={true}
          opt={{ label: "View all", url: "/units" }}
        >
          <table className="w-full table-auto text-sm text-left rounded-[10px] shadow-sm overflow-hidden">
            <thead className="bg-[#EEF2FF99] text-black">
              <tr>
                <th className="px-4 py-3">Machine</th>
                <th className="px-4 py-3">Plat</th>
                <th className="px-4 py-3">AI Alert Type</th>
                <th className="px-4 py-3">Risk Level</th>
                <th className="px-4 py-3">Suggested Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => (
                <tr key={idx} className="border-t text-gray-700">
                  <td className="px-4 py-2">{item.machine}</td>
                  <td className="px-4 py-2">{item.plat}</td>
                  <td className="px-4 py-2">{item.alert}</td>
                  <td className="px-4 py-2">
                    <div
                      className={`flex gap-2 items-center px-2 py-1 border rounded font-medium grow-0 w-min ${
                        riskLevelStyle[item.risk]
                      }`}
                    >
                      <IoWarning className="text-white text-16" />
                      <span className="text-[16px]">{item.risk}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2">{item.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>

        <Container
          className="col-span-4 h-full"
          label="Alerts & Notifications"
          dropDown={true}
          opt={{ label: "View all", url: "/units" }}
        >
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`flex items-center justify-between px-4 py-4 border rounded-lg ${
                  alertStyles[alert.type]
                }`}
              >
                <span className="flex items-center gap-2 text-sm font-medium">
                  {alertIcons[alert.type]}
                  {alert.message}
                </span>
                <IoClose className="text-gray-500 cursor-pointer" />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
