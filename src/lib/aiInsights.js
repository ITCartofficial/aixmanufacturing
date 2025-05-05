import IndustryIcon from "../assets/icons/industry.png";
import GearIcon from "../assets/icons/gear.png";
import SettingsPurple from "../assets/icons/settings-purple.png";
import SettingsGreen from "../assets/icons/settings-green.png";
import AlertIcon from "../assets/icons/alert.png";

export const aiStats = [
  {title: "AI Alerts", 
    value: "126", 
    percentageChange: 12, 
    icon: IndustryIcon,
    statusIndicator: {type: "arrow", color: "red"},
  },
  {title: "Predictive Alerts", 
    value: "34", 
    percentageChange: -5, 
    icon: SettingsPurple,
    statusIndicator: {type: "arrow", color: "green"},
  },
  {
    title: "Finance Risk Alerts",
    value: "12",
    percentageChange: 8,
    icon: GearIcon,
    statusIndicator: {type: "arrow", color: "red"},
  },
  {
    title: "Plant Health Status",
    value: "92%",
    icon: AlertIcon,
    statusIndicator: {type: "dot", color: "green"},
  },
  {
    title: "Machine Health Status",
    value: "88%",
    icon: SettingsGreen,
    statusIndicator: {type: "dot", color: "green"},
  },
];


export const plantInsightData = [
  {
      plantName: "Titan Foundry",
      alertType: "Power Surge",
      riskLevel: "High",
      insight: "Unusual energy spike during peak operations",
      suggestedAction: "Optimize shift scheduling"
    },
    {
      plantName: "Nova Steel Works",
      alertType: "HVAC Fluctuation",
      riskLevel: "Medium",
      insight: "Irregular zone temperature detected",
      suggestedAction: "Inspect insulation, recalibrate sensors"
    },
    {
      plantName: "Orion Precision",
      alertType: "Inventory Imbalance",
      riskLevel: "Medium",
      insight: "Overstocked items in raw materials",
      suggestedAction: "Reevaluate reorder levels"
    },
    {
      plantName: "Stellar Cast Tech",
      alertType: "Shift Inefficiency",
      riskLevel: "Low",
      insight: "Idle manpower in second shift",
      suggestedAction: "Redistribute tasks based on load"
    },
    {
      plantName: "Falcon Forge",
      alertType: "Safety Protocol Gaps",
      riskLevel: "High",
      insight: "Repeated manual overrides on equipment alarms",
      suggestedAction: "Conduct safety training and audits"
    }
];

export const machineInsightsData = [
  {
    machineName: "CNC Lathe Alpha",
    alertType: "Vibration Spike",
    riskLevel: "High",
    insight: "Repeated high vibration levels",
    suggestedAction: "Schedule predictive maintenance"
  },
  {
    machineName: "Robotic Arm Delta",
    alertType: "Idle Time",
    riskLevel: "Medium",
    insight: "Low runtime during daytime shifts",
    suggestedAction: "Balance workload across shifts"
  },
  {
    machineName: "Hydraulic Press Z",
    alertType: "Temperature Rise",
    riskLevel: "High",
    insight: "Overheating trend detected",
    suggestedAction: "Inspect cooling system"
  },
  {
    machineName: "Laser Cutter Pro",
    alertType: "Wear Detection",
    riskLevel: "Medium",
    insight: "Tooling wear approaching limit",
    suggestedAction: "Pre-emptive tool replacement"
  },
  {
    machineName: "Assembly Bot AX-5",
    alertType: "Anomaly in Movement",
    riskLevel: "High",
    insight: "Irregular path deviation from programmed task",
    suggestedAction: "Perform recalibration and inspection"
  }
];


export const financeInsightsData = [
  {
    category: "Raw Material Spend",
    alertType: "Cost Overrun",
    riskLevel: "High",
    insight: "Vendor A price surge of 12%",
    suggestedAction: "Source alternative vendors"
  },
  {
    category: "Overtime Costs",
    alertType: "Budget Deviation",
    riskLevel: "Medium",
    insight: "Higher weekend overtime spend",
    suggestedAction: "Restructure weekend staffing"
  },
  {
    category: "Utility Expenses",
    alertType: "Monthly Spike",
    riskLevel: "High",
    insight: "Power usage exceeded forecast by 18%",
    suggestedAction: "Optimize energy usage"
  },
  {
    category: "Maintenance Budget",
    alertType: "Underutilization",
    riskLevel: "Low",
    insight: "Low spend vs allocation",
    suggestedAction: "Redistribute funds for upgrades"
  },
  {
    category: "Equipment ROI",
    alertType: "Low Efficiency Alert",
    riskLevel: "High",
    insight: "ROI dropping on two machines",
    suggestedAction: "Review asset utilization"
  }
];



export const predictiveMaintenanceData = [
  {
    machineName: "CNC Lathe Alpha",
    component: "Spindle Bearings",
    condition: "Medium Wear",
    estimatedReplacement: "18 days"
  },
  {
    machineName: "Milling Machine Omega",
    component: "Coolant System",
    condition: "Good",
    estimatedReplacement: "32 days"
  },
  {
    machineName: "CNC Lathe Beta",
    component: "Tool Head",
    condition: "High Wear",
    estimatedReplacement: "7 days"
  },
  {
    machineName: "Conveyor System Delta",
    component: "Conveyor Belt Motor",
    condition: "Medium Wear",
    estimatedReplacement: "15 days"
  },
  {
    machineName: "Hydraulic Press Gamma",
    component: "Hydraulic Pump",
    condition: "Low Wear",
    estimatedReplacement: "45 days"
  }
];