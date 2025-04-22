import { BiExport } from "react-icons/bi";

const PrimaryBtn = ({ label, icon }) => {
  return (
    <button className="flex py-3 px-[40px] items-center justify-center bg-[#5D60EF] gap-3 text-[#ffffff] rounded-[10px] text-[20px]">
      {label}
      {icon && icon}
    </button>
  );
};

export default PrimaryBtn;
