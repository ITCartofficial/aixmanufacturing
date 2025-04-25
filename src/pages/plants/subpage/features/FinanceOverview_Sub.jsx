import React from "react";
import ReactApexChart from "react-apexcharts";
import SelectDropdown from "../../../../components/common/SelectDropdown";

const FinanceOverview_Sub = ({ data }) => {
  const chartOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%",
        borderRadius: 2,
      },
    },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 2, colors: ["transparent"] },
    xaxis: {
      categories: data.overview.map((item) => item.date),
      labels: { style: { colors: "#6B7280", fontSize: "12px" } }, // gray-500
    },
    yaxis: {
      labels: {
        formatter: (value) => `$${value / 1000}k`,
        style: { colors: "#6B7280", fontSize: "12px" },
      },
    },
    fill: {
      opacity: 1,
      colors: ["#E8E8E8", "#4439C9"], // Spend (gray), Profit (blue)
    },
    legend: { show: false },
    tooltip: {
      y: {
        formatter: (val) => `$${val}`,
      },
    },
  };

  const chartSeries = [
    {
      name: "Spend",
      data: data.overview.map((item) => item.spend),
    },
    {
      name: "Profit",
      data: data.overview.map((item) => item.profit),
    },
  ];
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-4xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Financial Overview
        </h2>
        <div className="flex items-center gap-4">
          {/* Legends */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-4 h-2 bg-gray-300 inline-block rounded-sm"></span>{" "}
            Spend
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="w-4 h-2 bg-indigo-600 inline-block rounded-sm"></span>{" "}
            Profit
          </div>
          {/* Dropdown */}
          {/* <div className="text-sm text-gray-700 border rounded-md px-3 py-1 cursor-pointer">
            Last 7 days ▼
          </div> */}
          <SelectDropdown />
        </div>
      </div>

      {/* Chart */}
      <div className="h-64">
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height="100%"
        />
      </div>
    </div>
  );
};

export default FinanceOverview_Sub;
