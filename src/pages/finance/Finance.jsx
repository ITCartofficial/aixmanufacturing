import React, { useState } from "react";
import FilterOverview from "./features/FilterOverview";
import TitleBar from "@/components/common/TitleBar";
import Container from "../../components/common/Container";
import OverviewDash from "../dashboard/features/OverviewDash";
import FinanceBarChart from "./features/FinaceBarChart";
import {
  plantsFinancialData,
  expenseBreakdownByCat,
  forecastVsRevenueData,
  budgetAlertsData,
  smartAIRecommendations,
} from "../../lib/financeData";
import SearchInput from "@/components/common/SearchInput";

import {
  financeOverviewMatrics,
  keyMetricsData,
  keyMetricscolumns,
} from "../../lib/financeData";
import DynamicTable from "../../components/common/DynamicTable";
import FinancialForecastChart from "./features/FinancialForecastChart";
import ExpenseDistributionChart from "./features/ExpenseDistributionChart";
import LargeDataTable from "./features/LargeDataTable";

const Finance = () => {
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

  const filter = {
    plantOptions,
    departmentOptions,
    roleOptions,
    shiftOptions,
  };

  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <TitleBar title="Finance" fillBtn="Export" />
      <FilterOverview filter={filter} />

      <OverviewDash matrics={financeOverviewMatrics} />

      <div className="grid grid-cols-10 gap-4">
        <Container className="col-span-5" label={"Key Financial Metrics"}>
          <DynamicTable
            cols={keyMetricscolumns}
            tableBody={keyMetricsData}
            rows={4}
          />
        </Container>
        <Container
          className="col-span-5"
          label={"Financial Forecast"}
          dropDown={true}
        >
          <FinancialForecastChart />
        </Container>
      </div>

      <div className="grid grid-cols-10 gap-4 grid-rows-1">
        <div className="col-span-5">
          <FinanceBarChart />
        </div>
        <div className="col-span-5">
          <ExpenseDistributionChart />
        </div>
      </div>
      <div className="grid w-full">
        <Container>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-[20px] font-bold">
              Plant-Wise Financial Health Summary
            </h2>
            <div className="w-60">
              <SearchInput
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
              />
            </div>
          </div>
          <LargeDataTable tableData={plantsFinancialData} />
        </Container>
      </div>
      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-5">
          <Container label="Expense Breakdown by Category">
            <DynamicTable
              cols={expenseBreakdownByCat.cols}
              tableBody={expenseBreakdownByCat.body}
              rows={5}
            />
          </Container>
        </div>
        <div className="col-span-5">
          <Container label="Monthly Financial Forecast">
            <DynamicTable
              cols={forecastVsRevenueData.cols}
              tableBody={forecastVsRevenueData.body}
              rows={4}
            />
          </Container>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-6">
          <Container label="Cost Overrun Alerts">
            <DynamicTable
              cols={budgetAlertsData.cols}
              tableBody={budgetAlertsData.body}
              rows={5}
              riskLabel={true}
              riskCol={6}
            />
          </Container>
        </div>
        <div className="col-span-4">
          <Container label="Smart  AI Recommendations">
            <div className="">
              <div className="border-[#A6B5FB] w-full h-full p-6 border-[1.5px] rounded-[10px] flex flex-col gap-4">
                {smartAIRecommendations.slice(0, 4).map((item, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <h3 className="font-bold text-base text-[#000]">{item.title}</h3>
                    <p className="text-sm text-[#1F1F1F]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Finance;
