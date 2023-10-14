// components/BarChart.tsx

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: any[]; // Replace 'any' with your specific data structure
}

const CustomBarChart: React.FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="quarter" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* You can map each drug to a different Bar with a unique color */}
        {Object.keys(data[0]).map((key) => {
          if (key !== "quarter") {
            return (
              <Bar
                key={key}
                dataKey={key}
                fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
              />
            );
          }
          return null;
        })}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
