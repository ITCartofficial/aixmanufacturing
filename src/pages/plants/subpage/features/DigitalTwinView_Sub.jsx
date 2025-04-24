import { useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import overAll_plantImage from "../../../../assets/plant-image.png";
import assembly_area from "../../../../assets/assembly_area.jpg";

const tabList = [
  { key: "overall", label: "Overall View", image: overAll_plantImage },
  {
    key: "assembly",
    label: "Assembly Area",
    image: assembly_area,
  },
  {
    key: "production",
    label: "Production Area",
    image: overAll_plantImage,
  },
  { key: "storage", label: "Storage Area", image: assembly_area },
];

const DigitalTwinView_Sub = () => {
  const [activeTab, setActiveTab] = useState(tabList[0].key);
  const current = tabList.find((t) => t.key === activeTab);

  return (
    <div className="grid col-span-6 rounded-sm h-full">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6">
          <h2 className="text-[20px] font-bold">Digital Twin View</h2>
          <div className="flex items-center gap-4 text-gray-500">
            <MdEdit className="w-5 h-5 cursor-pointer hover:text-gray-700" />
            <FiTrash2 className="w-5 h-5 cursor-pointer hover:text-red-600" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex px-6">
          {tabList.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
              py-3 mr-8 text-sm font-medium
              ${
                activeTab === tab.key
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500 hover:text-gray-700"
              }
            `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="py-3 px-6">
          <img
            src={current.image}
            alt={current.label}
            className="w-full h-[380px] rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalTwinView_Sub;
