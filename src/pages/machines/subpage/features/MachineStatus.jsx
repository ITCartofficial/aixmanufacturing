import { useState } from 'react';

// The main Machine Dashboard component
export default function MachineStatus({ 
  machineId = "M-101",
  name = "CNC Lathe Alpha",
  plant = "Titan Foundry",
  status = "Operational",
  digitalTwin = "Active",
  currentTask = "Precision shaft turning — Line A",
  temperature = "62°C",
  speedStatus = "1.2 mm/s — Low",
  issueFlag = "NA",
  operator = "Sanjay Mehta"
}) {
  // State could be used for interactive elements
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Helper function to render status indicator
  const StatusIndicator = ({ active }) => (
    <span className={`inline-block w-3 h-3 rounded-full mr-2 ${active ? 'bg-green-500' : 'bg-gray-400'}`}></span>
  );

  return (
    <div className="w-max bg-slate-800 text-white rounded-lg shadow-lg p-6">
      {/* Top row */}
      <div className="flex justify-between mb-4 pb-2 border-b border-slate-600">
        <div>
          <div className="text-slate-400 text-[12px]">Machine ID</div>
          <div className="font-medium text-sm">{machineId}</div>
        </div>
        <div className="text-right">
          <div className="text-slate-400 text-[12px]">Name</div>
          <div className="font-medium text-sm">{name}</div>
        </div>
      </div>
      
      {/* Second row */}
      <div className="flex justify-between mb-4 pb-2 border-b border-slate-600">
        <div>
          <div className="text-slate-400 text-[12px]">Plant</div>
          <div className="font-medium text-sm">{plant}</div>
        </div>
        <div className="text-right">
          <div className="text-slate-400 text-[12px]">Status</div>
          <div className="font-medium text-sm flex items-center justify-end">
            <StatusIndicator active={status === "Operational"} />
            {status}
          </div>
        </div>
      </div>
      
      {/* Third row */}
      <div className="flex justify-between mb-4 pb-2 border-b border-slate-600">
        <div>
          <div className="text-slate-400 text-[12px]">Digital Twin</div>
          <div className="inline-block px-4 py-1 bg-slate-700 rounded-md">
            <span className="flex items-center text-sm">
              <StatusIndicator active={digitalTwin === "Active"} />
              {digitalTwin}
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-slate-400 text-[12px]">Current Task</div>
          <div className="font-medium text-sm">{currentTask}</div>
        </div>
      </div>
      
      {/* Fourth row */}
      <div className="flex justify-between mb-4 pb-2 border-b border-slate-600">
        <div>
          <div className="text-slate-400 text-[12px]">Temperature</div>
          <div className="font-medium text-sm">{temperature}</div>
        </div>
        <div className="text-right">
          <div className="text-slate-400 text-[12px]">Status</div>
          <div className="font-medium text-sm">{speedStatus}</div>
        </div>
      </div>
      
      {/* Fifth row */}
      <div className="flex justify-between">
        <div>
          <div className="text-slate-400 text-[12px]">Issue Flag</div>
          <div className="font-medium text-sm">{issueFlag}</div>
        </div>
        <div className="text-right">
          <div className="text-slate-400 text-[12px]">Assigned Operator</div>
          <div className="font-medium text-sm">{operator}</div>
        </div>
      </div>
    </div>
  );
}