import { IoChevronDown } from "react-icons/io5";

const ProfileSection = ({ name = "Johnson", role = "Manager", imageUrl }) => {
  return (
    <div className="flex items-center gap-3 cursor-pointer py-2">
      <img
        src={imageUrl || "/assets/images/profile.jpg"}
        alt="User Profile"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <span className="text-[16px] font-semibold text-gray-900">{name}</span>
        <span className="text-[12px] text-[#000000cc]">{role}</span>
      </div>
      <IoChevronDown className="text-gray-500 text-[20px] ml-auto" />
    </div>
  );
};

export default ProfileSection;
