import {useState} from "react";
import ReactApexChart from "react-apexcharts";
import Dropdown from "../../../components/common/Dropdown";

const FinanceDeviationChart = () => {
  const options = [
    "Next 3 Month",
    "Next 6 Month",
    "Next 12 Month",
  ];

  const [selectedFilter, setSelectedFilter] = useState("Next 6 Month");
  const handleSelect = (selectedOption) => {
    setSelectedFilter(selectedOption);
  };

  const [chartData] = useState({
    series: [
      {
        name: "Budget",
        data: [1800000, 800000, 1200000, 2200000, 2800000, 2300000, 900000],
      },
      {
        name: "Actual",
        data: [-2000000, 500000, -400000, -800000, -1000000, 300000, 2000000],
      },
      {
        name: "Deviation",
        data: [300000, -600000, -200000, 600000, 1000000, null, null],
      },
      {
        name: "Deviation (Projected)",
        data: [null, null, null, null, 1000000, 1800000, 1600000],
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 275,
        toolbar: {
          show: false,
        },
        fontFamily: "Inter, sans-serif",
        background: "transparent",
      },
      colors: ["#38bdf8", "#4f46e5", "#9ca3af", "#9ca3af"],
      stroke: {
        width: [3, 3, 3, 3],
        curve: "smooth",
        dashArray: [0, 0, 0, 4],
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      annotations: {
        points: [
          {
            x: "Mar",
            y: 2100000,
            marker: {
              size: 0,
            },
            label: {
              borderColor: "#333",
              offsetY: 0,
              style: {
                color: "#fff",
                background: "#333",
                padding: {
                  left: 10,
                  right: 10,
                  top: 5,
                  bottom: 5,
                },
                borderRadius: 5,
              },
              text: "2.1M",
            },
          },
        ],
      },

      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        labels: {
          style: {
            colors: "#9ca3af",
            fontSize: "12px",
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
            colors: "#9ca3af",
            fontSize: "12px",
          },
          formatter: function (val) {
            if (val >= 1000000) return (val / 1000000).toFixed(0) + "M";
            else if (val <= -1000000) return (val / 1000000).toFixed(0) + "M";
            else if (val >= 1000) return (val / 1000).toFixed(0) + "K";
            else if (val <= -1000) return (val / 1000).toFixed(0) + "K";
            return val.toFixed(0);
          },
        },
        min: -4000000,
        max: 4000000,
        tickAmount: 4,
      },
      grid: {
        borderColor: "#f1f1f1",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      legend: {
        position: "bottom",
        horizontalAlign: "center",
        offsetY: 10,
        itemMargin: {
          horizontal: 15,
        },
        markers: {
          width: 8,
          height: 8,
          radius: 0,
        },
        formatter: function (seriesName, opts) {
          // Hide the "Deviation (Projected)" from the legend
          if (seriesName === "Deviation (Projected)") return null;
          return seriesName;
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (val) {
            if (val >= 1000000) return (val / 1000000).toFixed(1) + "M";
            else if (val <= -1000000) return (val / 1000000).toFixed(1) + "M";
            else if (val >= 1000) return (val / 1000).toFixed(1) + "K";
            else if (val <= -1000) return (val / 1000).toFixed(1) + "K";
            return val.toFixed(0);
          },
        },
      },
      fill: {
        type: ["solid", "solid", "solid", "solid"],
        opacity: [1, 1, 1, 1],
      },
    },
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm w-full max-w-4xl">
      <div className="mb-4 flex justify-between">
        <h2 className="text-[20px] text-black font-bold">
          Finance Deviation Over Time
        </h2>
        <Dropdown
          options={options}
          selectedOption={selectedFilter}
          onSelect={handleSelect}
          buttonText="Filter"
        />
      </div>
      <div className="mt-2">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={275}
        />
      </div>
    </div>
  );
};

export default FinanceDeviationChart;
