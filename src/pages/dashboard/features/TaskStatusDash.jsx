import Container from "@/components/common/Container";
import formatDate from "@/utils/formatDate.js";
import getUserDetails from "../../../utils/getUserDetails";
import ShowProfile from "../../../components/common/ShowProfile";

const TaskStatusDash = ({ tableData = [], row = 4 }) => {
  const statusColors = {
    "In Progress": "bg-[#E1F3FD] text-[#0987C0] border border-[#0987C0]",
    Pending: "bg-[#F2E7D3] text-[#AC5F34] border border-[#AC5F34]",
    Scheduled: "bg-[#F9EAF5] text-[#C43E8A] border border-[#C43E8A]",
    Completed: "bg-[#DBFDEC] text-[#10A95C] border border-[#10A95C]",
  };

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
            {tableData.slice(0, row).map((task, index) => (
              <tr
                key={index}
                className="border-b last:border-none text-[#4B4B4B] font-medium"
              >
                <td className="px-4 py-4">{task.name}</td>
                <td className="px-4 py-4 flex gap-2 items-center">
                  <span>
                    {<ShowProfile user={getUserDetails(task.assignedTo)} />}
                  </span>
                  <span>{getUserDetails(task.assignedTo).role}</span>
                </td>
                <td className="px-4 py-4">{formatDate(task.dueDate)}</td>
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
