import { FaArrowCircleDown } from 'react-icons/fa'
import Container from '../../../components/common/Container'
import { units } from '../../../lib/DashboardData'

const UnitWiseActivityDash = () => {
  return (
    <Container
          className="col-span-7"
          label="Unit -Wise OEE & Activity"
          dropDown={true}
          opt={{ label: "View all", url: "/units" }}
        >
          <table className="table rounded-[10px] shadow-sm overflow-hidden text-center">
            <thead className="bg-[#EEF2FF99] text-left">
              <tr>
                <th className="px-4 py-4">Unit</th>
                <th className="px-4 py-4">Machines</th>
                <th className="px-4 py-4">OEE</th>
                <th className="px-4 py-4">Downtime</th>
                <th className="px-4 py-4">Active Tasks</th>
              </tr>
            </thead>
            <tbody className="text-left">
              {units.map((unit, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-0">{unit.unit}</td>
                  <td className="px-4 py-0">{unit.machine}</td>
                  <td className="px-4 py-0 flex items-center justify-start gap-2">
                    <div className="w-[50px] bg-[#C4EEC6] max-w-sm my-4 rounded-lg overflow-hidden border border-gray-300">
                      <div
                        className="bg-[#2C8D32] text-xs leading-none py-1"
                        style={{ width: `${unit.oee}%` }}
                      ></div>
                    </div>
                    <span className="text-sm">{unit.oee}%</span>
                  </td>
                  <td className="px-4 py-0">
                    <div className="flex items-center justify-start gap-2">
                      <FaArrowCircleDown className="text-[16px] text-[#F64C4C]" />
                      <span className="text-sm">{unit.downtime} hrs</span>
                    </div>
                  </td>
                  <td className="px-4 py-0">{unit.activeTasks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
  )
}

export default UnitWiseActivityDash