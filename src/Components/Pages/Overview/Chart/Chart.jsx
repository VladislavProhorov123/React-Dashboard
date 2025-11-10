import React from "react";
import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area
} from "recharts";
import { DATA_CHARTS } from "../../../../Data/data";

export default function Chart() {
  return (
    <div className="chart-container" style={{ width: "100%", height: 300 }}>
        <h3>Sales Details</h3>
      <ResponsiveContainer>
        <LineChart data={DATA_CHARTS}>
          <CartesianGrid
            strokeDasharray="3 0"
            vertical={false}
            stroke="#E5E7EB"
          />
          <XAxis
            dataKey="name"
            tick={{ fill: "#6B7280" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis tick={{ fill: "#888" }} />
          <Tooltip cursor={{ stroke: "#2563eb", strokeWidth: 1 }} />
          

         
          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{ r: 5, fill: "#2563eb" }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
