import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ExpenseDistributionChart = () => {
  const [range, setRange] = useState("Last 30 Days");

  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "60%",
        borderRadius: 0,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `$${(val / 1000000).toFixed(1)}M`,
      style: {
        fontSize: "12px",
        colors: ["#ddd"],
      },
      offsetX: 10,
    },
    xaxis: {
      categories: [
        "Logistics/Shipping",
        "Utilities",
        "Labor Costs",
        "Maintenance",
        "Raw Materials",
      ],
      labels: {
        formatter: (val) => `$${val / 1000000}M`,
        style: { fontSize: "12px", colors: "#6B7280" },
      },
    },
    yaxis: {
      labels: { style: { fontSize: "12px", colors: "#6B7280" } },
    },
    colors: ["#6366F1"], // Indigo-500
    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 4,
    },
    tooltip: {
      y: {
        formatter: (val) => `$${val.toLocaleString()}`,
      },
    },
  };

  const series = [
    {
      name: "Expense",
      data: [500000, 400000, 2200000, 800000, 1300000],
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[20px] font-bold">Expense Distribution by Category</h2>
        <select
          className="border border-gray-300 rounded-md px-3 py-1 text-sm"
          value={range}
          onChange={(e) => setRange(e.target.value)}
        >
          <option>Last 30 Days</option>
          <option>Last 90 Days</option>
          <option>This Year</option>
        </select>
      </div>
      <ReactApexChart options={options} series={series} type="bar" height={250} />
    </div>
  );
};

export default ExpenseDistributionChart;
