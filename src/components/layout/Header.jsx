import { FaRegBell, FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import ProfileSection from "../common/ProfileSection";
import defaultUser from "../../assets/default-user.jpg";
import SelectDropdown from "../common/SelectDropdown";

const Header = ({ setsb, notiCount = true }) => {
  const toggleSidebar = () => {
    setsb((prev) => (prev === 260 ? 0 : 260));
  };
  return (
    <div className="w-full bg-[#FFFFFF] flex justify-between items-center px-6 shadow-sm h-[80px]">
      <div className="flex items-center gap-4">
        <RxHamburgerMenu
          className="text-[24px] text-gray-700 cursor-pointer"
          onClick={toggleSidebar}
        />
        <h1 className="text-[20px] font-semibold text-black">
          AiXManufacturing
        </h1>
        <SelectDropdown data={[{ value: "all", label:"All Plants"}, { value: "orionplant", label:"Orion Plant"}]} />
      </div>

      <div className="flex items-center gap-4">
        <div className="flex gap-1 p-1 items-center rounded-md border border-[#0000000d] py-2 px-3 bg-[#F9FAFC]">
          <IoSearchOutline className="text-gray-700 text-[20px] cursor-pointer" />
          <input
            type="text"
            placeholder="Search"
            className="border-none text-gray-700 focus:outline-none text-[16px] bg-transparent"
          />
        </div>

        <div className="w-[40px] h-[40px] rounded-full bg-[#F5F7FA] flex items-center justify-center cursor-pointer relative">
          <div
            className={`dotNotify w-2 h-2 rounded-full absolute top-2 right-2.5 ${
              notiCount ? "bg-[#F64C4C]" : ""
            }`}
          ></div>
          <FaRegBell className="text-gray-700 text-[20px]" />
        </div>

        <ProfileSection
          name="Numan"
          role="Software Engineer II"
          imageUrl={defaultUser}
        />
      </div>
    </div>
  );
};

export default Header;
