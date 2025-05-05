import IndustryIcon from "@/assets/icons/industry.png";
import GearIcon from "@/assets/icons/gear.png";
import SettingsIcon from "@/assets/icons/settings.png";

export const laborStats = {
  totalLabor: 312,
  onDuty: 225,
  scheduled: 43,
  avgProductivity: 84,
  attendenceRate: 91,
};

export const laborChartByDept = {
  chartSeries: [2450, 1215, 782],
  chartLabels: ["Production", "Maintenance", "Quality"],
  chartColors: ["#4887F6", "#E2635E", "#F1CD49"],
};
export const laborChartByRole = {
  chartSeries: [2300, 1049, 1050],
  chartLabels: ["Technician", "Inspector", "Supervisor"],
  chartColors: ["#14B8A6", "#6366F1", "#F59E0B"],
};

export const laborStatCards = [
  { title: "Direct Hours", value: "3,465 hrs", icon: IndustryIcon },
  { title: "Indirect Hours", value: "982 hrs", icon: SettingsIcon },
  { title: "Completed Quality Metric", value: "94.2%", icon: GearIcon, statusIndicator: { type: "arrow", color: "green" } },
];
