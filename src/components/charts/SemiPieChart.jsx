import React from "react";
import ReactApexChart from "react-apexcharts";

const SemiPieChart = () => {
  const totalMachines = 74;

  const options = {
    chart: {
      type: "donut",
    },
    labels: ["Operational", "Warning", "Critical"],
    colors: ["#34A853", "#FBBC05", "#EA4335"],
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 0, // Removed extra offset
        donut: {
          size: "50%", // Makes the arc thicker
          background: "transparent",
          labels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              show: true,
              fontSize: "28px",
              fontWeight: 600,
              offsetY: -10,
              formatter: () => `${totalMachines}`,
            },
            total: {
              show: true,
              showAlways: true,
              label: "Total Machines",
              fontSize: "14px",
              color: "#777",
              formatter: () => "",
            },
          },
        },
      },
    },
  };

  return (
    <div className="w-full flex flex-col items-center relative">
      <ReactApexChart
        options={options}
        series={[75.7, 16.2, 8.1]}
        type="donut"
        height={200}
      />

      <div className="absolute top-0 left-0 right-0 flex justify-center items-center h-full">
        <div className="w-16 h-16 rounded-full bg-white flex flex-col items-center justify-center">
          <span className="text-xl font-bold">{totalMachines}</span>
          <span className="text-[16px] text-center font-bold">
            {" "}
            Total Machines{" "}
          </span>
        </div>
      </div>

      <div className="flex justify-around w-full mt-[-40px] text-sm">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-[#34A853] rounded-full"></span>
            <span>Operational</span>
          </div>
          <span className="font-bold">75.7%</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-[#FBBC05] rounded-full"></span>
            <span>Warning</span>
          </div>
          <span className="font-bold">16.2%</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-[#EA4335] rounded-full"></span>
            <span>Critical</span>
          </div>
          <span className="font-bold">8.1%</span>
        </div>
      </div>

      <div className="flex">

      </div>
    </div>
  );
};

export default SemiPieChart;
