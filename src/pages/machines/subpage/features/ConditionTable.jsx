import { FiAlertTriangle } from 'react-icons/fi';

const ConditionTable = () => {
  const data = [
    { component: 'Spindle Bearings', condition: 'Medium Wear', replacement: '18 days', warning: false },
    { component: 'Coolant System', condition: 'Good', replacement: '32 days', warning: false },
    { component: 'Tool Head', condition: 'High Wear', replacement: '7 days', warning: true },
  ];

  return (
    <div className="bg-white pt-4">
      <div className="overflow-x-auto border border-[#F5F5F5] rounded-[10px] overflow-hidden">
        <table className="min-w-full text-left text-sm">
          <thead className="text-gray-500 bg-[#EEF2FF]">
            <tr>
              <th className="px-4 py-4 font-bold text-black">Component</th>
              <th className="px-4 py-4 font-bold text-black">Condition</th>
              <th className="px-4 py-4 font-bold text-black">Estimated Replacement</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-4 font-normal">{item.component}</td>
                <td className="px-4 py-4 font-normal">{item.condition}</td>
                <td className="px-4 py-4 flex items-center gap-1 font-normal">
                  {item.warning && (
                    <FiAlertTriangle size={16} className="text-yellow-400" />
                  )}
                  {item.replacement}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConditionTable;
