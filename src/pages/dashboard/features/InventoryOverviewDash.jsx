import React from "react";
import { inventoryData } from "../../../lib/DashboardData";
import Container from "../../../components/common/Container";

const InventoryOverviewDash = () => {
  return (
    <Container
      className="col-span-5"
      label="Inventory Overview"
      dropDown={true}
    >
      <table className="table rounded-[10px] shadow-sm overflow-hidden text-center">
        <thead className="bg-[#EEF2FF99] text-left">
          <tr>
            <th className="px-4 py-4">Category</th>
            <th className="px-4 py-4">In Stock</th>
            <th className="px-4 py-4">Low Stock</th>
            <th className="px-4 py-4">Restocking</th>
          </tr>
        </thead>
        <tbody className="text-left">
          {inventoryData.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-4">{item.category}</td>
              <td className="px-4 py-4">{item.inStock}</td>
              <td className="px-4 py-4">{item.lowStock}</td>
              <td className="px-4 py-4">{item.restocking}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default InventoryOverviewDash;
