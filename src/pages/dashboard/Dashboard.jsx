import OverviewDash from "./features/OverviewDash";
import TrendGraphDash from "./features/TrendGraphDash";
import UnitWiseActivityDash from "./features/UnitWiseActivityDash";
import SummaryDash from "./features/SummaryDash";
import TaskStatusDash from "./features/TaskStatusDash";
import InventoryOverviewDash from "./features/InventoryOverviewDash";
import AiInsidesDash from "./features/AiInsidesDash";
import AlertNotiDash from "./features/AlertNotiDash";
import TitleBar from "../../components/common/TitleBar";
import { aiTable, tasks } from "../../lib/DashboardData";

const Dashboard = () => {
  return (
    <>
      <TitleBar title={"Hello Admin,"} Desc="Welcome to AiXManufacturing" fillBtn={"Export"} />

      <OverviewDash />
      <TrendGraphDash />

      <div className="gap-4 grid grid-cols xl:grid-cols-10 w-full">
        <UnitWiseActivityDash />
        <SummaryDash />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-10 gap-4">
        <TaskStatusDash tableData={tasks} />
        <InventoryOverviewDash />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-10 gap-4 items-stretch">
        <AiInsidesDash tableData={aiTable} row={3} />
        <AlertNotiDash />
      </div>
    </>
  );
};

export default Dashboard;
