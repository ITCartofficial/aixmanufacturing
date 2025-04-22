import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Dropdown = ({ options, selectedOption, onSelect, buttonText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center px-6 py-2 border border-gray-300 bg-white rounded-md shadow-sm text-gray-700 text-sm hover:bg-gray-100 focus:outline-none"
      >
        {selectedOption || buttonText} {/* Show the selected option or buttonText if no option is selected */}
        <FiChevronDown className="ml-2 h-5 w-5 text-gray-500"/>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-full rounded-md border border-gray-300 bg-white shadow-lg">
          <ul className="py-1">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => {
                  onSelect(option); // When an option is selected, call onSelect
                  setIsOpen(false);
                }}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
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