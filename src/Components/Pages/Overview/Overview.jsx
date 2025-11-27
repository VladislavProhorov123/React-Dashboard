import React from "react";
import styles from "./Overview.module.css";
import CardListDashboard from "../../Dashboard/CardListDashboard/CardListDashboard";
import Chart from "./Chart/Chart";
import CircleChart from "./CircleChart/CircleChart";
import SwiperCard from "./SwiperCard/SwiperCard";
import SalesChart from "./SalesChart/SalesChart";
import Table from "./Table/Table";
import { motion } from "framer-motion";

export default function Overview() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className={styles.overview}>
      <CardListDashboard />
      <Chart />
      <motion.div
        className={styles.card_inner}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={item}>
          <CircleChart />
        </motion.div>
        <motion.div variants={item}>
          <SwiperCard />
        </motion.div>
        <motion.div variants={item}>
          <SalesChart />
        </motion.div>
      </motion.div>
      <Table />
    </div>
  );
}
