import React from "react";
import ReactApexChart from "react-apexcharts";

const FinancialForecastChart = () => {
  const options = {
    chart: {
      type: "line",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    stroke: {
      curve: "smooth",
      width: [2, 2],
    },
    xaxis: {
      categories: ["Dec", "Jan", "Feb", "Mar", "Apr", "May"],
      title: { text: "" },
    },
    yaxis: {
      tickAmount: 5,
      labels: {
        formatter: (val) => `$${val / 1000}k`,
      },
    },
    colors: ["#00BFFF", "#6A5ACD"],
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    tooltip: {
      y: {
        formatter: (val) => `$${val.toLocaleString()}`,
      },
    },
    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 4,
    },
  };

  const series = [
    {
      name: "Forecasted Spend",
      data: [30000, 50000, 70000, 100000, 80000, 60000],
    },
    {
      name: "Forecasted Revenue",
      data: [20000, 40000, 90000, 110000, 75000, 65000],
    },
  ];

  return (
    <div className="mt-4">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={300}
      />
    </div>
  );
};

export default FinancialForecastChart;
