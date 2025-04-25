import UpGraph from "../../../../assets/icons/UpGraph.svg";
import DownGraph from "../../../../assets/icons/DownGraph.svg";

const ProfitLossTable_Sub = () => {
  const data = [
    { category: "Operations", amount: 42000, profit: 8000 },
    { category: "Maintenance", amount: 18500, profit: -1200 },
    { category: "Raw Materials", amount: 24000, profit: 2500 },
    { category: "Labour", amount: 15000, profit: -500 },
    { category: "Logistics", amount: 7500, profit: 1200 },
  ];

  const formatCurrency = (value) =>
    value.toLocaleString("en-US", { style: "currency", currency: "USD" });
  return (
    <div className="overflow-hidden border border-[#F5F5F5] rounded-[10px]">
      <table className="w-full text-base text-left text-gray-700">
        <thead className="bg-[#EEF2FF] text-black font-semibold">
          <tr>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">Amount</th>
            <th className="px-4 py-3">Profit/Loss</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx} className="border-b last:border-none">
              <td className="px-4 py-4">{item.category}</td>
              <td className="px-4 py-4">{formatCurrency(item.amount)}</td>
              <td className="px-4 py-4 flex items-center gap-2">
                {item.profit >= 0 ? (
                  <img src={UpGraph} alt="Positive Graph" />
                ) : (
                    <img src={DownGraph} alt="Negative Graph" />
                )}
                <span
                  className={
                    item.profit >= 0 ? "text-green-600" : "text-red-600"
                  }
                >
                  {item.profit >= 0
                    ? `+${formatCurrency(item.profit)}`
                    : `-${formatCurrency(Math.abs(item.profit))}`}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfitLossTable_Sub;
