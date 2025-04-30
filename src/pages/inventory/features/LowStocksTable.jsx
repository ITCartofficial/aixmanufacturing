import {IoWarning} from "react-icons/io5";

const LowStocksTable = () => {
  const riskLevelStyle = {
    High: "bg-[#F64C4C] text-white",
    Medium: "bg-[#FFAD0D] text-white",
    Low: "bg-[#47B881] text-white",
  };
  const data = [
    {
      alertId: "AI-1001",
      name: "Steel Sheets",
      shortageDate: "05 May, 2025",
      riskLevel: "High",
      suggestedAction: "Reorder Immediately",
    },
    {
      alertId: "AI-1002",
      name: "Hydraulic Oil",
      shortageDate: "03 May, 2025",
      riskLevel: "Medium",
      suggestedAction: "Reorder recommended",
    },
    {
      alertId: "AI-1003",
      name: "Packing Materials",
      shortageDate: "10 May, 2025",
      riskLevel: "High",
      suggestedAction: "Monitor Usage",
    },
    {
      alertId: "AI-1004",
      name: "CNC Machine Blades",
      shortageDate: "07 May, 2025",
      riskLevel: "Low",
      suggestedAction: "Emergency Purchase",
    },
  ];

  return (
    <div className="border border-[#F5F5F5] rounded-[10px] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="text-gray-500 bg-[#EEF2FF]">
            <tr>
              <th className="px-4 py-4 font-bold text-black">Alert ID</th>
              <th className="px-4 py-4 font-bold text-black">Item Name</th>
              <th className="px-4 py-4 font-bold text-black">
                Predicted Shortage Date
              </th>
              <th className="px-4 py-4 font-bold text-black">Risk Level</th>
              <th className="px-4 py-4 font-bold text-black">
                Suggested Action
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.map((item, index) => (
              <tr key={index} className="border-t last:border-b">
                <td className="px-4 py-4 font-normal">{item.alertId}</td>
                <td className="px-4 py-4 font-normal">{item.name}</td>
                <td className="px-4 py-4 font-normal">{item.shortageDate}</td>
                <td className="px-4 py-4 font-normal">
                  <div
                    className={`flex gap-2 items-center px-2 py-1 border rounded font-medium grow-0 w-min ${
                      riskLevelStyle[item.riskLevel]
                    }`}>
                    <IoWarning className="text-white text-16" />
                    <span className="text-[16px]">{item.riskLevel}</span>
                  </div>
                </td>
                <td className="px-4 py-4 font-normal">
                  {item.suggestedAction}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LowStocksTable;
