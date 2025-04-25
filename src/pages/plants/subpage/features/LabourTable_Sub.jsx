const LabourTable_Sub = ({ data }) => {
  // const labourData = [
  //   {
  //     name: "Arun Joshi",
  //     role: "Maintenance Eng.",
  //     tasks: 3,
  //     status: "On Duty",
  //   },
  //   {
  //     name: "Tanvi Mishra",
  //     role: "Admin Coordinator",
  //     tasks: 0,
  //     status: "Leave",
  //   },
  //   { name: "Sneha Patil", role: "Floor Supervisor", tasks: 2, status: "Out" },
  //   {
  //     name: "Priya Shetty",
  //     role: "Inventory Manager",
  //     tasks: 3,
  //     status: "Scheduled",
  //   },
  // ];

  const labourData = data;

  const statusStyles = {
    "on duty": "bg-[#DBFDEC] text-[#10A95C] border border-[#10A95C]",
    leave: "bg-[#E1F3FD] text-[#0987C0] border border-[#0987C0]",
    out: "bg-[#F9EAF5] text-[#C43E8A] border border-[#C43E8A]",
    scheduled: "bg-[#F2E7D3] text-[#AC5F34] border border-[#AC5F34]",
  };
  return (
    <div className="overflow-hidden border border-[#F5F5F5] rounded-[10px]">
      <table className="w-full text-base text-left text-gray-700">
        <thead className="bg-[#EEF2FF] text-black font-semibold">
          <tr>
            <th className="px-4 py-4">Name</th>
            <th className="px-4 py-4">Role</th>
            <th className="px-4 py-4">Tasks Assigned</th>
            <th className="px-4 py-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {labourData.slice(0, 4).map((labour, idx) => (
            <tr
              key={idx}
              className="border-b last:border-none text-[#4B4B4B] font-medium"
            >
              <td className="px-4 py-4">{labour.name}</td>
              <td className="px-4 py-4">{labour.role}</td>
              <td className="px-4 py-4">{labour.taskAssigned}</td>
              <td className="px-4 py-4">
                <span
                  className={`px-3 py-1 rounded-md text-xs font-medium ${
                    statusStyles[labour.status]
                  }`}
                >
                  {labour.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LabourTable_Sub;
