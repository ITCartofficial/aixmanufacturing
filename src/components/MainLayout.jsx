import { useState } from "react";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";

const MainLayout = ({ children }) => {
  const [sb, setsb] = useState(260);
  return (
    <div className="w-screen bg-[#f5f5f5] h-screen overflow-hidden">
      <Header setsb={setsb} />
      <div className="flex h-full">
        <Sidebar sidebar={sb} />
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
