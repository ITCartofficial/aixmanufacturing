import DashboardIcon from "../assets/icons/dashboard-icon.png";
import IndustryIcon from "../assets/icons/industry.png";
import FinanceIcon from "../assets/icons/finance.png";
import GearIcon from "../assets/icons/gear.png";
import SettingsIcon from "../assets/icons/settings.png";


export const stats = [
  { title: "Total plants", value: "6", icon: IndustryIcon },
  { title: "Total Machines", value: "74", icon: SettingsIcon },
  { title: "Overall OEE", value: "79.3", icon: GearIcon },
  { title: "Total Labour", value: "198", icon: DashboardIcon },
  { title: "Operating Cost", value: "+ $142,000", icon: FinanceIcon },
];

export const units = [
  { unit: "Unit A", machine: 14, oee: 81.5, downtime: 48, activeTasks: 6 },
  { unit: "Unit B", machine: 12, oee: 87.2, downtime: 19, activeTasks: 2 },
  { unit: "Unit C", machine: 9, oee: 78.0, downtime: 68, activeTasks: 4 },
  { unit: "Unit D", machine: 8, oee: 80.0, downtime: 25, activeTasks: 3 },
  { unit: "Unit E", machine: 8, oee: 80.0, downtime: 25, activeTasks: 3 },
];

export const tasks = [
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

export const statusColors = {
  "In Progress": "bg-[#E1F3FD] text-[#0987C0] border border-[#0987C0]",
  Pending: "bg-[#F2E7D3] text-[#AC5F34] border border-[#AC5F34]",
  Scheduled: "bg-[#F9EAF5] text-[#C43E8A] border border-[#C43E8A]",
  Completed: "bg-[#DBFDEC] text-[#10A95C] border border-[#10A95C]",
};

export const inventoryData = [
  { category: "Spare Parts", inStock: 89, lowStock: 9, restocking: 4 },
  { category: "Raw Material", inStock: 132, lowStock: 6, restocking: 3 },
  { category: "Tools", inStock: 37, lowStock: 1, restocking: 0 },
  { category: "Consumables", inStock: 58, lowStock: 2, restocking: 1 },
];

export const data = [
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

export const riskLevelStyle = {
  High: "bg-[#F64C4C] text-white",
  Medium: "bg-[#FFAD0D] text-white",
  Low: "bg-[#47B881] text-white",
};

export const alertStyles = {
  danger: "border-[#F64C4C] bg-red-50 text-red-700",
  warning: "border-[#FFAD0D] bg-yellow-50 text-yellow-700",
  success: "border-[#47B881] bg-green-50 text-green-700",
};

export const alerts = [
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
