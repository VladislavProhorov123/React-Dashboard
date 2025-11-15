import React from "react";
import PricingCard from "./PricingCard/PricingCard";
import { PRICING_DATA } from "../../../Data/data";
import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <div className={styles.cards}>
        <h2>Pricing</h2>
      <div className={styles.cards_list}>
        {PRICING_DATA.map((card) => (
          <PricingCard
            key={card.id}
            title={card.title}
            price={card.price}
            categories={card.categories}
          />
        ))}
      </div>
    </div>
  );
}
