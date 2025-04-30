import React, { useState } from "react";
import Container from "@/components/common/Container";
import Dropdown from "@/components/common/Dropdown";

const LaborAnalyticsFilter = () => {
  const plantOptions = [
    "All",
    "Orion Precision Works",
    "Titan Foundry",
    "Nova Steel Works",
    "Stellar CastTech",
  ];
  const departmentOptions = ["All", "On Duty", "Leave", "Scheduled", "Out"];
  const roleOptions = [
    "All",
    "Operator",
    "Technician",
    "Supervisor",
    "Inspector",
  ];
  const shiftOptions = ["All", "Morning", "Evening", "Night"];

  const [currentPlant, setCurrentPlant] = useState("All");
  const [currentDepartment, setCurrentDepartment] = useState("All");
  const [currentRole, setCurrentRole] = useState("All");
  const [currentShift, setCurrentShift] = useState("All");

  return (
    <Container className="py-10">
      <div className="flex items-center justify-center gap-[60px]">
        <div className="flex flex-col gap-2">
          <label className="text-base font-semibold">Plants</label>
          <Dropdown
            options={plantOptions}
            selectedOption={currentPlant}
            onSelect={setCurrentPlant}
            buttonText={"All"}
            className="w-[140px] justify-between px-[8px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-base font-semibold">Departments</label>
          <Dropdown
            options={departmentOptions}
            selectedOption={currentDepartment}
            onSelect={setCurrentDepartment}
            buttonText={"All"}
            className="w-[140px] justify-between px-[8px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-base font-semibold">Role</label>
          <Dropdown
            options={roleOptions}
            selectedOption={currentRole}
            onSelect={setCurrentRole}
            buttonText={"All"}
            className="w-[140px] justify-between px-[8px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-base font-semibold">Shift</label>
          <Dropdown
            options={shiftOptions}
            selectedOption={currentShift}
            onSelect={setCurrentShift}
            buttonText={"All"}
            className="w-[140px] justify-between px-[8px]"
          />
        </div>
      </div>
    </Container>
  );
};

export default LaborAnalyticsFilter;
