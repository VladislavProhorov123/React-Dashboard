import React from "react";
import { CARD_DASHBOARD } from "../../../Data/data";
import CardDashboard from "../CardDashboard/CardDashboard";
import './CardListDashboard.css'

export default function CardListDashboard() {
  return (
    <div className="cards-list">
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
    </div>
  );
}
