import Container from "../../../components/common/Container";
import { statusColors, tasks } from "../../../lib/DashboardData";

const TaskStatusDash = () => {
  return (
    <Container
      className="col-span-5"
      label="Task Status"
      dropDown={true}
      opt={{ label: "View all", url: "/tasks" }}
    >
      <div className="border border-[#F5F5F5] rounded-[10px] overflow-hidden">
        <table className="table rounded-[10px] text-center w-full">
          <thead className="bg-[#EEF2FF] text-left">
            <tr>
              <th className="px-4 py-4">Task</th>
              <th className="px-4 py-4">Assign To</th>
              <th className="px-4 py-4">Due Date</th>
              <th className="px-4 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="text-left">
            {tasks.map((task, index) => (
              <tr key={index} className="border-b last:border-none text-[#4B4B4B] font-medium">
                <td className="px-4 py-4">{task.task}</td>
                <td className="px-4 py-4">{task.assignee}</td>
                <td className="px-4 py-4">{task.due}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-[5px] text-xs font-medium ${
                      statusColors[task.status]
                    }`}
                  >
                    {task.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default TaskStatusDash;
