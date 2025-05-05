import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

const Dropdown = ({
  options,
  selectedOption,
  onSelect,
  buttonText,
  className = "",
  buttonWidth = "w-auto"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference for the dropdown container

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`flex items-center justify-between px-2 py-[6px] border border-gray-300 bg-white rounded-md shadow-sm text-black text-sm hover:bg-gray-100 focus:outline-none ${className || buttonWidth}`}
      >
        {selectedOption || buttonText}
        <FiChevronDown className="ml-2 h-5 w-5 text-gray-500" />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full rounded-md border border-gray-300 bg-white shadow-lg z-10">
          <ul className="py-1">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
                className="px-4 py-[6px] text-black hover:bg-gray-100 cursor-pointer text-sm"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
