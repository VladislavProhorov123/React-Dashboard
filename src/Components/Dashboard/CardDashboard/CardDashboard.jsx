import React from "react";
import './CardDashboard.css'

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
    <div className="card">
      <div className="card-inner">
        <div className="card-info">
        <h3>{title}</h3>
        <p>{number}</p>
        </div>
        <div className="color-circle" style={{ backgroundColor: color }}>
        <img src={logo} alt="" />
      </div>
      </div>
      
      <p className="chart-text">
        <img src={icon} alt="" /> {percent} {text}
      </p>
    </div>
  );
}
