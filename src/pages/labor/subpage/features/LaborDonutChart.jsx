import React from "react";
import Chart from "react-apexcharts";

const LaborDonutChart = () => {
  const chartSeries = [2450, 1215, 782];
  const chartLabels = ["Production", "Maintenance", "Quality"];
  const chartColors = ["#3B82F6", "#EF4444", "#FACC15"]; // Blue, Red, Yellow

  const chartOptions = {
    chart: {
      type: "donut",
    },
    labels: chartLabels,
    colors: chartColors,
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
              fontSize: "18px",
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
      <h2 className="text-lg font-semibold mb-4">Labor Hours by Department</h2>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="donut"
        width="80%"
      />

      {/* Custom Indicators */}
      <div className="mt-4 space-y-1">
        {chartLabels.map((label, index) => (
          <div key={label} className="flex items-center space-x-2 text-sm">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: chartColors[index] }}
            ></span>
            <span className="text-gray-700 font-medium">{label}</span>
            <span className="text-gray-500">{chartSeries[index]} hrs</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaborDonutChart;
