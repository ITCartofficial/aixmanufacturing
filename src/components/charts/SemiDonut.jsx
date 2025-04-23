import React from "react";
import ReactApexChart from "react-apexcharts";

const SemiDonut = () => {
  // Machine status data
  const machineData = {
    total: 74,
    operational: 75.7,
    warning: 16.2,
    critical: 8.1,
  };

  // Chart options for ApexCharts
  const chartOptions = {
    chart: {
      type: "donut",
      height: 280,
    },
    colors: ["#10b981", "#f59e0b", "#ef4444"],
    labels: ["Operational", "Warning", "Critical"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      lineCap: "round",
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        donut: {
          size: "60%",
          labels: {
            show: false,
            name: {
              show: false,
            },
            value: {
              show: false,
            },
            total: {
              show: true,
              fontSize: "20px",
              fontWeight: 600,
              label: machineData.total,
              formatter: () => machineData.total,
            },
          },
        },
      },
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (value) => value + "%",
      },
    },
  };

  const series = [
    machineData.operational,
    machineData.warning,
    machineData.critical,
  ];

  return (
    <div>
      <div className="relative flex justify-center items-center">
        {typeof window !== "undefined" && (
          <div className="h-[160px] relative">
            <ReactApexChart
              options={chartOptions}
              series={series}
              type="donut"
              height={300}
              width="100%"
            />
          </div>
        )}
        <div className="absolute flex flex-col items-center justify-center mt-16">
          <span className="text-3xl font-semibold">{machineData.total}</span>
          <span className="text-sm text-gray-500">Total Machines</span>
        </div>
      </div>
      <div className="flex justify-between gap-2 w-full mx-auto mt-4">
        <div className="flex flex-col">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></div>
            <span className="text-sm text-gray-600">Operational</span>
          </div>
          <div className="text-sm font-medium text-gray-700">
            {machineData.operational}%
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
            <span className="text-sm text-gray-600">Warning</span>
          </div>
          <div className="text-sm font-medium text-gray-700">
            {machineData.warning}%
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <span className="text-sm text-gray-600">Critical</span>
          </div>
          <div className="text-sm font-medium text-gray-700">
            {machineData.critical}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemiDonut;
