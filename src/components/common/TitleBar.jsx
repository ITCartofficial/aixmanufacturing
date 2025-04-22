import React from "react";
import {FiUpload} from "react-icons/fi";

const TitleBar = () => {
  return (
    <section className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 sm:pt-6 px-4 sm:px-6 gap-4">
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-black">
          Plants
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <button className="py-3 px-6 sm:px-10 border border-blue-600 rounded-[10px] text-base text-blue-600 font-medium w-full sm:w-auto">
          + Add New
        </button>
        <button className="flex items-center justify-center gap-2 px-6 sm:px-10 py-3 border border-blue-600 rounded-[10px] text-base text-white font-medium bg-blue-600 w-full sm:w-auto">
          Export <FiUpload size={20} />
        </button>
      </div>
    </section>
  );
};

export default TitleBar;
