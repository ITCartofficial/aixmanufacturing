import DashboardIcon from "@/assets/icons/dashboard-icon.png";
import IndustryIcon from "@/assets/icons/industry.png";
import FinanceIcon from "@/assets/icons/finance.png";
import GearIcon from "@/assets/icons/gear.png";
import SettingsIcon from "@/assets/icons/settings.png";

export const financeOverviewMatrics = [
  { title: "Operating Cost", value: "$18.5M", icon: IndustryIcon },
  {
    title: "Revenue",
    value: "$24.5M",
    icon: SettingsIcon,
    statusIndicator: { type: "arrow", color: "green" },
  },
  {
    title: "Net Profit/Loss",
    value: "$6M",
    icon: GearIcon,
    statusIndicator: { type: "arrow", color: "green" },
  },
  {
    title: "Budget Deviation",
    value: "+3.5%",
    icon: DashboardIcon,
    statusIndicator: { type: "arrow", color: "red" },
  },
  { title: "Cost Per Plant", value: "$1.54M", icon: FinanceIcon },
];

export const keyMetricscolumns = [
  { key: "metric", label: "Key Metrics" },
  { key: "stat", label: "Stats" },
];

export const keyMetricsData = [
  { metric: "Labor Cost % of Total Expense", stat: "42%" },
  { metric: "Maintenance Cost % of Total Expense", stat: "18%" },
  {
    metric: "Plant with Highest Profit Margin",
    stat: "Orion Precision Works (28.8%)",
  },
  { metric: "Biggest Cost Overrun Area", stat: "Labor Overtime" },
  {
    metric: "Plant with Most Cost Savings",
    stat: "Titan Foundry (10% Savings on Raw Material)",
  },
];

export const plantsFinancialData = [
  {
    id: 1,
    name: "Titan Foundry",
    revenue: 5_000_000,
    expenses: 3_800_000,
    profit: 1_200_000,
    margin: 24,
  },
  {
    id: 2,
    name: "Nova Steel Works",
    revenue: 4_000_000,
    expenses: 3_900_000,
    profit: 100_000,
    margin: 2.5,
  },
  {
    id: 3,
    name: "Stellar CastTech",
    revenue: 3_000_000,
    expenses: 2_600_000,
    profit: 400_000,
    margin: 13.3,
  },
  {
    id: 4,
    name: "Orion Precision Works",
    revenue: 4_500_000,
    expenses: 3_200_000,
    profit: 1_300_000,
    margin: 28.8,
  },
  {
    id: 5,
    name: "Nexa Hub",
    revenue: 3_200_000,
    expenses: 4_000_000,
    profit: 100_000,
    margin: 10,
  },
  // Add 7 more dummy records to make it 12 total
  {
    id: 6,
    name: "ForgePro Industries",
    revenue: 3_800_000,
    expenses: 3_000_000,
    profit: 800_000,
    margin: 21.1,
  },
  {
    id: 7,
    name: "MetalCore Plants",
    revenue: 4_200_000,
    expenses: 3_100_000,
    profit: 1_100_000,
    margin: 26.2,
  },
  {
    id: 8,
    name: "Fusion Alloys",
    revenue: 2_500_000,
    expenses: 2_400_000,
    profit: 100_000,
    margin: 4.0,
  },
  {
    id: 9,
    name: "Precision Steel Co.",
    revenue: 3_600_000,
    expenses: 3_000_000,
    profit: 600_000,
    margin: 16.7,
  },
  {
    id: 10,
    name: "Alloy Edge",
    revenue: 2_800_000,
    expenses: 3_000_000,
    profit: -200_000,
    margin: -7.1,
  },
  {
    id: 11,
    name: "SteelCrafters Ltd.",
    revenue: 3_500_000,
    expenses: 3_200_000,
    profit: 300_000,
    margin: 8.6,
  },
  {
    id: 12,
    name: "Quantum Forging",
    revenue: 5_200_000,
    expenses: 4_000_000,
    profit: 1_200_000,
    margin: 23.1,
  },
];

export const expenseBreakdownByCat = {
  cols: [
    { label: "Category", key: "category" },
    { label: "Spend ($)", key: "spend" },
    { label: "Budget ($)", key: "budget" },
    { label: "Variance (%)", key: "variance" },
  ],
  body: [
    {
      category: "Raw Materials",
      spend: "1.2M",
      budget: "1.3M",
      variance: "-8%",
    },
    {
      category: "Maintenance",
      spend: "800K",
      budget: "750K",
      variance: "+6.6%",
    },
    {
      category: "Labor Costs",
      spend: "2.1M",
      budget: "2M",
      variance: "+5%",
    },
    {
      category: "Utilities",
      spend: "400K",
      budget: "450K",
      variance: "-11%",
    },
    {
      category: "Logistics/Shipping",
      spend: "500K",
      budget: "550K",
      variance: "-9%",
    },
  ],
};

export const forecastVsRevenueData = {
  cols: [
    { label: "Month", key: "month" },
    { label: "Forecasted Spend ($)", key: "spend" },
    { label: "Forecasted Revenue ($)", key: "revenue" },
    { label: "Predicted Profit/Loss ($)", key: "profit" },
  ],
  body: [
    {
      month: "May 2025",
      spend: "5.8M",
      revenue: "8M",
      profit: "2.2M",
    },
    {
      month: "June 2025",
      spend: "6M",
      revenue: "8.5M",
      profit: "2.5M",
    },
    {
      month: "July 2025",
      spend: "6.2M",
      revenue: "8M",
      profit: "1.8M",
    },
    {
      month: "August 2025",
      spend: "6.5M",
      revenue: "8.7M",
      profit: "2.2M",
    },
    {
      month: "September 2025",
      spend: "6.1M",
      revenue: "8.3M",
      profit: "2.2M",
    },
  ],
};

export const budgetAlertsData = {
  cols: [
    { label: "Alert ID", key: "alertId" },
    { label: "Area", key: "area" },
    { label: "Budget ($)", key: "budget" },
    { label: "Spend ($)", key: "spend" },
    { label: "Overrun (%)", key: "overrun" },
    { label: "Urgency", key: "urgency" },
  ],
  body: [
    {
      alertId: "AL-001",
      area: "Maintenance",
      budget: "750K",
      spend: "800K",
      overrun: "+6.6%",
      urgency: "Medium",
    },
    {
      alertId: "AL-002",
      area: "Labor Payroll",
      budget: "2M",
      spend: "2.1M",
      overrun: "+5%",
      urgency: "High",
    },
    {
      alertId: "AL-002",
      area: "Raw Material Supply",
      budget: "1.5M",
      spend: "1.7M",
      overrun: "+13.3%",
      urgency: "High",
    },
    {
      alertId: "AL-002",
      area: "Utility Costs",
      budget: "400K",
      spend: "450K",
      overrun: "+12.5%",
      urgency: "Medium",
    },
    {
      alertId: "AL-002",
      area: "Logistics",
      budget: "500K",
      spend: "560K",
      overrun: "+12%",
      urgency: "Low",
    },
  ],
};

export const smartAIRecommendations = [
  {
    title: "Optimize Shifts",
    description: "Reduce overtime labor costs by 15%.",
  },
  {
    title: "Energy Audit Recommendation",
    description: "Cut utility expenses by 8% using automation.",
  },
  {
    title: "Vendor Contract Renegotiation",
    description: "Save 5–7% on raw material costs.",
  },
  {
    title: "Predictive Maintenance Scheduling",
    description: "Reduce unplanned repair costs by 10%.",
  },
];
