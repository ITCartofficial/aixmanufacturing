

const MaintenanceTable = () => {
    const data = [
        { date: '02 Apr, 2025', type: 'Preventive', by: 'Rahul D', notes: 'Coolant top-up, spindle check' },
        { date: '10 Apr, 2025', type: 'Repair', by: 'TechBot AI', notes: 'Recalibrated X-axis drive' },
        { date: '01 Apr, 2025', type: 'Preventive', by: 'Lakshmi V', notes: 'Lubrication + cleanup' },
        { date: '30 Mar, 2025', type: 'Repair', by: 'Karthi D', notes: 'Recalibrated Y-axis drive' },
      ];
    
  return (
    <div className="border border-[#F5F5F5] rounded-[10px] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="text-gray-500 bg-[#EEF2FF]">
            <tr>
              <th className="px-4 py-4 font-bold text-black">Date</th>
              <th className="px-4 py-4 font-bold text-black">Type</th>
              <th className="px-4 py-4 font-bold text-black">By</th>
              <th className="px-4 py-4 font-bold text-black">Notes</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.map((item, index) => (
              <tr key={index} className="border-t last:border-b">
                <td className="px-4 py-4 font-normal">{item.date}</td>
                <td className="px-4 py-4 font-normal">{item.type}</td>
                <td className="px-4 py-4 font-normal">{item.by}</td>
                <td className="px-4 py-4 font-normal">{item.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MaintenanceTable;
