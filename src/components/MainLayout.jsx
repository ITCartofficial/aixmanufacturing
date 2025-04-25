import { useState } from "react";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";

const MainLayout = ({ children }) => {
  const [sb, setsb] = useState(0);
  return (
    <div className="w-screen bg-[#f5f5f5] h-screen overflow-hidden">
      <Header setsb={setsb} />
      <div className="flex h-[calc(100vh-80px)]">
        <Sidebar sidebar={sb} />
        <div className="main_container p-6 flex flex-col flex-1 gap-6 overflow-y-auto h-full">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
