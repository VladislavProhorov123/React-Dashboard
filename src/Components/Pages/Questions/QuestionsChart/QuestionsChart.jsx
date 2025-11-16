import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import styles from "./QuestionsChart.module.css";
import { QUESTIONS_CHART_DATA } from "../../../../Data/data";

export default function QuestionsChart() {
  return (
    <div className={styles.chart_wrapper}>
      <ResponsiveContainer className={styles.question_chart} width={500} height={400}>
        {" "}
        <RadarChart
          data={QUESTIONS_CHART_DATA}
          responsive
          outerRadius="80%"
          margin={{
            top: 20,
            left: 20,
            right: 20,
            bottom: 20,
          }}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
