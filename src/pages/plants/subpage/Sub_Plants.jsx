import { useParams } from "react-router";
import TitleBar from "../../../components/common/TitleBar";
import { slugToTitle } from "../../../utils/slugToTitle";
import MachineSnapshotImage from "../../../assets/MachineSnapshot.png";


import Matrics_Sub from "./features/Matrics_Sub";
import DigitalTwinView_Sub from "./features/DigitalTwinView_Sub";
import MachineSnapshot_Sub from "./features/MachineSnapshot_Sub";

const Sub_Plants = () => {
  const { plantId, slug } = useParams();
  const title = slug ? slugToTitle(slug) : "Unknown";

  const handlePrev = () => {
    /* load previous machine */
  };
  const handleNext = () => {
    /* load next machine */
  };
  const handleView = () => {
    /* navigate to detail */
  };

  return (
    <div>
      <TitleBar
        title={title}
        id={plantId}
        outlineBtn="Add New"
        fillBtn="Export"
      />

      <div className="grid lg:grid-cols-10 gap-4 mt-4 items-stretch min-h-[300px]">
        <Matrics_Sub />
        <DigitalTwinView_Sub />
      </div>

      <div className="grid lg:grid-cols-10 gap-4 mt-4 items-stretch min-h-[300px]">
        <MachineSnapshot_Sub
          imageUrl={MachineSnapshotImage}
          id="M-101"
          name="CNC Milling 3000"
          status="Operational"
          utilization={91.2}
          temp="89°C"
          vibration="High"
          lastMaintenance="03-20-2025"
          onPrev={handlePrev}
          onNext={handleNext}
          onView={handleView}
        />
      </div>
    </div>
  );
};

export default Sub_Plants;
