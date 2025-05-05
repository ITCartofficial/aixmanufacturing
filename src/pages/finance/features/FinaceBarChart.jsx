import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const FinaceBarChart = () => {
    const [range, setRange] = useState("Last 6 Months");
  
    const options = {
      chart: {
        type: "bar",
        toolbar: { show: false },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%",
          borderRadius: 4,
        },
      },
      dataLabels: { enabled: false },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        labels: { style: { colors: "#6B7280", fontSize: "12px" } },
      },
      yaxis: {
        labels: {
          formatter: (val) => `$${val / 1000}k`,
          style: { colors: "#6B7280", fontSize: "12px" },
        },
      },
      colors: ["#E5E7EB", "#4F46E5"], // Spend (gray), Profit (blue)
      legend: {
        position: "top",
        horizontalAlign: "right",
        markers: { width: 12, height: 12, radius: 12 },
        itemMargin: { horizontal: 8 },
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
      { name: "Spend", data: [800000, 600000, 900000, 950000, 700000, 400000, 750000] },
      { name: "Profit", data: [1200000, 650000, 500000, 950000, 900000, 1200000, 900000] },
    ];
  
    return (
      <div className="bg-white rounded-xl shadow-md p-6 w-full h-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[20px] font-bold">Profit/Loss Trend</h2>
          <select
            className="border border-gray-300 rounded-md px-3 py-1 text-sm outline-none"
            value={range}
            onChange={(e) => setRange(e.target.value)}
          >
            <option>Last 6 Months</option>
            <option>Last 3 Months</option>
            <option>Last Year</option>
          </select>
        </div>
        <ReactApexChart options={options} series={series} type="bar" height={240} />
      </div>
    );
  };

export default FinaceBarChart
