import React from "react";
import { CARD_DASHBOARD } from "../../../Data/data";
import CardDashboard from "../CardDashboard/CardDashboard";
import styles from "./CardListDashboard.module.css";
import { motion } from "framer-motion";

export default function CardListDashboard() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <motion.div
      className={styles.cards_list}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {CARD_DASHBOARD.map((card) => (
        <CardDashboard
          key={card.id}
          title={card.title}
          text={card.text}
          number={card.number}
          color={card.color}
          percent={card.percent}
          icon={card.icon}
          logo={card.logo}
        />
      ))}
    </motion.div>
  );
}
