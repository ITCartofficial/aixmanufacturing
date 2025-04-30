import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export default function InventoryPieChart({ height = 200 }) {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'donut',
      height: height,
      fontFamily: 'Poppins, sans-serif',
    },
    colors: ['#10b981', '#f59e0b', '#ef4444', '#6366f1'], // Green, amber, red, indigo
    labels: ['In Stock', 'Low Stock', 'Out of Stock', 'On Order'],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false, // Disable default legend, we'll create custom one
    },
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
          background: 'transparent',
          labels: {
            show: false
          }
        }
      }
    },
    stroke: {
      width: 0,
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function(value) {
          return value + '%';
        }
      }
    }
  });

  // Updated to include a 4th category (On Order)
  const [series, setSeries] = useState([78, 15, 7, 0]);
  
  // Legend data with color and text
  const legendItems = [
    { color: '#10b981', label: 'In Stock', value: '78%' },
    { color: '#f59e0b', label: 'Low Stock', value: '15%' },
    { color: '#ef4444', label: 'Out of Stock', value: '7%' },
    // { color: '#6366f1', label: 'On Order', value: '0%' },
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Chart Container with relative positioning */}
      <div className="relative" style={{ height: `${height}px` }}>
        {/* Chart itself */}
        <div className="absolute inset-0">
          <ReactApexChart 
            options={chartOptions}
            series={series}
            type="donut"
            height="100%"
            width="100%"
          />
        </div>
        
        {/* Custom center content - positioned precisely in the donut center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ pointerEvents: 'none' }}>
          <div className="text-base font-semibold text-gray-700">3,452 Items</div>
          <div className="text-base text-gray-500 font-medium">Total</div>
        </div>
      </div>
      
      {/* Custom Legend - 2 columns - separated from chart container */}
      <div className='mt-4'>
        {legendItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
            <div>
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
              <span className="text-sm font-medium text-gray-700 ml-2">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}