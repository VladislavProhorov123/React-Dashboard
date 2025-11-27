import React from "react";
import styles from "./CardDashboard.module.css";
import { motion } from "framer-motion";

const CardDashboard = ({
  title,
  number,
  text,
  percent,
  icon,
  color,
  logo,
}) => {
  const item ={
    hidden: {opacity: 0, y: 20},
    show: {opacity: 1, y:0}
  }
  return (
    <motion.div
      className={styles.card}
      variants={item}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.01,  }}
    >
      <div className={styles.card_inner}>
        <div className={styles.card_info}>
          <h3>{title}</h3>
          <p>{number}</p>
        </div>
        <div className={styles.color_circle} style={{ backgroundColor: color }}>
          <img src={logo} alt="" />
        </div>
      </div>

      <p className={styles.chart_text}>
        <img src={icon} alt="" /> {percent} {text}
      </p>
    </motion.div>
  );
};

export default CardDashboard;
