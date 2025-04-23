import React from "react";
import MainLayout from "../components/MainLayout";
import PrimaryBtn from "../components/buttons/PrimaryBtn";
import { BiExport } from "react-icons/bi";
import MonoCard from "../components/cards/MonoCard";
import { FaInbox } from "react-icons/fa";
import SelectDropdown from "../components/common/SelectDropdown";
import Container from "../components/common/Container";
import AreaCharts from "../components/charts/AreaCharts";
import { FaArrowCircleDown } from "react-icons/fa";
import SemiPieChart from "../components/charts/SemiPieChart";

const Dashboard = () => {
  const units = [
    { unit: "Unit A", machine: 14, oee: 81.5, downtime: 48, activeTasks: 6 },
    { unit: "Unit B", machine: 12, oee: 87.2, downtime: 19, activeTasks: 2 },
    { unit: "Unit C", machine: 9, oee: 78.0, downtime: 68, activeTasks: 4 },
    { unit: "Unit D", machine: 8, oee: 80.0, downtime: 25, activeTasks: 3 },
    { unit: "Unit E", machine: 8, oee: 80.0, downtime: 25, activeTasks: 3 },
  ];

  return (
    <>
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

      <Container id={"overviewDashboard"} label={"Overview"} dropDown={true}>
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

      <Container id="trendGraph" label="OEE Trend Graph" dropDown={true}>
        <AreaCharts name="OEE Trend Graph" />
      </Container>

      <div className="gap-4 grid grid-cols xl:grid-cols-3 w-full">
        <Container
          className="col-span-2 min-h-[380px]"
          label="Unit -Wise OEE & Activity"
          dropDown={true}
        >
          <table className="table rounded-[10px] shadow-sm overflow-hidden text-center">
            <thead className="bg-[#EEF2FF99] text-left">
              <tr>
                <th className="px-4 py-4">Unit</th>
                <th className="px-4 py-4">Machines</th>
                <th className="px-4 py-4">OEE</th>
                <th className="px-4 py-4">Downtime</th>
                <th className="px-4 py-4">Active Tasks</th>
              </tr>
            </thead>
            <tbody className="text-left">
              {units.map((unit, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-0">{unit.unit}</td>
                  <td className="px-4 py-0">{unit.machine}</td>
                  <td className="px-4 py-0 flex items-center justify-start gap-2">
                    <div className="w-[50px] bg-[#C4EEC6] max-w-sm my-4 rounded-lg overflow-hidden border border-gray-300">
                      <div
                        className="bg-[#2C8D32] text-xs leading-none py-1"
                        style={{ width: `${unit.oee}%` }}
                      ></div>
                    </div>
                    <span className="text-sm">{unit.oee}%</span>
                  </td>
                  <td className="px-4 py-0">
                    <div className="flex items-center justify-start gap-2">
                      <FaArrowCircleDown className="text-[16px] text-[#F64C4C]" />
                      <span className="text-sm">{unit.downtime} hrs</span>
                    </div>
                  </td>
                  <td className="px-4 py-0">{unit.activeTasks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>

        <Container
          className="min-h-[380px]"
          label="Machine Summary"
          dropDown={true}
        >
          <SemiPieChart />
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
