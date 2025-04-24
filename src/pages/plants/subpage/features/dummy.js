<div className="flex flex-col md:flex-row gap-2 p-6 items-stretch">
        {/* Image */}
        <div className="h-full w-full bg-[#009876]">
          {/* <img
            src={imageUrl}
            alt={name}
            className="h-full object-cover"
          /> */}
        </div>

        {/* Details */}
        {/* <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="font-medium">Status:</span>
              </div>
              <span className="text-gray-700 font-semibold">{status}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Utilization:</span>
              <span className="font-semibold">{utilization}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Temp:</span>
              <span className="font-semibold">{temp}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Vibration:</span>
              <span className="font-semibold">{vibration}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Last Maintenance:</span>
              <span className="font-semibold">{lastMaintenance}</span>
            </div>
          </div>

          <button
            onClick={onView}
            className="mt-6 self-start px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            View
          </button>
        </div> */}

        <div className="bg-white rounded-xl shadow p-4 max-w-md flex-1">
          {/* Row 1 */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${dotColor}`} />
              <span className="text-gray-600">Status</span>
              <span className="font-semibold text-gray-800">{status}</span>
            </div>
            <div>
              <span className="text-gray-600">Utilization</span>
              <div className="text-lg font-semibold">{utilization}</div>
            </div>
          </div>

          <hr className="my-3 border-gray-200" />

          {/* Row 2 */}
          <div className="flex justify-between mb-3">
            <div>
              <div className="text-gray-600">Temp</div>
              <div className="font-semibold text-gray-800">{temp}</div>
            </div>
            <div>
              <div className="text-gray-600">Vibration</div>
              <div className="font-semibold text-gray-800">{vibration}</div>
            </div>
          </div>

          <hr className="my-3 border-gray-200" />

          {/* Row 3 */}
          <div className="flex justify-between items-center">
            <div>
              <div className="text-gray-600">Last Maintenance</div>
              <div className="font-semibold text-gray-800">
                {lastMaintenance}
              </div>
            </div>
            <button
              onClick={onView}
              className="px-6 py-2 border-2 border-indigo-500 text-indigo-500 font-medium rounded hover:bg-indigo-50"
            >
              View
            </button>
          </div>
        </div>
      </div>