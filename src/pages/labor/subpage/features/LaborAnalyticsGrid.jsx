import React from "react";
import Container from "../../../../components/common/Container";
import LaborDonutChart from "./LaborDonutChart";

const LaborAnalyticsGrid = () => {
  return (
    <div className="grid grid-cols-10 gap-4 items-stretch">
      <div className="flex col-span-3 flex-col gap-3">
        <Container>
            <LaborDonutChart />
        </Container>
        <Container></Container>
      </div>
      <div className="flex flex-col col-span-7 gap-4">
        <Container></Container>
        <Container></Container>
        <Container></Container>
      </div>
    </div>
  );
};

export default LaborAnalyticsGrid;
