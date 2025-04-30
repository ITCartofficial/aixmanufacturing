import TitleBar from "@/components/common/TitleBar";
import Container from "../../../components/common/Container";
import Dropdown from "../../../components/common/Dropdown";
import LaborAnalyticsFilter from "./features/LaborAnalyticsFilter";
import LaborAnalyticsGrid from "./features/LaborAnalyticsGrid";

const LaborAnalytics = () => {
  return (
    <div className="flex flex-col gap-4">
      <TitleBar title="Labor Analytics" fillBtn="Export" />

      <LaborAnalyticsFilter />
      <LaborAnalyticsGrid />
    </div>
  );
};

export default LaborAnalytics;
