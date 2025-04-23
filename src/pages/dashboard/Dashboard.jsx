import OverviewDash from "./features/OverviewDash";
import TrendGraphDash from "./features/TrendGraphDash";
import UnitWiseActivityDash from "./features/UnitWiseActivityDash";
import SummaryDash from "./features/SummaryDash";
import TaskStatusDash from "./features/TaskStatusDash";
import InventoryOverviewDash from "./features/InventoryOverviewDash";
import AiInsidesDash from "./features/AiInsidesDash";
import AlertNotiDash from "./features/AlertNotiDash";
import TitleBar from "../../components/common/TitleBar";

const Dashboard = () => {
  return (
    <>
      {/* <div className="hero_dash flex items-center justify-between w-100">
        <div className="hero_dash_texts">
          <h1 className="text-[32px] font-semibold">Hello John,</h1>
          <p className="text-[14px] text-[#000000] font-normal">
            Welcome to AiXManufacturing
          </p>
        </div>
        <div className="hero_dash_img">
          <PrimaryBtn
            label="Export"
            icon={<BiExport className="text-[20px]" />}
          />
        </div>
      </div> */}

      <TitleBar title={"Hello John,"} Desc="Welcome to AiXManufacturing" fillBtn={"Export"} />

      <OverviewDash />
      <TrendGraphDash />

      <div className="gap-4 grid grid-cols xl:grid-cols-10 w-full">
        <UnitWiseActivityDash />
        <SummaryDash />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-10 gap-4">
        <TaskStatusDash />
        <InventoryOverviewDash />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-10 gap-4 items-stretch">
        <AiInsidesDash />
        <AlertNotiDash />
      </div>
    </>
  );
};

export default Dashboard;
