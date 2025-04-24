import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const MachineSnapshot_Sub = ({
  imageUrl,
  id,
  name,
  status,
  statusColor = "green",
  utilization,
  temp,
  vibration,
  lastMaintenance,
  onView,
  onPrev,
  onNext,
}) => {
  const dotColor = {
    green: "bg-green-500",
    yellow: "bg-yellow-400",
    red: "bg-red-500",
  }[statusColor];

  return (
    <div className="col-span-5 rounded-xl shadow-md overflow-hidden bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center space-x-4 text-gray-500">
          <h2 className="text-lg font-semibold">Machine Snapshot</h2>
          <button onClick={onPrev} className="p-1 hover:bg-gray-100 rounded">
            <BiChevronLeft className="text-base" />
          </button>
          <span className="text-sm text-gray-600">(ID: {id})</span>
          <span className="text-sm text-gray-600">{name}</span>
          <button onClick={onNext} className="p-1 hover:bg-gray-100 rounded">
            <BiChevronRight className="text-base" />
          </button>
        </div>

        <a
          href="#"
          className="text-sm text-[#0077FF] font-medium flex items-center gap-1"
        >
          <span>View all</span>
          <BiChevronRight className="text-base" />
        </a>
      </div>

      {/* Content */}
      <div className="grid grid-cols-5 md:flex-row p-6 gap-4">
        <div className="bg-slate-700 h-full col-span-2 w-full rounded-lg ">
          <img
            src={imageUrl}
            alt="Machine Snapshot"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-3 w-full min-h-[200px]">
          <div className="bg-white rounded-xl shadow p-4 max-w-md grid grid-cols-2 gap-3">
            <div className="col-span-1">
              <div className="flex flex-col items-start gap-2">
                <span className="text-[#8E8E8E] text-[12px]">Status</span>
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${dotColor}`} />
                  <span className="font-semibold text-[16px] text-[#4B4B4B]">
                    {status}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col items-start gap-2">
                <span className="text-[#8E8E8E] text-[12px]">Utilization</span>
                <span className="font-semibold text-[16px] text-[#4B4B4B]">
                  {utilization}%
                </span>
              </div>
            </div>
            <hr className="col-span-2" />
            <div className="col-span-1">
              <div className="flex flex-col items-start gap-2">
                <span className="text-[#8E8E8E] text-[12px]">Temp</span>
                <span className="font-semibold text-[16px] text-[#4B4B4B]">
                  {temp}
                </span>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col items-start gap-2">
                <span className="text-[#8E8E8E] text-[12px]">Vibration</span>
                <span className="font-semibold text-[16px] text-[#4B4B4B]">
                  {vibration}
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
                  {lastMaintenance}
                </span>
              </div>
            </div>

            <div className="col-span-1 flex items-center">
              <button
                onClick={onView}
                className="px-6 py-2 border-2 w-full border-[#5D60EF] text-[#5D60EF] text-[16px] rounded-[10px]"
              >
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineSnapshot_Sub;
