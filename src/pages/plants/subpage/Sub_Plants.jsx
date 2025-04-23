import { useParams } from "react-router";
import TitleBar from "../../../components/common/TitleBar";
import { slugToTitle } from "../../../utils/slugToTitle";
import StatCard from "../../../components/common/StatCard";


const Sub_Plants = () => {
  const { plantId, slug } = useParams();
  const title = slug ? slugToTitle(slug) : 'Unknown';
  return (
    <>
      <TitleBar title={title} id={plantId} outlineBtn="Add New" fillBtn="Export" />
      
      <div className="grid lg:grid-cols-10 gap-4 mt-4 items-stretch min-h-[300px]">
        <div className="grid col-span-4 bg-slate-200 rounded-md h-full grid-cols-2 gap-4">
            <StatCard title="Plant Name" value={title} />
            <StatCard title="Plant Name" value={title} />
            <StatCard title="Plant Name" value={title} />
            <StatCard title="Plant Name" value={title} />
            <StatCard title="Plant Name" value={title} />
        </div>
        <div className="grid col-span-6 bg-slate-200 rounded-sm h-full"></div>
      </div>
    </>
  );
};

export default Sub_Plants;
