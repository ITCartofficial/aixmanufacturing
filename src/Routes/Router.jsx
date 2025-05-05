import React from "react";
import { Route, Routes } from "react-router";
import Dashboard from "../pages/dashboard/Dashboard";
import Plants from "../pages/plants/Plants";
import Machines from "../pages/machines/Machines";
import PlantsDetails from "@/pages/plants/subpage/PlantDetails";
import MachineDetails from "@/pages/machines/subpage/MachineDetails";
import Labor from "@/pages/labor/labor";
import LaborAnalytics from "@/pages/labor/subpage/LaborAnalytics";
import Inventory from '@/pages/inventory/Inventory'

import Finance from "@/pages/finance/Finance";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/plants" element={<Plants />} />
      <Route path="/machines" element={<Machines />} />
      <Route path="/labor" element={<Labor />} />
      <Route path="/finance" element={<Finance />} />
      <Route path="/plants/:plantId/:slug" element={<PlantsDetails />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/machines/:machineId/:slug" element={<MachineDetails />} />
      <Route path="/labor/analytics" element={<LaborAnalytics />} />
    </Routes>
  );
};

export default Router;
