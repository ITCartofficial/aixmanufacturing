import DashboardIcon from "@/assets/icons/dashboard-icon.png";
import IndustryIcon from "@/assets/icons/industry.png";
import FinanceIcon from "@/assets/icons/finance.png";
import GearIcon from "@/assets/icons/gear.png";
import SettingsIcon from "@/assets/icons/settings.png";

import StatCard from "../../../components/common/StatCard";
import textCapitalize from "@/utils/textCapitalize";

const LaborStats = ({ matrics }) => {
  const stats = [
    { title: "Total Labor", value: matrics.totalLabor, icon: IndustryIcon },
    { title: "On Duty", value: matrics.onDuty, icon: SettingsIcon },
    {
      title: "Scheduled",
      value: matrics.scheduled,
      icon: GearIcon,
    },
    {
      title: "Average Productivity",
      value: matrics.avgProductivity + "%",
      icon: DashboardIcon,
      statusIndicator: { type: "arrow", color: "green" },
    },
    {
      title: "Attendance Rate",
      value: matrics.attendenceRate + "%",
      icon: FinanceIcon,
      statusIndicator: { type: "arrow", color: "red" },
    },
  ];

  return (
    <div className="grid gap-4 grid-cols-5">
      {stats.map((card, index) => {
        return (
          <StatCard
            key={index}
            title={textCapitalize(card.title)}
            value={card.value}
            icon={card.icon}
            statusIndicator={card.statusIndicator}
            valueClassName="text-[20px] font-bold"
          />
        );
      })}
    </div>
  );
};

export default LaborStats;
