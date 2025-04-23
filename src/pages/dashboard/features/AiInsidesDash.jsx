import React from 'react'
import { data, riskLevelStyle } from '../../../lib/DashboardData'
import Container from '../../../components/common/Container'
import { IoWarning } from 'react-icons/io5'

const AiInsidesDash = () => {
  
  return (
    <Container
          className="col-span-6 h-full"
          label="AI Insights"
          dropDown={true}
          opt={{ label: "View all", url: "/units" }}
        >
          <table className="w-full table-auto text-sm text-left rounded-[10px] shadow-sm overflow-hidden">
            <thead className="bg-[#EEF2FF99] text-black">
              <tr>
                <th className="px-4 py-3">Machine</th>
                <th className="px-4 py-3">Plat</th>
                <th className="px-4 py-3">AI Alert Type</th>
                <th className="px-4 py-3">Risk Level</th>
                <th className="px-4 py-3">Suggested Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => (
                <tr key={idx} className="border-t text-gray-700">
                  <td className="px-4 py-2">{item.machine}</td>
                  <td className="px-4 py-2">{item.plat}</td>
                  <td className="px-4 py-2">{item.alert}</td>
                  <td className="px-4 py-2">
                    <div
                      className={`flex gap-2 items-center px-2 py-1 border rounded font-medium grow-0 w-min ${
                        riskLevelStyle[item.risk]
                      }`}
                    >
                      <IoWarning className="text-white text-16" />
                      <span className="text-[16px]">{item.risk}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2">{item.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
  )
}

export default AiInsidesDash