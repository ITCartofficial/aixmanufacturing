// src/pages/components/StatsOverview.jsx
import Dropdown from "../../../components/common/Dropdown";
import StatCard from "../../../components/common/StatCard";

const StatsOverview = ({ stats, filterOptions, selectedFilter, onFilterChange }) => (
  <div className="w-full px-4 p-6 sm:px-6 bg-white border rounded-[10px]">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-[20px] text-black font-bold">Overview</h2>
      <Dropdown
        options={filterOptions}
        selectedOption={selectedFilter}
        onSelect={onFilterChange}
        buttonText="Filter"
      />
    </div>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          statusIndicator={stat.statusIndicator}
          valueClassName="text-3xl font-bold text-black"
          titleClassName="text-base font-semibold"
        />
      ))}
    </div>
  </div>
);

export default StatsOverview;
