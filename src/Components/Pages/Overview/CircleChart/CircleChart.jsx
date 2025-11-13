import React from "react";
import styles from "./CircleChart.module.css";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { DATA_CIRCLE } from "../../../../Data/data";

const COLORS = ["#2563eb", "#60a5fa"];

export default function CircleChart() {
  return (
    <div className={styles.circle_chart}>
      <h3>Customers</h3>
      <div className={styles.chart_inner}>
        <ResponsiveContainer width={260} height={260}>
          <PieChart>
            <Pie
              data={DATA_CIRCLE}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="70%"
              outerRadius="90%"
              paddingAngle={4}
              cornerRadius={6}
            >
              {DATA_CIRCLE.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
