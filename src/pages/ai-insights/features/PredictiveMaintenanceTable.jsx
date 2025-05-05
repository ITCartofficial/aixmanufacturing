import {IoWarning} from "react-icons/io5";
import { predictiveMaintenanceData } from "../../../lib/aiInsights";

const PredictiveMaintenanceTable = () => {

  return (
    <div className="border border-[#F5F5F5] rounded-[10px] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="text-gray-500 bg-[#EEF2FF]">
            <tr>
              <th className="px-2 py-4 font-bold text-black">Machine Name</th>
              <th className="px-2 py-4 font-bold text-black">Component</th>
              <th className="px-2 py-4 font-bold text-black">Condition</th>
              <th className="px-2 py-4 font-bold text-black">Estimated Replacement</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {predictiveMaintenanceData.map((item, index) => (
              <tr key={index} className="border-t last:border-b">
                <td className="px-2 py-4 font-normal">{item.machineName}</td>
                <td className="px-2 py-4 font-normal">{item.component}</td>
                <td className="px-2 py-4 font-normal">
                  {item.condition}
                </td>
                <td className="px-2 py-4 font-normal">
                  {item.estimatedReplacement}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PredictiveMaintenanceTable;