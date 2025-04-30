import React from "react";
import {useParams} from "react-router";
import TitleBar from "../../../components/common/TitleBar";
import StatCard from "../../../components/common/StatCard";
import {allMachines} from "../../../lib/machinesData";
import {slugToTitle} from "../../../utils/slugToTitle";
import GreenSettings from "../../../assets/icons/settings-green.png";
import DownTime from "../../../assets/icons/down-time.svg";
import ScheduleCalendar from "../../../assets/icons/schedule-calendar.svg";
import Calendar from "../../../assets/icons/calendar.svg";
import GraphIcon from "../../../assets/icons/graph.svg";
import Dropdown from "../../../components/common/Dropdown";
import SimpleAreaChart from "./features/SimpleAreaChart";
import ConditionTable from "./features/ConditionTable";
import {FiTrash2} from "react-icons/fi";
import {MdModeEdit} from "react-icons/md";
import machineBg from "../../../assets/Digital-Twin-Background.png";
import machineImage from "../../../assets/MachineSnapshot.png";
import MachineStatus from "./features/MachineStatus";
import AiInsidesDash from "../../dashboard/features/AiInsidesDash";
import {machineMaintenanceTable} from "../../../lib/machinesData";
import Container from "../../../components/common/Container";
import MaintenanceTable from "./features/MaintenanceTable";

const labelMap = {
  id: "Machine ID",
  name: "Machine Name",
  status: "Status",
  plant: "Plant Name",
  utilization: "Utilization Rate",
  lastMaintenance: "Last Maintenance",
  scheduledMaintenance: "Scheduled Maintenance",
  outputEfficiency: "Output Efficiency",
  downtime: "Downtime",
  digitalTwin: "Digital Twin",
  issueFlag: "Issue",
};

const MachineDetails = ({selectedFilter, onFilterChange}) => {
  const {machineId, slug} = useParams();
  const title = slug ? slugToTitle(slug) : "Unknown";

  const machine = allMachines.find((m) => m.id === machineId);
  if (!machine) return <div>Machine not found</div>;

  const options = [
    "Last 7 days",
    "Last Month",
    "Last 3 months",
    "Last 6 months",
  ];

  return (
    <div className="flex flex-col gap-6">
      <TitleBar
        title={title}
        id={machineId}
        outlineBtn="+ Add New"
        fillBtn="Export"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="col-span-1 lg:col-span-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Card 1: Utilization Rate */}
            <StatCard
              title="Utilization Rate"
              value={`${machine.utilization}%`}
              icon={GreenSettings}
              statusIndicator={{type: "arrow", color: "green"}}
              valueClassName="text-[22px] font-bold text-black"
              titleClassName="text-sm font-semibold"
            />
            {/* Card 2: Downtime */}
            <StatCard
              title="Downtime"
              value={machine.downtime}
              icon={DownTime}
              statusIndicator={{type: "arrow", color: "red"}}
              valueClassName="text-[22px] font-bold text-black"
              titleClassName="text-sm font-semibold"
            />
            {/* Card 3: Last Maintenance */}
            <StatCard
              title="Last Maintenance"
              value={machine.lastMaintenance}
              icon={Calendar}
              statusIndicator={undefined}
              valueClassName="text-[22px] font-bold text-black"
              titleClassName="text-sm font-semibold"
            />
            {/* Card 4: Scheduled Maintenance */}
            <StatCard
              title="Scheduled Maintenance"
              value={machine.scheduledMaintenance}
              icon={ScheduleCalendar}
              statusIndicator={undefined}
              valueClassName="text-[22px] font-bold text-black"
              titleClassName="text-sm font-semibold"
            />
            {/* Card 5: Output Efficiency (Full width) */}
            <div className="col-span-1 sm:col-span-2">
              <StatCard
                title="Output Efficiency"
                value={`${machine.outputEfficiency}%`}
                icon={GraphIcon}
                statusIndicator={{type: "arrow", color: "green"}}
                valueClassName="text-[22px] font-bold text-black"
                titleClassName="text-sm font-semibold"
              />
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-8 bg-white border rounded-[10px] p-6">
          <div className="flex justify-between">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Machine Overview
            </h2>
            <div className="flex gap-2">
              <MdModeEdit className="h-5 w-5 text-black cursor-pointer" />
              <FiTrash2 className="h-5 w-5 text-red-500 cursor-pointer" />
            </div>
          </div>
          <div
            className="flex items-center pt-6 w-full h-[420px] relative overflow-hidden rounded-md bg-cover"
            style={{backgroundImage: `url(${machineBg})`}}>
            <img
              src={machineImage}
              alt="Machine"
              className="absolute h-56 left-8 top-1/2 translate-y-[-50%]"
            />
            <div className="absolute right-8 top-1/2 translate-y-[-50%]">
              <MachineStatus />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="col-span-1 lg:col-span-4 w-full px-4 p-6 sm:px-6 bg-white border rounded-[10px]">
          <div className="flex justify-between mb-2">
            <h2 className="text-[20px] text-black font-bold">OEE Graph</h2>
            <Dropdown
              options={options}
              selectedOption={selectedFilter}
              onSelect={onFilterChange}
              buttonText="Filter"
            />
          </div>
          <SimpleAreaChart />
        </div>
        <div className="col-span-1 lg:col-span-8 p-6 border rounded-[10px] bg-white">
          <h2 className="text-[20px] text-black font-bold">
            AI & Predictive Maintenance
          </h2>
          <div className="grid grid-cols-7 gap-6">
            <div className="col-span-4">
              <ConditionTable />
            </div>
            <div className="col-span-3 border border-primary rounded-[10px] px-5 py-6">
              <h3 className="text-base font-bold pb-3">AI Suggestions</h3>
              <div>
                <li className="text-sm font-medium py-[6px]">
                  Reduce idle RPM to lower energy waste by 6%
                </li>
                <li className="text-sm font-medium py-[6px]">
                  Schedule spindle alignment in next maintenance cycle.
                </li>
                <li className="text-sm font-medium py-[6px]">
                  Auto-schedule tool change in 6 days to avoid breakdown.
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-4">
        <div className="grid col-span-5">
          <AiInsidesDash
            tableData={machineMaintenanceTable}
            isPlant={false}
            isMachine={false}
          />
        </div>
        <div className="grid col-span-5">
          <Container
            className="col-span-6 h-full"
            label="Maintenance"
            dropDown={true}
            opt={{label: "View all", url: "/units"}}>
            <MaintenanceTable />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default MachineDetails;
