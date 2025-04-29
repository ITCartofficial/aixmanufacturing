import TitleBar from "../../components/common/TitleBar";
// import PlantsTable from "../plants/features/PlantsTable";
import LaborStats from "./features/LaborStats";
import { laborStats } from "../../lib/laborData";
import Container from "../../components/common/Container";
import PlantsTable from "../plants/features/PlantsTable";

const Labor = () => {
  return (
    <div className="flex flex-col gap-6">
      <TitleBar title="Labor" outlineBtn="+ Add New" fillBtn="Export" />
      <Container id="overviewDashboard" label={"Overview"} dropDown={true}>
        <LaborStats matrics={laborStats} />
      </Container>
      <PlantsTable />
    </div>
  );
};

export default Labor;
