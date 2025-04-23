import React from "react";
import Container from "../../../components/common/Container";
import { alerts, alertStyles } from "../../../lib/DashboardData";
import { IoClose, IoWarning } from "react-icons/io5";
import { PiWarningCircleFill } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";

const AlertNotiDash = () => {

    const alertIcons = {
        danger: <IoWarning className="text-[20px] text-[#F64C4C] mr-2" />,
        warning: <PiWarningCircleFill className="text-[20px] text-[#FFAD0D] mr-2" />,
        success: <FaCheckCircle className="text-[16px] text-[#47B881] mr-2" />,
      };

  return (
    <Container
      className="col-span-4 h-full"
      label="Alerts & Notifications"
      dropDown={true}
      opt={{ label: "View all", url: "/units" }}
    >
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`flex items-center justify-between px-4 py-4 border-l-4 rounded-lg ${
              alertStyles[alert.type]
            }`}
          >
            <span className="flex items-center gap-2 text-sm font-medium">
              {alertIcons[alert.type]}
              {alert.message}
            </span>
            <IoClose className="text-gray-500 cursor-pointer" />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AlertNotiDash;
