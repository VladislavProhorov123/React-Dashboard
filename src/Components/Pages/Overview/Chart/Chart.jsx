import React from "react";
import styles from "./Chart.module.css";
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
    <div className={styles.chart_container} >
        <h3>Sales Details</h3>
      <ResponsiveContainer>
        <LineChart data={DATA_CHARTS} margin={{ top: 20, right: 30, left: 0, bottom: 50 }}>
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
