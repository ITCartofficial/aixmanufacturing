import { useParams } from "react-router";
import TitleBar from "../../../components/common/TitleBar";
import { slugToTitle } from "@/utils/slugToTitle";

const LaborDetails = () => {
  const { laborId, slug } = useParams();
  const title = slug ? slugToTitle(slug) : "Unknown";

  return (
    <div>
      <TitleBar
        title={title}
        id={laborId}
        fillBtn="Export"
      />
    </div>
  );
};

export default LaborDetails;
