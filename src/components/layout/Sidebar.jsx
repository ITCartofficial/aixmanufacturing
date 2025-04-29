import { useLocation, Link } from "react-router";
import { MdSpaceDashboard, MdEngineering, MdTask, MdLogout } from "react-icons/md";
import { FaIndustry, FaBusinessTime } from "react-icons/fa6";
import { GiCargoCrane } from "react-icons/gi";
import { IoCube, IoSettings } from "react-icons/io5";
import { RiBardFill } from "react-icons/ri";
import { FaUserCog } from "react-icons/fa";

const Sidebar = ({ sidebar }) => {
  const { pathname } = useLocation();

  const links = [
    { to: "/", icon: <MdSpaceDashboard />, label: "Dashboard" },
    { to: "/plants", icon: <FaIndustry />, label: "Plants" },
    { to: "/machines", icon: <GiCargoCrane />, label: "Machines" },
    { to: "/labor", icon: <MdEngineering />, label: "Labour" },
    { to: "/task-hub", icon: <MdTask />, label: "Task Hub" },
    { to: "/inventory", icon: <IoCube />, label: "Inventory" },
    { to: "/finance", icon: <FaBusinessTime />, label: "Finance" },
    { to: "/ai-insights", icon: <RiBardFill />, label: "AI Insights" },
    { to: "/access", icon: <FaUserCog />, label: "Access" },
    { to: "/settings", icon: <IoSettings />, label: "Setting" },
  ];

  return (
    <div className={`flex-shrink-0 h-screen py-3 ${sidebar === 260 ? "w-[260px]" : ""} bg-[#ffffff] px-4 flex flex-col justify-start overflow-hidden ${sidebar !== 260 ? "hiddenLabel" : ""}`}>
      <ul className="flex flex-col gap-2">
        {links.map(({ to, icon, label }) => (
          <Link
            key={to}
            to={to}
            className={`text-[16px] flex gap-3 items-center font-semibold py-3 px-3 rounded-[10px] 
              ${pathname === to ? "bg-[#5D60EF] text-white" : "text-[#4B4B4B] hover:bg-[#5D60EF] hover:text-white"}`}
          >
            <div className="text-[20px]">{icon}</div>
            <span className="text-[16px] font-semibold">{label}</span>
          </Link>
        ))}

        <li className="text-[16px] mt-16 flex gap-3 items-center font-semibold text-[#4B4B4B] cursor-pointer hover:text-[#ffffff] hover:bg-[#5D60EF] py-3 px-3 rounded-[10px]">
          <MdLogout className="text-[20px]" />
          <span className="text-[16px] font-semibold">Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
