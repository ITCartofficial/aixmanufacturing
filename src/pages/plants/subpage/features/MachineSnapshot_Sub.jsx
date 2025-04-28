import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import formatDate from "@/utils/formatDate";

const MachineSnapshot_Sub = ({
  machines = [],
  // imageUrl,
  // id,
  // name,
  // status,
  // statusColor = "green",
  // utilization,
  // temp,
  // vibration,
  // lastMaintenance,
  // onView,
  // onPrev,
  // onNext,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? machines.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === machines.length - 1 ? 0 : prev + 1));
  };

  const currentMachine = machines[currentIndex];

  return (
    <div className="w-full h-full rounded-xl shadow-md overflow-hidden bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center space-x-4 text-gray-500">
          <h2 className="text-xl font-bold text-black">Machine Snapshot</h2>
          <button
            onClick={handlePrev}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <BiChevronLeft className="text-base" />
          </button>
          <span className="text-sm text-gray-600">
            (ID: {currentMachine.id})
          </span>
          <span className="text-sm text-gray-600">{currentMachine.name}</span>
          <button
            onClick={handleNext}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <BiChevronRight className="text-base" />
          </button>
        </div>

        {/* <Link to={"#"} className="flex items-center">
          <button className="text-blue-500 hover:text-blue-700 text-[16px] font-medium">
            View all
          </button>
          <MdChevronRight className="text-blue-500 hover:text-blue-700 text-[16px]" />
        </Link> */}
      </div>

      {/* Content */}
      <div className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full flex gap-4 items-center"
          >
            <div className="grid grid-cols-5 md:flex-row p-6 gap-4 items-center relative">
              <div className="h-full col-span-2 w-full rounded-lg">
                <img
                  src={currentMachine.image}
                  alt="no image found"
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="col-span-3 w-full min-h-[200px]">
                <div className="bg-white rounded-xl shadow p-4 max-w-md grid grid-cols-2 gap-3">
                  <div className="col-span-1">
                    <div className="flex flex-col items-start gap-2">
                      <span className="text-[#8E8E8E] text-[12px]">Status</span>
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-3 h-3 rounded-full ${
                            currentMachine.status == "Operational"
                              ? "bg-green-500"
                              : "bg-yellow-400"
                          }`}
                        />
                        <span className="font-semibold text-[16px] text-[#4B4B4B]">
                          {currentMachine.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="flex flex-col items-start gap-2">
                      <span className="text-[#8E8E8E] text-[12px]">
                        Utilization
                      </span>
                      <span className="font-semibold text-[16px] text-[#4B4B4B]">
                        {currentMachine.utilization}%
                      </span>
                    </div>
                  </div>
                  <hr className="col-span-2" />
                  <div className="col-span-1">
                    <div className="flex flex-col items-start gap-2">
                      <span className="text-[#8E8E8E] text-[12px]">Temp</span>
                      <span className="font-semibold text-[16px] text-[#4B4B4B]">
                        {currentMachine.temp}°C
                      </span>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="flex flex-col items-start gap-2">
                      <span className="text-[#8E8E8E] text-[12px]">
                        Vibration
                      </span>
                      <span className="font-semibold text-[16px] text-[#4B4B4B]">
                        {currentMachine.vibration > 0.5 ? "High" : "Normal"}
                      </span>
                    </div>
                  </div>
                  <hr className="col-span-2" />
                  <div className="col-span-1">
                    <div className="flex flex-col items-start gap-2">
                      <span className="text-[#8E8E8E] text-[12px]">
                        Last Maintenance
                      </span>
                      <span className="font-semibold text-[16px] text-[#4B4B4B]">
                        {formatDate(currentMachine.lastMaintenance)}
                      </span>
                    </div>
                  </div>

                  <div className="col-span-1 flex items-center">
                    <button className="px-6 py-2 border-2 w-full border-[#5D60EF] text-[#5D60EF] text-[16px] rounded-[10px]">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MachineSnapshot_Sub;
