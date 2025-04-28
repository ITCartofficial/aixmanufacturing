import UpGraph from "../../../../assets/icons/UpGraph.svg";
import DownGraph from "../../../../assets/icons/DownGraph.svg";

const ProfitLossTable_Sub = ({tableData=[], row=4}) => {

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
          {tableData.slice(0, row).map((item, idx) => (
            <tr key={idx} className="border-b last:border-none">
              <td className="px-4 py-4">{item.category}</td>
              <td className="px-4 py-4">{formatCurrency(item.amount)}</td>
              <td className="px-4 py-4 flex items-center gap-2">
                {item.profitLoss >= 0 ? (
                  <img src={UpGraph} alt="Positive Graph" />
                ) : (
                    <img src={DownGraph} alt="Negative Graph" />
                )}
                <span
                  className={
                    item.profitLoss >= 0 ? "text-green-600" : "text-red-600"
                  }
                >
                  {item.profitLoss >= 0
                    ? `+${formatCurrency(item.profitLoss)}`
                    : `-${formatCurrency(Math.abs(item.profitLoss))}`}
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
