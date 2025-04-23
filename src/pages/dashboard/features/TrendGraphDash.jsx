import React from "react";
import Container from "../../../components/common/Container";
import AreaCharts from "../../../components/charts/AreaCharts";

const TrendGraphDash = () => {
  return (
    <Container id="trendGraph" label="OEE Trend Graph" dropDown={true}>
      <AreaCharts name="OEE Trend Graph" />
    </Container>
  );
};

export default TrendGraphDash;
