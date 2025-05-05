import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const PredictionMaintenanceChart = () => {
  const [chartData, setChartData] = useState({
    series: [{
      name: 'Predicted Maintenance Events',
      data: [5, 7, 13, 10, 7, 4, 10]
    }],
    options: {
      chart: {
        type: 'line',
        height: 305,
        toolbar: {
          show: false
        },
        fontFamily: 'Inter, sans-serif',
      },
      colors: ['#6366F1'],
      stroke: {
        curve: 'smooth',
        width: 3
      },
      markers: {
        size: 6,
        colors: ['#6366F1'],
        strokeColors: '#fff',
        strokeWidth: 2,
        hover: {
          size: 8
        }
      },
      annotations: {
        points: [{
          x: 'Week 3',
          y: 13,
          marker: { size: 6 },
          label: {
            borderColor: '#6366F1',
            offsetY: 0,
            style: {
              color: '#fff',
              background: '#6366F1',
              padding: { left: 8, right: 8, top: 2, bottom: 2 },
              borderRadius: 5
            },
            text: '12'
          }
        }]
      },
      xaxis: {
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
        labels: {
          style: { colors: '#64748b', fontSize: '12px' }
        },
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: {
        min: 0,
        max: 50,
        tickAmount: 5,
        labels: {
          style: { colors: '#64748b', fontSize: '12px' },
          formatter: val => val.toFixed(0)
        }
      },
      grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 5,
        xaxis: { lines: { show: true } },
        yaxis: { lines: { show: true } }
      },
      tooltip: {
        enabled: true,
        theme: 'light',
        x: { show: true }
      },
      legend: {
        show: false // Hide default legend
      }
    }
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm w-full max-w-3xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[20px] text-black font-bold">Maintenance Prediction</h2>
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#6366F1' }}></span>
          <span className="text-sm text-gray-600">Predicted Maintenance Events</span>
        </div>
      </div>
      <div className="mt-2">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={305}
        />
      </div>
    </div>
  );
};

export default PredictionMaintenanceChart;

