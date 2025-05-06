import React, {useState} from "react";
import TitleBar from "../../components/common/TitleBar";
import TaskOverview from "./features/TaskOverview";
import TaskTable from "./features/TaskTable";

const TaskHub = () => {
  const [selectedFilter, setSelectedFilter] = useState("Today");

  const handleFilterChange = (selectedOption) => {
    setSelectedFilter(selectedOption);
  };
  return (
    <>
      <TitleBar title="Task Hub" outlineBtn="+ Create Task" fillBtn="Export" />
      <TaskOverview
        selectedFilter={selectedFilter}
        onFilterChange={handleFilterChange}
      />
      <TaskTable />
    </>
  );
};

export default TaskHub;
