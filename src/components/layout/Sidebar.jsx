import { MdSpaceDashboard } from "react-icons/md";
import { FaIndustry } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="h-full w-[260px] bg-[#ffffff] py-[40px] px-4">
      <ul className="flex flex-col gap-4">
        <li className="text-[16px] flex items-center font-semibold text-[#4B4B4B] cursor-pointer hover:text-[#ffffff] hover:bg-[#5D60EF] py-4 px-3 rounded-[10px]">
          <MdSpaceDashboard className="text-[20px] mr-2" />
          <span className="text-[16px] font-semibold">Dashboard</span>
        </li>
        <li className="text-[16px] flex items-center font-semibold text-[#4B4B4B] cursor-pointer hover:text-[#ffffff] hover:bg-[#5D60EF] py-4 px-3 rounded-[10px]">
          <FaIndustry className="text-[20px] mr-2" />
          <span className="text-[16px] font-semibold">Plants</span>
        </li>
        <li className="text-[16px] flex items-center font-semibold text-[#4B4B4B] cursor-pointer hover:text-[#ffffff] hover:bg-[#5D60EF] py-4 px-3 rounded-[10px]">
          <MdSpaceDashboard className="text-[20px] mr-2" />
          <span className="text-[16px] font-semibold">Machines</span>
        </li>
        <li className="text-[16px] flex items-center font-semibold text-[#4B4B4B] cursor-pointer hover:text-[#ffffff] hover:bg-[#5D60EF] py-4 px-3 rounded-[10px]">
          <MdSpaceDashboard className="text-[20px] mr-2" />
          <span className="text-[16px] font-semibold">Labour</span>
        </li>
        <li className="text-[16px] flex items-center font-semibold text-[#4B4B4B] cursor-pointer hover:text-[#ffffff] hover:bg-[#5D60EF] py-4 px-3 rounded-[10px]">
          <MdSpaceDashboard className="text-[20px] mr-2" />
          <span className="text-[16px] font-semibold">Task Hub</span>
        </li>
        <li className="text-[16px] flex items-center font-semibold text-[#4B4B4B] cursor-pointer hover:text-[#ffffff] hover:bg-[#5D60EF] py-4 px-3 rounded-[10px]">
          <MdSpaceDashboard className="text-[20px] mr-2" />
          <span className="text-[16px] font-semibold">Inventory</span>
        </li>
        <li className="text-[16px] flex items-center font-semibold text-[#4B4B4B] cursor-pointer hover:text-[#ffffff] hover:bg-[#5D60EF] py-4 px-3 rounded-[10px]">
          <MdSpaceDashboard className="text-[20px] mr-2" />
          <span className="text-[16px] font-semibold">Finance</span>
        </li>
        <li className="text-[16px] flex items-center font-semibold text-[#4B4B4B] cursor-pointer hover:text-[#ffffff] hover:bg-[#5D60EF] py-4 px-3 rounded-[10px]">
          <MdSpaceDashboard className="text-[20px] mr-2" />
          <span className="text-[16px] font-semibold">AI Insights</span>
        </li>
        <li className="text-[16px] flex items-center font-semibold text-[#4B4B4B] cursor-pointer hover:text-[#ffffff] hover:bg-[#5D60EF] py-4 px-3 rounded-[10px]">
          <MdSpaceDashboard className="text-[20px] mr-2" />
          <span className="text-[16px] font-semibold">Access</span>
        </li>
        <li className="text-[16px] flex items-center font-semibold text-[#4B4B4B] cursor-pointer hover:text-[#ffffff] hover:bg-[#5D60EF] py-4 px-3 rounded-[10px]">
          <MdSpaceDashboard className="text-[20px] mr-2" />
          <span className="text-[16px] font-semibold">Setting</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
