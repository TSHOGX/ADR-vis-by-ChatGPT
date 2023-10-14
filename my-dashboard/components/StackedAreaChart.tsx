// components/StackedAreaChart.tsx

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

interface Props {
  data: any[]; // Replace 'any' with your specific data structure
}

const CustomStackedAreaChart: React.FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="quarter" />
        <YAxis />
        <Tooltip />
        <Legend />
        {Object.keys(data[0]).map((key) => {
          if (key !== "quarter") {
            return (
              <Area
                key={key}
                dataKey={key}
                stackId="1"
                fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
              >
                <LabelList dataKey={key} position="top" />
              </Area>
            );
          }
          return null;
        })}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CustomStackedAreaChart;
