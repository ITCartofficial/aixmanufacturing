import TitleBar from "@/components/common/TitleBar";
import LaborAnalyticsGrid from "./features/LaborAnalyticsGrid";
import FilterOverview from "../../finance/features/FilterOverview";

const LaborAnalytics = () => {
  const plantOptions = [
    "All",
    "Orion Precision Works",
    "Titan Foundry",
    "Nova Steel Works",
    "Stellar CastTech",
  ];
  const departmentOptions = ["All", "On Duty", "Leave", "Scheduled", "Out"];
  const roleOptions = [
    "All",
    "Operator",
    "Technician",
    "Supervisor",
    "Inspector",
  ];
  const shiftOptions = ["All", "Morning", "Evening", "Night"];

  const filter = {
    plantOptions,
    departmentOptions,
    roleOptions,
    shiftOptions,
  };

  return (
    <div className="flex flex-col gap-4">
      <TitleBar title="Labor Analytics" fillBtn="Export" />

      <FilterOverview filter={filter} />
      <LaborAnalyticsGrid />
    </div>
  );
};

export default LaborAnalytics;
