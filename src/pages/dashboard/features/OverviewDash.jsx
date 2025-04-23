import Container from "../../../components/common/Container.jsx";
import StatCard from "../../../components/common/StatCard.jsx";
import { stats } from "../../../lib/DashboardData.js";

const OverviewDash = () => {
  return (
    <Container id="overviewDashboard" label={"Overview"} dropDown={true}>
      <div className="card_body grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default OverviewDash;
