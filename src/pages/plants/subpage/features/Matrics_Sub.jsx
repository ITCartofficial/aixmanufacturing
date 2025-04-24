import DashboardIcon from "../../../../assets/icons/dashboard-icon.png";
import IndustryIcon from "../../../../assets/icons/industry.png";
import FinanceIcon from "../../../../assets/icons/finance.png";
import GearIcon from "../../../../assets/icons/gear.png";
import SettingsIcon from "../../../../assets/icons/settings.png";
import { textCapitalize } from "../../../../utils/textCapitalize";
import StatCard from "../../../../components/common/StatCard";

const Matrics_Sub = () => {
  const stats = [
    { title: "machines", value: "40", icon: IndustryIcon },
    {
      title: "labour",
      value: "32",
      icon: GearIcon,
      statusIndicator: { type: "dot", color: "orange" },
    },
    {
      title: "OEE",
      value: "89.3%",
      icon: DashboardIcon,
      statusIndicator: { type: "arrow", color: "green" },
    },
    {
      title: "Budget Deviation",
      value: "- $12,400",
      icon: FinanceIcon,
      statusIndicator: { type: "arrow", color: "red" },
    },
    { title: "Operational Status", value: "Operational ", icon: SettingsIcon },
  ];

  return (
    <div className="grid col-span-4 rounded-md h-full grid-cols-2 gap-4">
      {stats.map((card, index) => {
        return (
          <StatCard
            key={index}
            title={textCapitalize(card.title)}
            value={
              card.title == "oee"
                ? card.value + "%"
                : card.value && card.title == "budget_Deviation"
                ? "$" + card.value
                : card.value
            }
            icon={card.icon}
            statusIndicator={card.statusIndicator}
            className={index === 4 ? "col-span-2" : ""}
          />
        );
      })}
    </div>
  );
};

export default Matrics_Sub;
