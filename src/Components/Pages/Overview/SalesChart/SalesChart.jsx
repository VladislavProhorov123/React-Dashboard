import React from "react";
import styles from "./SalesChart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { DATA_SALES } from "../../../../Data/data";

export default function SalesChart() {
  return (
    <div className={styles.sales_chart}>
      <h3>Sales Analytics</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          responsive
          data={DATA_SALES}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 24,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 0"
            vertical={false}
            stroke="#E5E7EB"
          />
          <XAxis dataKey="name" />
          <YAxis width="auto" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#00B69B"
            activeDot={{ r: 8 }}
            strokeWidth={3}
          />
          <Line type="monotone" dataKey="profit" stroke="#4880FF" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
