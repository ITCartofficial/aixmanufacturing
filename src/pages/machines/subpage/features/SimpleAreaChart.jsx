import React from 'react';
import ReactApexChart from 'react-apexcharts';

const SimpleAreaChart = () => {
  const series = [
    {
      name: 'Utilization',
      data: [55, 65, 80, 60, 70, 85, 100], // Your example percentages
    },
  ];

  const options = {
    chart: {
      type: 'area',
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2,
      dashArray: 4, // Dashed line
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    xaxis: {
      categories: ['Apr 1', 'Apr 2', 'Apr 3', 'Apr 4', 'Apr 5', 'Apr 6', 'Apr 7'],
      labels: {
        style: {
          fontSize: '12px',
          colors: '#6B7280', // Tailwind Gray-500
        },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      min: 50,
      max: 100,
      tickAmount: 5, // 50%, 60%, 70%, 80%, 90%, 100%
      labels: {
        formatter: (val) => `${val}%`,
        style: {
          fontSize: '12px',
          colors: '#6B7280',
        },
      },
    },
    grid: {
      borderColor: '#E5E7EB',
      strokeDashArray: 4,
    },
    tooltip: {
      theme: 'light',
    },
    colors: ['#6366F1'], // Nice indigo color
  };

  return (
    <div className="w-full bg-white rounded">
      <ReactApexChart options={options} series={series} type="area" height={200} />
    </div>
  );
};

export default SimpleAreaChart;


