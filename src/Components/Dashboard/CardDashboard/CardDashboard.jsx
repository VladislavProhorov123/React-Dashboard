import React from "react";
import styles from './CardDashboard.module.css'

export default function CardDashboard({
  title,
  number,
  text,
  percent,
  icon,
  color,
  logo,
}) {
  return (
    <div className={styles.card}>
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
    </div>
  );
}
