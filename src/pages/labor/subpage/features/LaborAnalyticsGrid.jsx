import React from "react";
import Container from "../../../../components/common/Container";
import LaborDonutChart from "./LaborDonutChart";
import {
  laborChartByDept,
  laborChartByRole,
  laborStatCards,
} from "../../../../lib/laborData";
import StatCard from "@/components/common/StatCard.jsx";
import LabourHoursChart from "./LaborHourChart";
import LaborBarChart from "./LaborBarChart";
import LaborAreaChart from "./LaborAreaChart";

const LaborAnalyticsGrid = () => {
  return (
    <>
      <div className="grid grid-cols-10 gap-4 items-stretch">
        <div className="flex col-span-3 flex-col gap-3">
          <Container>
            <LaborDonutChart
              title="Labor Hours by Department"
              chartData={laborChartByDept}
            />
          </Container>
          <Container>
            <LaborDonutChart
              title="Labour Hours by Role"
              chartData={laborChartByRole}
            />
          </Container>
        </div>
        <div className="flex flex-col col-span-7 gap-4">
          <div className="w-full flex gap-6 h-full">
            {laborStatCards.map((card, i) => (
              <StatCard
                key={i}
                title={card.title}
                value={card.value}
                icon={card.icon}
                valueClassName="text-3xl font-bold text-black"
                titleClassName="text-base font-semibold"
                className="flex-1"
                statusIndicator={card.statusIndicator}
              />
            ))}
          </div>
          <div className="w-full">
            <LabourHoursChart />
          </div>
          <div className="w-full">
            <LaborBarChart />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-10">
        <LaborAreaChart />
      </div>
    </>
  );
};

export default LaborAnalyticsGrid;
