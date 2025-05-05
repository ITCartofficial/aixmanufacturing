import {useState, useEffect} from "react";
import ReactApexChart from "react-apexcharts";
import Dropdown from "../../../components/common/Dropdown";

export default function MachineDowntimeForecast() {
  const options = [
    "Next 7 Days",
    "Next 30 Days",
    "Next 90 Days",
  ];

  const [selectedFilter, setSelectedFilter] = useState("Next 30 Days");
  const handleSelect = (selectedOption) => {
    setSelectedFilter(selectedOption);
  };

  const [chartData, setChartData] = useState({
    series: [
      {
        data: [15, 6, 12, 4, 9],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 250,
        toolbar: {
          show: false,
        },
      },
      legend: {
        show: false,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: "60%",
          distributed: true,
          dataLabels: {
            position: "top",
          },
        },
      },
      colors: ["#6366F1"],
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "CNC Lathe Alpha",
          "Robotic Arm Delta",
          "Labor Costs",
          "Laser Cutter Pro",
          "Assembly Bot AX-5",
        ],
        labels: {
          style: {
            fontSize: "12px",
            fontWeight: 400,
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          style: {
            fontSize: "12px",
            fontWeight: 500,
          },
        },
      },
      grid: {
        show: false,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " hrs";
          },
        },
      },
    },
  });

  return (
    <div className="w-full flex flex-col bg-white rounded-lg shadow-sm p-6 mx-auto">
      <div className="mb-4 flex justify-between">
        <h2 className="text-[20px] text-black font-bold">
          Machine Downtime Forecast
        </h2>
        <Dropdown
          options={options}
          selectedOption={selectedFilter}
          onSelect={handleSelect}
          buttonText="Filter"
        />
      </div>
      <div className="w-full h-72">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height="100%"
        />
      </div>
    </div>
  );
}
