import { FaRegBell } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className="w-full bg-[#FFFFFF] flex justify-between items-center px-4 py-2 shadow-sm">
      <div className="flex items-center gap-4">
        <RxHamburgerMenu className="text-[24px] text-gray-700" />
        <h1 className="text-[20px] font-semibold text-black">
          AixManufacturing
        </h1>
        <select className="border border-gray-300 rounded-md p-1 text-gray-700 focus:outline-none text-[16px]">
          <option value="all">All Plants</option>
          <option value="lorem">Lorem Ipsum</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
