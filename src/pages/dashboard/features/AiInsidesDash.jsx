import React from "react";
import Container from "../../../components/common/Container";
import { IoWarning } from "react-icons/io5";

const AiInsidesDash = ({ tableData, isPlant=true, row=4 }) => {
  const riskLevelStyle = {
    High: "bg-[#F64C4C] text-white",
    Medium: "bg-[#FFAD0D] text-white",
    Low: "bg-[#47B881] text-white",
  };

  return (
    <Container
      className="col-span-6 h-full"
      label="AI Insights"
      dropDown={true}
      opt={{ label: "View all", url: "/units" }}
    >
      <div className="border border-[#F5F5F5] rounded-[10px] overflow-hidden">
        <table className="w-full table-auto text-base text-left rounded-[10px] overflow-hidden">
          <thead className="bg-[#EEF2FF] text-black">
            <tr>
              <th className="px-4 py-3">Machine</th>
              {isPlant && <th className="px-4 py-3">Plant</th>}
              <th className="px-4 py-3">AI Alert Type</th>
              <th className="px-4 py-3">Risk Level</th>
              <th className="px-4 py-3">Suggested Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.slice(0, row).map((item, idx) => (
              <tr
                key={idx}
                className="border-b last:border-none text-[#4B4B4B] font-medium"
              >
                <td className="px-4 py-2">{item.machine}</td>
                {isPlant && <td className="px-4 py-2">{item.plant}</td>}
                <td className="px-4 py-2">{item.alertType}</td>
                <td className="px-4 py-2">
                  <div
                    className={`flex gap-2 items-center px-2 py-1 border rounded font-medium grow-0 w-min ${
                      riskLevelStyle[item.riskLevel]
                    }`}
                  >
                    <IoWarning className="text-white text-16" />
                    <span className="text-[16px]">{item.riskLevel}</span>
                  </div>
                </td>
                <td className="px-4 py-2">{item.suggestedAction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default AiInsidesDash;
