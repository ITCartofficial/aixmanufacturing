export default function formatCurrency(num, usd = false) {
  if (usd) {
    if (num === null || num === undefined) return "-";

    const absNum = Math.abs(num);

    if (absNum >= 1_000_000) {
      return `${(num / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
    } else if (absNum >= 1_000) {
      return `${(num / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
    } else {
      return num.toString();
    }
  } else {
    if (isNaN(num)) return "$0";
    return `$${Number(num).toLocaleString("en-US")}`;
  }
}
