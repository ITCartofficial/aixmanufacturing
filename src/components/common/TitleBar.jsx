import React from "react";
import {FiUpload} from "react-icons/fi";

const TitleBar = ({title, outlineBtn, fillBtn, Desc}) => {
  return (
    <section className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-black">
          {title}
        </h1>
        {Desc && (
          <p className="text-base text-gray-500 font-normal mt-2">
            {Desc}
          </p>
        )}
      </div>
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        {outlineBtn && (
          <button className="py-2 px-6 sm:px-10 border border-primary rounded-[10px] text-base text-primary font-medium w-full sm:w-auto hover:bg-primary-hover hover:text-white">
            {outlineBtn}
          </button>
        )}
        {fillBtn && (
          <button className="flex items-center justify-center gap-2 px-6 sm:px-10 py-3 border border-primary rounded-[10px] text-base text-white font-medium bg-primary w-full sm:w-auto hover:bg-primary-hover">
            {fillBtn} <FiUpload size={20} />
          </button>
        )}
      </div>
    </section>
  );
};

export default TitleBar;
