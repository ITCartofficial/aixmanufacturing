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
      <div className="border border-[#F5F5F5] rounded-[10px] overflow-hidden">
        <table className="table w-full text-center">
          <thead className="bg-[#EEF2FF] text-left">
            <tr>
              <th className="px-4 py-4">Category</th>
              <th className="px-4 py-4">In Stock</th>
              <th className="px-4 py-4">Low Stock</th>
              <th className="px-4 py-4">Restocking</th>
            </tr>
          </thead>
          <tbody className="text-left">
            {inventoryData.map((item, index) => (
              <tr key={index} className="border-b last:border-none text-[#4B4B4B] font-medium">
                <td className="px-4 py-4">{item.category}</td>
                <td className="px-4 py-4">{item.inStock}</td>
                <td className="px-4 py-4">{item.lowStock}</td>
                <td className="px-4 py-4">{item.restocking}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default InventoryOverviewDash;
