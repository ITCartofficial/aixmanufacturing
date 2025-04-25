import { useParams } from "react-router";
import TitleBar from "../../../components/common/TitleBar";
import { slugToTitle } from "../../../utils/slugToTitle";
import MachineSnapshotImage from "../../../assets/MachineSnapshot.png";
import Container from "../../../components/common/Container";

import Matrics_Sub from "./features/Matrics_Sub";
import DigitalTwinView_Sub from "./features/DigitalTwinView_Sub";
import MachineSnapshot_Sub from "./features/MachineSnapshot_Sub";
import FinanceOverview_Sub from "./features/FinanceOverview_Sub";
import LabourTable_Sub from "./features/LabourTable_Sub";
import TaskStatusDash from "../../dashboard/features/TaskStatusDash";
import AiInsidesDash from "../../dashboard/features/AiInsidesDash";
import ProfitLossTable_Sub from "./features/ProfitLossTable_Sub";

const Sub_Plants = () => {
  const { plantId, slug } = useParams();
  const title = slug ? slugToTitle(slug) : "Unknown";

  const handlePrev = () => {
    /* load previous machine */
  };
  const handleNext = () => {
    /* load next machine */
  };
  const handleView = () => {
    /* navigate to detail */
  };

  return (
    <div>
      <TitleBar
        title={title}
        id={plantId}
        outlineBtn="Add New"
        fillBtn="Export"
      />

      <div className="grid lg:grid-cols-10 gap-4 mt-4 items-stretch min-h-[300px]">
        <Matrics_Sub />
        <DigitalTwinView_Sub />
      </div>

      <div className="grid lg:grid-cols-10 gap-4 mt-4 items-stretch">
        <div className="col-span-5">
          <MachineSnapshot_Sub
            imageUrl={MachineSnapshotImage}
            id="M-101"
            name="CNC Milling 3000"
            status="Operational"
            utilization={91.2}
            temp="89°C"
            vibration="High"
            lastMaintenance="03-20-2025"
            onPrev={handlePrev}
            onNext={handleNext}
            onView={handleView}
          />
        </div>
        <div className="col-span-5">
          <FinanceOverview_Sub />
        </div>
      </div>

      <div className="grid lg:grid-cols-10 gap-4 mt-4 items-stretch">
        <div className="col-span-5">
          <Container
            label="Labour"
            dropDown={true}
            opt={{ label: "View all", url: "/units" }}
            className="h-full"
          >
            <LabourTable_Sub />
          </Container>
        </div>
        <div className="col-span-5">
          <TaskStatusDash />
        </div>
      </div>

      <div className="grid lg:grid-cols-10 gap-4 mt-4 items-stretch">
        <div className="col-span-6">
          <AiInsidesDash />
        </div>
        <div className="col-span-4">
          <Container
            label="Finance"
            dropDown={true}
            opt={{ label: "View all", url: "/units" }}
            className="h-full"
          >
            <ProfitLossTable_Sub />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Sub_Plants;
