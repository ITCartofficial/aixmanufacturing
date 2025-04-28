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
    name: "Replace motor (BX-450)",
    assignedTo: "Raj (Engineer)",
    dueDate: "14 Apr, 2025",
    status: "In Progress",
  },
  {
    name: "Inspect Nozzies",
    assignedTo: "Sunil (Maintena)",
    dueDate: "14 Apr, 2025",
    status: "Pending",
  },
  {
    name: "Refill Coolant (CX-120)",
    assignedTo: "Alia (Engineer)",
    dueDate: "16 Apr, 2025",
    status: "Scheduled",
  },
  {
    name: "Refill Coolant (CX-128)",
    assignedTo: "Raj (Engineer)",
    dueDate: "14 Apr, 2025",
    status: "Completed",
  },
];

export const inventoryData = [
  { category: "Spare Parts", inStock: 89, lowStock: 9, restocking: 4 },
  { category: "Raw Material", inStock: 132, lowStock: 6, restocking: 3 },
  { category: "Tools", inStock: 37, lowStock: 1, restocking: 0 },
  { category: "Consumables", inStock: 58, lowStock: 2, restocking: 1 },
];

export const aiTable = [
  {
    machine: "CNC Lathe #3",
    plant: "Orion Plant",
    alertType: "Temp Strike",
    riskLevel: "High",
    suggestedAction: "Schedule Immediate Maintenance",
  },
  {
    machine: "Conveyor Motor #",
    plant: "Zephyr Works",
    alertType: "Overheating Detected",
    riskLevel: "High",
    suggestedAction: "Reduce Load & Inspect Fan System",
  },
  {
    machine: "Robotic Arm #2",
    plant: "Titan Foundry",
    alertType: "Predictive Part Failure",
    riskLevel: "Medium",
    suggestedAction: "Pre-order Replacement Part",
  },
  {
    machine: "Welding Machine #5",
    plant: "Nexa Hub",
    alertType: "Power Fluctuation Pattern",
    riskLevel: "Low",
    suggestedAction: "Monitor Continuously",
  },
];

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
