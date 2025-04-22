
import { MdSpaceDashboard, MdEngineering, MdTask, MdLogout } from "react-icons/md";
import { FaIndustry, FaBusinessTime } from "react-icons/fa6";
import { GiCargoCrane } from "react-icons/gi";
import { IoCube, IoSettings } from "react-icons/io5";
import { RiBardFill } from "react-icons/ri";
import { FaUserCog } from "react-icons/fa";

const Sidebar = ({sidebar}) => {

  return (
    <div className={`flex-shrink-0 h-screen py-3 ${sidebar==260 ? "w-[260px]" : ""} bg-[#ffffff] px-4 flex flex-col justify-start overflow-hidden ${sidebar !== 260 ? "hiddenLabel" : ""}`}>
      <ul className="flex flex-col gap-2">
        <li className="text-[16px] flex gap-3 items-center font-semibold text-[#4B4B4B] cursor-pointer hover:text-[#ffffff] hover:bg-[#5D60EF] py-3 px-3 rounded-[10px]">
          <MdSpaceDashboard className="text-[20px]" />
          <span className="text-[16px] font-semibold">Dashboard</span>
        </li>
        <li className="text-[16px] flex gap-3 items-center font-semibold text-[#4B4B4B] cursor-pointer hover:text-[#ffffff] hover:bg-[#5D60EF] py-3 px-3 rounded-[10px]">
          <FaIndustry className="text-[20px]" />
          <span className="text-[16px] font-semibold">Plants</span>
        </li>
        <li className="text-[16px] flex gap-3 items-center font-semibold text-[#4B4B4B] cursor-pointer hover:text-[#ffffff] hover:bg-[#5D60EF] py-3 px-3 rounded-[10px]">
          <GiCargoCrane className="text-[20px]" />
          <span className="text-[16px] font-semibold">Machines</span>
        </li>
        <li className="text-[16px] flex gap-3 items-center font-semibold text-[#4B4B4B] cursor-pointer hover:text-[#ffffff] hover:bg-[#5D60EF] py-3 px-3 rounded-[10px]">
          <MdEngineering className="text-[20px]" />
          <span className="text-[16px] font-semibold">Labour</span>
        </li>
        <li className="text-[16px] flex gap-3 items-center font-semibold text-[#4B4B4B] cursor-pointer hover:text-[#ffffff] hover:bg-[#5D60EF] py-3 px-3 rounded-[10px]">
          <MdTask className="text-[20px]" />
          <span className="text-[16px] font-semibold">Task Hub</span>
        </li>
        <li className="text-[16px] flex gap-3 items-center font-semibold text-[#4B4B4B] cursor-pointer hover:text-[#ffffff] hover:bg-[#5D60EF] py-3 px-3 rounded-[10px]">
          <IoCube className="text-[20px]" />
          <span className="text-[16px] font-semibold">Inventory</span>
        </li>
        <li className="text-[16px] flex gap-3 items-center font-semibold text-[#4B4B4B] cursor-pointer hover:text-[#ffffff] hover:bg-[#5D60EF] py-3 px-3 rounded-[10px]">
          <FaBusinessTime className="text-[20px]" />
          <span className="text-[16px] font-semibold">Finance</span>
        </li>
        <li className="text-[16px] flex gap-3 items-center font-semibold text-[#4B4B4B] cursor-pointer hover:text-[#ffffff] hover:bg-[#5D60EF] py-3 px-3 rounded-[10px]">
          <RiBardFill className="text-[20px]" />
          <span className="text-[16px] font-semibold">AI Insights</span>
        </li>
        <li className="text-[16px] flex gap-3 items-center font-semibold text-[#4B4B4B] cursor-pointer hover:text-[#ffffff] hover:bg-[#5D60EF] py-3 px-3 rounded-[10px]">
          <FaUserCog className="text-[20px]" />
          <span className="text-[16px] font-semibold">Access</span>
        </li>
        <li className="text-[16px] flex gap-3 items-center font-semibold text-[#4B4B4B] cursor-pointer hover:text-[#ffffff] hover:bg-[#5D60EF] py-3 px-3 rounded-[10px]">
          <IoSettings className="text-[20px]" />
          <span className="text-[16px] font-semibold">Setting</span>
        </li>

        <li className="text-[16px] mt-16 flex gap-3 items-center font-semibold text-[#4B4B4B] cursor-pointer hover:text-[#ffffff] hover:bg-[#5D60EF] py-3 px-3 rounded-[10px]">
          <MdLogout className="text-[20px]" />
          <span className="text-[16px] font-semibold">Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
