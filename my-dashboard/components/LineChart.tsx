// components/LineChart.tsx

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface LineChartProps {
  data: any[]; // Use the appropriate data type
}

const CustomLineChart: React.FC<LineChartProps> = ({ data }) => {
  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="quarter" />
      <YAxis />
      <Tooltip />
      <Legend />

      {Object.keys(data[0]) // Assuming that the first object in the data array has all drug names
        .filter((key) => key !== "quarter")
        .map((drug) => (
          <Line
            type="monotone"
            dataKey={drug}
            name={drug}
            key={drug}
            stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
          />
        ))}
    </LineChart>
  );
};

export default CustomLineChart;
