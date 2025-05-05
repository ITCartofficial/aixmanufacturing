import React, { useState } from "react";
import Chart from "react-apexcharts";

const LabourHoursChart = () => {
  const [selectedRange, setSelectedRange] = useState("Last 30 Days");

  const chartOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 4,
        barHeight: "60%",
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: 10,
      style: {
        fontSize: "12px",
        colors: ["#ddd"],
      },
      formatter: (val) => `${val} hrs`,
    },
    xaxis: {
      categories: [
        "April 10–15",
        "April 5–10",
        "April 1–5",
        "March 25–31",
        "March 20–25",
        "March 15–20",
      ],
      labels: {
        formatter: (val) => `${val} hrs`,
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "13px",
        },
      },
    },
    colors: ["#5D60EF"], // Indigo-500
    grid: {
      borderColor: "#E5E7EB",
      strokeDashArray: 4,
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (val) => `${val} hrs`,
      },
    },
  };

  const chartSeries = [
    {
      name: "Labour Hours",
      data: [3100, 2700, 2450, 2150, 1950, 2180],
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[20px] font-bold">Labour Hours</h2>
        <select
          className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
          value={selectedRange}
          onChange={(e) => setSelectedRange(e.target.value)}
        >
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Last 90 Days</option>
        </select>
      </div>

      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={264}
      />
    </div>
  );
};

export default LabourHoursChart;
