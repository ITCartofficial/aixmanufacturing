import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="w-screen bg-[#f5f5f5] h-screen overflow-hidden">
      <Header />
      <div className="flex h-full">
        <Sidebar />
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
