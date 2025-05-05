import React, { useState } from "react";
import Container from "@/components/common/Container";
import Dropdown from "@/components/common/Dropdown";

const FilterOverview = ({ filter }) => {
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
            options={filter.plantOptions}
            selectedOption={currentPlant}
            onSelect={setCurrentPlant}
            buttonText={"All"}
            className="min-w-[140px] justify-between px-[8px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-base font-semibold">Departments</label>
          <Dropdown
            options={filter.departmentOptions}
            selectedOption={currentDepartment}
            onSelect={setCurrentDepartment}
            buttonText={"All"}
            className="min-w-[140px] justify-between px-[8px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-base font-semibold">Role</label>
          <Dropdown
            options={filter.roleOptions}
            selectedOption={currentRole}
            onSelect={setCurrentRole}
            buttonText={"All"}
            className="min-w-[140px] justify-between px-[8px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-base font-semibold">Shift</label>
          <Dropdown
            options={filter.shiftOptions}
            selectedOption={currentShift}
            onSelect={setCurrentShift}
            buttonText={"All"}
            className="min-w-[140px] justify-between px-[8px]"
          />
        </div>
      </div>
    </Container>
  );
};

export default FilterOverview;
