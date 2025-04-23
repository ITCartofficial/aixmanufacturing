import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Machines from "./pages/Machines";
import Plants from "./pages/Plants";
import { Routes, Route } from "react-router";

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/machines" element={<Machines />} />
      </Routes>
    </MainLayout>
  );
}
