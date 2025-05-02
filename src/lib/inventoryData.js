import AlertIcon from "../assets/icons/alert.png";
import StocksIcon from "../assets/icons/stock.png";
import LowStockIcon from "../assets/icons/low-stock.png";
import InventoryIcon from "../assets/icons/inventory.png";
import FinanceIcon from "../assets/icons/finance.png";

export const inventoryStats = [
  {title: "Inventory Items", value: "3,452", icon: InventoryIcon},
  {title: "Low Stock Items", value: "142", icon: LowStockIcon, statusIndicator: {type: "arrow", color: "orange"},},
  {
    title: "Out of Stock Items",
    value: "21",
    icon: StocksIcon,
    statusIndicator: {type: "arrow", color: "red"},
  },
  {
    title: "Restocking Items",
    value: "58",
    icon: AlertIcon,
    statusIndicator: {type: "arrow", color: "green"},
  },
  {
    title: "Inventory Value",
    value: "$1.2M",
    icon: FinanceIcon,
  },
];



export const inventoryData = [
  {
    itemId: "INV001",
    itemName: "Steel Sheets",
    plant: "Titan Foundry",
    inStockQty: 500,
    unitPrice: "$120",
    status: "In Stock",
    lastUpdated: "20 Apr, 2025",
    reorderLevel: 200
  },
  {
    itemId: "INV002",
    itemName: "Consumables",
    plant: "Nova Steel Works",
    inStockQty: 30,
    unitPrice: "$50",
    status: "Low Stock",
    lastUpdated: "19 Apr, 2025",
    reorderLevel: 100
  },
  {
    itemId: "INV003",
    itemName: "Raw Material",
    plant: "Stellar CastTech",
    inStockQty: 0,
    unitPrice: "$10",
    status: "Out of Stock",
    lastUpdated: "21 Apr, 2025",
    reorderLevel: 100
  },
  {
    itemId: "INV004",
    itemName: "Logistics",
    plant: "Orion Precision Works",
    inStockQty: 250,
    unitPrice: "$15",
    status: "In Stock",
    lastUpdated: "18 Apr, 2025",
    reorderLevel: 150
  },
  {
    itemId: "INV005",
    itemName: "Spare Parts",
    plant: "Nova Steel Works",
    inStockQty: 10,
    unitPrice: "$300",
    status: "Restocking",
    lastUpdated: "17 Apr, 2025",
    reorderLevel: 20
  },
  {
    itemId: "INV006",
    itemName: "Raw Material",
    plant: "Orion Precision Works",
    inStockQty: 120,
    unitPrice: "$85",
    status: "In Stock",
    lastUpdated: "21 Apr, 2025",
    reorderLevel: 60
  },
  {
    itemId: "INV007",
    itemName: "Safety Equipment",
    plant: "Stellar CastTech",
    inStockQty: 90,
    unitPrice: "$5",
    status: "In Stock",
    lastUpdated: "21 Apr, 2025",
    reorderLevel: 40
  },
  {
    itemId: "INV008",
    itemName: "Consumables",
    plant: "Titan Foundry",
    inStockQty: 20,
    unitPrice: "$30",
    status: "Low Stock",
    lastUpdated: "20 Apr, 2025",
    reorderLevel: 25
  },
  {
    itemId: "INV009",
    itemName: "Equipment",
    plant: "Nova Steel Works",
    inStockQty: 5,
    unitPrice: "$600",
    status: "Restocking",
    lastUpdated: "21 Apr, 2025",
    reorderLevel: 5
  },
  {
    itemId: "INV010",
    itemName: "Spare Parts",
    plant: "Orion Precision Works",
    inStockQty: 300,
    unitPrice: "$2",
    status: "In Stock",
    lastUpdated: "21 Apr, 2025",
    reorderLevel: 100
  }
];
