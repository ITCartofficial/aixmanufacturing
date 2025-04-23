import React from "react";
import MainLayout from "../components/MainLayout";
import PrimaryBtn from "../components/buttons/PrimaryBtn";
import { BiExport } from "react-icons/bi";
import MonoCard from "../components/cards/MonoCard";
import { FaInbox } from "react-icons/fa";
import SelectDropdown from "../components/common/SelectDropdown";
import Container from "../components/common/Container";
import AreaCharts from "../components/charts/AreaCharts";

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="hero_dash flex items-center justify-between w-100">
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
      </div>

      <Container
        id={"overviewDashboard"}
        label={"Overview"}
        dropDown={[
          { value: 7, label: "Last 7 Days" },
          { value: 30, label: "Last 30 Days" },
        ]}
      >
        <div className="card_body flex flex-wrap gap-4">
          <MonoCard
            count={6}
            icon={<FaInbox className="text-[20px] text-[#ffffff]" />}
            label="Total Plants"
          />
          <MonoCard
            count={6}
            icon={<FaInbox className="text-[20px] text-[#ffffff]" />}
            label="Total Plants"
          />
          <MonoCard
            count={6}
            icon={<FaInbox className="text-[20px] text-[#ffffff]" />}
            label="Total Plants"
          />
          <MonoCard
            count={6}
            icon={<FaInbox className="text-[20px] text-[#ffffff]" />}
            label="Total Plants"
          />
          <MonoCard
            count={6}
            icon={<FaInbox className="text-[20px] text-[#ffffff]" />}
            label="Total Plants"
          />
        </div>
      </Container>

      <Container
        id="trendGraph"
        label="OEE Trend Graph"
        dropDown={[
          { value: 7, label: "Last 7 Days" },
          { value: 30, label: "Last 30 Days" },
        ]}
      >
        <AreaCharts name="OEE Trend Graph" />
      </Container>
    </MainLayout>
  );
};

export default Dashboard;
