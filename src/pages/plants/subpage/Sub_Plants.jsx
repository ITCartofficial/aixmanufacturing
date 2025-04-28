import { useParams } from "react-router";
import TitleBar from "@/components/common/TitleBar";
import { slugToTitle } from "@/utils/slugToTitle";
import Container from "@/components/common/Container";

import Matrics_Sub from "./features/Matrics_Sub";
import DigitalTwinView_Sub from "./features/DigitalTwinView_Sub";
import MachineSnapshot_Sub from "./features/MachineSnapshot_Sub";
import FinanceOverview_Sub from "./features/FinanceOverview_Sub";
import LabourTable_Sub from "./features/LabourTable_Sub";
import TaskStatusDash from "../../dashboard/features/TaskStatusDash";
import AiInsidesDash from "../../dashboard/features/AiInsidesDash";
import ProfitLossTable_Sub from "./features/ProfitLossTable_Sub";

import plantsDB from "@/lib/plantsDB.json";

const currentDB = plantsDB[0];

// console.log(plantsDB);

const Sub_Plants = () => {
  const { plantId, slug } = useParams();
  const title = slug ? slugToTitle(slug) : "Unknown";

  return (
    <div>
      <TitleBar
        title={title}
        id={plantId}
        outlineBtn="Add New"
        fillBtn="Export"
      />

      <div className="grid lg:grid-cols-10 gap-4 mt-4 items-stretch min-h-[300px]">
        <Matrics_Sub matrics={currentDB.matrics} />
        <DigitalTwinView_Sub data={currentDB.digitalTwinView} />
      </div>

      <div className="grid lg:grid-cols-10 gap-4 mt-4 items-stretch">
        <div className="col-span-5">
          <MachineSnapshot_Sub machines={currentDB.machineSnapshot.data} />
        </div>
        <div className="col-span-5">
          <FinanceOverview_Sub data={currentDB.financialOverview} />
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
            <LabourTable_Sub data={currentDB.labourOverview.data} />
          </Container>
        </div>
        <div className="col-span-5">
          <TaskStatusDash tableData={currentDB.taskStatus.data} />
        </div>
      </div>

      <div className="grid lg:grid-cols-10 gap-4 mt-4 items-stretch">
        <div className="col-span-6">
          <AiInsidesDash
            tableData={currentDB.aiInsights.data}
            isPlant={false}
          />
        </div>
        <div className="col-span-4">
          <Container
            label="Finance"
            dropDown={true}
            opt={{ label: "View all", url: "/units" }}
            className="h-full"
          >
            <ProfitLossTable_Sub
              tableData={currentDB.financialOverview.profitLossData}
            />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Sub_Plants;
