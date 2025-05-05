import {IoWarning} from "react-icons/io5";
import { financeInsightsData, machineInsightsData, plantInsightData } from "../../../lib/aiInsights";

const MachineAiInsights = () => {
  const riskLevelStyle = {
    High: "bg-[#F64C4C] text-white",
    Medium: "bg-[#FFAD0D] text-white",
    Low: "bg-[#47B881] text-white",
  };

  return (
    <div className="border border-[#F5F5F5] rounded-[10px] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="text-gray-500 bg-[#EEF2FF]">
            <tr>
              <th className="px-4 py-4 font-bold text-black">Machine Name</th>
              <th className="px-4 py-4 font-bold text-black">AI Alert Type</th>
              <th className="px-4 py-4 font-bold text-black">Risk Level</th>
              <th className="px-4 py-4 font-bold text-black">Insight / Issue</th>
              <th className="px-4 py-4 font-bold text-black">Suggested Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {machineInsightsData.map((item, index) => (
              <tr key={index} className="border-t last:border-b">
                <td className="px-4 py-4 font-normal">{item.machineName}</td>
                <td className="px-4 py-4 font-normal">{item.alertType}</td>
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
                  {item.insight}
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

export default MachineAiInsights;