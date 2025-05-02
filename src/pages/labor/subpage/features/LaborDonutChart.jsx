import React from "react";
import Chart from "react-apexcharts";

const LaborDonutChart = ({ title, chartData }) => {
  const chartOptions = {
    chart: {
      type: "donut",
    },
    labels: chartData.chartLabels,
    colors: chartData.chartColors,
    legend: {
      show: false, // hide default legend
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      y: {
        formatter: (val) => `${val} hrs`,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              fontSize: "16px",
              fontWeight: 600,
              color: "#000",
              formatter: () => "4,447 hrs",
            },
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-[20px] font-bold mb-2">{title}</h2>
      <Chart
        options={chartOptions}
        series={chartData.chartSeries}
        type="donut"
        width="100%"
      />

      {/* Custom Indicators */}
      <div className="mt-2 w-full flex  items-start justify-around">
        {chartData.chartLabels.map((label, index) => (
          <div
            key={label}
            className="flex flex-col items-start justify-center text-sm"
          >
            <div className="flex items-center gap-1">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: chartData.chartColors[index] }}
              ></span>
              <span className="text-gray-700 font-medium">{label}</span>
            </div>
            <span className="text-gray-500">
              {chartData.chartSeries[index]} hrs
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaborDonutChart;
