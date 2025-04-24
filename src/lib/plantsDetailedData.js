export const plantsDetailed = [
  {
    id: 1,
    name: "Orion Plant",
    slug: "orion-plant",

    // Top‑Level Metrics
    metrics: [
      {
        title: "machines",
        value: 40,
        icon: "/path/to/icon.png",
      },
      {
        title: "labour",
        value: 32,
        icon: "/path/to/icon.png",
      },
      {
        title: "oee",
        value: 91.3,
        icon: "/path/to/icon.png",
        statusIndicator: { type: "arrow", color: "green" },
      },
      {
        title: "budget_Deviation",
        value: 5980,
        icon: "/path/to/icon.png",
        statusIndicator: { type: "arrow", color: "red" },
      },
      {
        value: "Operational",
        title: "operational",
        icon: "/path/to/icon.png",
      },
    ],

    // Digital Twin View tabs
    digitalTwin: {
      tabs: [
        "Overall View",
        "Assembly Area",
        "Production Area",
        "Storage Area",
      ],
      currentTab: "Overall View",
      imageUrl: "/images/orion-overall.png",
    },

    // Machine Snapshot Card
    machineSnapshot: {
      id: "M-101",
      name: "CNC Milling 3000",
      status: "Operational", // Operational | Warning | Critical
      oee: 91.2,
      temperature: "89°C",
      vibration: "High",
      lastMaintenance: "03-20-2025",
    },

    // Finance Overview Chart (bar data over last N days)
    financeOverview: {
      rangeLabel: "Last 7 days",
      data: [
        { date: "17 Apr", spend: 5000, profit: 4200 },
        { date: "18 Apr", spend: 4800, profit: 4500 },
        { date: "19 Apr", spend: 5300, profit: 4700 },
        { date: "20 Apr", spend: 5100, profit: 4800 },
        { date: "21 Apr", spend: 5500, profit: 5000 },
        { date: "22 Apr", spend: 6000, profit: 5200 },
        { date: "23 Apr", spend: 5800, profit: 5000 },
      ],
    },

    // Labour Table
    labour: {
      rangeLabel: "Today",
      columns: ["Name", "Role", "Tasks Assigned", "Status"],
      rows: [
        {
          name: "Arun Joshi",
          role: "Maintenance Eng.",
          tasks: 5,
          status: "On Duty",
        },
        {
          name: "Tanvi Mishra",
          role: "Admin Coordinator",
          tasks: 2,
          status: "Leave",
        },
        {
          name: "Sneha Patil",
          role: "Floor Supervisor",
          tasks: 3,
          status: "Out",
        },
        {
          name: "Priya Shetty",
          role: "Inventory Manager",
          tasks: 1,
          status: "Scheduled",
        },
      ],
    },

    // Task Status Table
    tasks: {
      rangeLabel: "Today",
      columns: ["Task", "Assign To", "Due Date", "Status"],
      rows: [
        {
          task: "Replace motor (BX‑450)",
          assignee: "Raj (Engineer)",
          dueDate: "14 Apr, 2025",
          status: "In Progress",
        },
        {
          task: "Inspect Nozzles",
          assignee: "Sunil (Maintenance)",
          dueDate: "14 Apr, 2025",
          status: "Pending",
        },
        {
          task: "Refill Coolant (CX‑120)",
          assignee: "Alia (Engineer)",
          dueDate: "16 Apr, 2025",
          status: "Scheduled",
        },
        {
          task: "Inspect Nozzles",
          assignee: "Sunil (Maintenance)",
          dueDate: "15 Apr, 2025",
          status: "Completed",
        },
      ],
    },

    // AI Insights Table
    aiInsights: {
      rangeLabel: "Today",
      columns: [
        "Machine",
        "Plant",
        "AI Alert Type",
        "Risk Level",
        "Suggested Action",
      ],
      rows: [
        {
          machine: "CNC Lathe #3",
          plant: "Orion Plant",
          alert: "Temp Strike",
          risk: "High",
          action: "Schedule Immediate Maintenance",
        },
        {
          machine: "Conveyor Motor #",
          plant: "Orion Plant",
          alert: "Overheating Detected",
          risk: "High",
          action: "Reduce Load & Inspect Fan System",
        },
        {
          machine: "Robotic Arm #2",
          plant: "Orion Plant",
          alert: "Predictive Part Failure",
          risk: "Medium",
          action: "Pre‑order Replacement Part",
        },
        {
          machine: "Welding Machine #5",
          plant: "Orion Plant",
          alert: "Power Fluctuation Pattern",
          risk: "Low",
          action: "Monitor Continuously",
        },
      ],
    },

    // Finance Breakdown (mini‐table)
    financeBreakdown: {
      rangeLabel: "Today",
      columns: ["Category", "Amount", "Profit/Loss"],
      rows: [
        { category: "Operations", amount: 42000, profitLoss: -8000 },
        { category: "Maintenance", amount: 18500, profitLoss: -1200 },
        { category: "Raw Materials", amount: 24000, profitLoss: -2500 },
        { category: "Labour", amount: 31500, profitLoss: -500 },
        { category: "Logistics", amount: 7500, profitLoss: -1200 },
      ],
    },

    // Alerts & Notifications
    alerts: {
      rangeLabel: "Today",
      items: [
        {
          message: "Severe Vibration Detected in CNC Lathe #3 (Unit A)",
          type: "danger",
        },
        {
          message: "Temperature Spike in Conveyor Motor #1 (Unit B)",
          type: "warning",
        },
        {
          message: "Routine Lubrication Needed for Robotic Arm #2 (Unit C)",
          type: "success",
        },
        {
          message: "Severe Vibration Detected in CNC Lathe #4 (Unit D)",
          type: "danger",
        },
      ],
    },
  },
];
