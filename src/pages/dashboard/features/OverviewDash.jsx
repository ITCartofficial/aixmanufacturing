import Container from "../../../components/common/Container.jsx";
import StatCard from "../../../components/common/StatCard.jsx";

const OverviewDash = ({ matrics }) => {
  return (
    <Container id="overviewDashboard" label={"Overview"} dropDown={true}>
      <div className="card_body grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {matrics.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            valueClassName="text-3xl font-bold text-black"
            titleClassName="text-base font-semibold"
            statusIndicator={stat.statusIndicator}
          />
        ))}
      </div>
    </Container>
  );
};

export default OverviewDash;
