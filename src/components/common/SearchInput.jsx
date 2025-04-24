import { FiSearch } from "react-icons/fi";

const SearchInput = ({
  placeholder = "Search",
  value,
  onChange,
  className = "",
  icon = <FiSearch className="text-gray-400 mr-2 text-lg" />,
  ...rest
}) => {
  return (
    <div
      className={`flex items-center border border-solid border-gray-300 bg-gray-50 px-4 py-[6px] rounded-md w-full max-w-sm ${className}`}
    >
      {icon}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-transparent focus:outline-none text-gray-700 w-full placeholder:text-gray-400"
        {...rest}
      />
    </div>
  );
};

export default SearchInput;
