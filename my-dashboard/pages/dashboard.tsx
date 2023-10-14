// pages/dashboard.tsx

import React, { useEffect, useState } from "react";
import CustomLineChart from "../components/LineChart";
import CustomBarChart from "../components/BarChart";
import CustomStackedAreaChart from "../components/StackedAreaChart";

const Dashboard: React.FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Function to fetch the JSON data on the client side
    const fetchData = async () => {
      const response = await fetch("/api/getMockData"); // Replace with the actual API endpoint
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center p-4 text-black">
      <h1 className="text-3xl font-bold mt-4">ADR Reports Over Time</h1>
      <p className="text-lg my-2">
        This dataset contains Adverse Drug Reaction (ADR) reports over time.
        ADRs are reported quarterly for various drugs.
      </p>

      <div className="my-4"></div>

      {data && (
        <div className="w-60">
          <h2 className="text-xl font-semibold">Line Chart</h2>
          <p className="text-base mt-2">
            The Line Chart displays the number of ADR reports over time for
            different drugs. It helps track the trends and changes in ADR
            reports.
          </p>
          <CustomLineChart data={data} />
        </div>
      )}

      <div className="my-4"></div>

      {data && (
        <div className="w-60">
          <h2 className="text-xl font-semibold">Bar Chart</h2>
          <p className="text-base mt-2">
            The Bar Chart provides a visual comparison of ADR reports for
            different drugs in each time period. It simplifies the comparison of
            ADR reports.
          </p>
          <CustomBarChart data={data} />
        </div>
      )}

      <div className="my-4"></div>

      {data && (
        <div className="w-60">
          <h2 className="text-xl font-semibold">Stacked Area Chart</h2>
          <p className="text-base mt-2">
            The Stacked Area Chart displays the overall distribution of ADR
            reports over time and compares the contribution of different drugs
            to the total count.
          </p>
          <CustomStackedAreaChart data={data} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
