import Header from "../components/layout/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="w-screen bg-[#f5f5f5] h-screen overflow-hidden">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
