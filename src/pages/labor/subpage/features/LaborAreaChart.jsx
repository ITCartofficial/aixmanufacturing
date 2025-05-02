import React, { useState } from "react";
import Chart from "react-apexcharts";

const LaborAreaChart = () => {
  const [selectedRange, setSelectedRange] = useState("Last 30 Days");
  const options = {
    chart: {
      type: "area",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: "straight",
      width: 2,
      dashArray: 3,
    },
    xaxis: {
      type: "category",
      categories: [
        "Apr 1",
        "Apr 2",
        "Apr 3",
        "Apr 4",
        "Apr 5",
        "Apr 6",
        "Apr 7",
      ],
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      min: 0,
      max: 100,
      labels: {
        formatter: (val) => `${val}%`,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.9,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}%`,
      },
    },
    grid: {
      strokeDashArray: 4,
    },
    colors: ["#5D60EF66"],
  };

  const series = [
    {
      name: "Completed",
      data: [70.5, 92.3, 78.2, 89.1, 71.9, 80.5, 92.0],
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6 w-full col-span-10">
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
      <Chart options={options} series={series} type="area" height={200} />
    </div>
  );
};

export default LaborAreaChart;
