import React from 'react';
import Chart from 'react-apexcharts';

const LaborBarChart = () => {
    const chartOptions = {
        chart: {
          type: 'bar',
          toolbar: { show: false },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '45%',
            borderRadius: 4,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent'],
        },
        xaxis: {
          categories: ['Apr 1', 'Apr 2', 'Apr 3', 'Apr 4', 'Apr 5', 'Apr 6', 'Apr 7'],
        },
        yaxis: {
          title: {
            text: '',
          },
        },
        fill: {
          opacity: 1,
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          markers: {
            radius: 12,
          },
        },
        colors: ['#6366F1', '#10B981'], // Blue and green
        tooltip: {
          y: {
            formatter: (val) => `${val} hrs`,
          },
        },
        grid: {
          borderColor: '#E5E7EB',
          strokeDashArray: 4,
        },
      };
    
      const chartSeries = [
        {
          name: 'Scheduled Hours',
          data: [700, 720, 750, 730, 710, 720, 705],
        },
        {
          name: 'Actual Hours',
          data: [680, 750, 770, 740, 725, 730, 710],
        },
      ];
    
      return (
        <div className="bg-white rounded-xl shadow p-6 w-full">
          <h2 className="text-[20px] font-bold mb-4">Scheduled vs Actual Labour Hours</h2>
          <Chart options={chartOptions} series={chartSeries} type="bar" height={200} />
        </div>
      );
}

export default LaborBarChart
