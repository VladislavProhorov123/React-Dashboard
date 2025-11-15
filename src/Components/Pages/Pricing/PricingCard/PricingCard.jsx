import React from "react";
import styles from "./PricingCard.module.css";

export default function PricingCard({ title, price, categories }) {
  return (
    <div className={styles.card_info}>
      <h4>{title}</h4>
      <p className={styles.time}>Monthly Charge</p>
      <h3>{price}</h3>
      <div className={styles.line}></div>
      <ul>
        {categories.map((item, index) => (
          <li
            key={index}
            className={
              item.available ? styles.available : styles.unavailable
            }
          >
            {item.name}
          </li>
        ))}
      </ul>
      <div className={styles.line}></div>
      <button>
        Get Started
      </button>
      <p className={styles.free_trial}>Start Your 30 Day Free Trial</p>
    </div>
  );
}
