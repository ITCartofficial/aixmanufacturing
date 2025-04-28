import DashboardIcon from "@/assets/icons/dashboard-icon.png";
import IndustryIcon from "@/assets/icons/industry.png";
import FinanceIcon from "@/assets/icons/finance.png";
import GearIcon from "@/assets/icons/gear.png";
import SettingsIcon from "@/assets/icons/settings.png";
import StatCard from "@/components/common/StatCard";
import formatCurrency from "@/utils/formatCurrency";

const Matrics_Sub = ({ matrics }) => {
  const cards = [
    {
      title: "machines",
      value: matrics.machines,
      icon: IndustryIcon,
    },
    {
      title: "labour",
      value: matrics.labour,
      icon: GearIcon,
    },
    {
      title: "OEE",
      value: matrics.oee + "%",
      icon: DashboardIcon,
      statusIndicator: { type: "arrow", color: "green" },
    },
    {
      title: "Budget Deviation",
      value: matrics.trend == "positive" ? '+ ' + formatCurrency(matrics.budgetDeviation)  : '- ' + formatCurrency(matrics.budgetDeviation),
      icon: FinanceIcon,
      statusIndicator: { type: "arrow", color: "red" },
    },
    {
      title: "Operational Status",
      value: matrics.operationalStatus,
      icon: SettingsIcon,
      statusIndicator: { type: "dot", color: matrics.operationalStatus == "Operational" ? "green" : "orange" }
    },
  ];

  return (
    <div className="grid col-span-4 rounded-md h-full grid-cols-2 gap-4 text-[10px]">
      {cards.map((card, index) => {
        return (
          <StatCard
            key={index}
            title={card.title}
            value={card.value}
            icon={card.icon}
            statusIndicator={card.statusIndicator}
            className={index === 4 ? "col-span-2" : ""}
            valueText="text-[20px] font-bold"
          />
        );
      })}
    </div>
  );
};

export default Matrics_Sub;
