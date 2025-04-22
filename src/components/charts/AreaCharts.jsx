import React from "react";
import ReactApexChart from "react-apexcharts";
import { areaChartsData } from "../../lib/AreaChartsData";

const AreaCharts = ({ name }) => {
  const state = {
    series: [
      {
        name: name,
        data: areaChartsData.monthDataSeries1.sales,
      },
    ],
    options: {
      chart: {
        toolbar: {
          tools: {
            download: false,
          },
        },
        type: "area",
        height: 300,
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      labels: areaChartsData.monthDataSeries1.dates,
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        opposite: true,
      },
      legend: {
        horizontalAlign: "left",
      },
    },
  };

  return (
    <div id="areaCharts">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={300}
      />
    </div>
  );
};

export default AreaCharts;
