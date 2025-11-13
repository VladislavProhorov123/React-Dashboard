import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import Content from "../Content/Content";
import Header from "../Header/Header";
import styles from "./Dashboard.module.css";
import CardListDashboard from "./CardListDashboard/CardListDashboard";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  return (
    <div className={styles.dashboard}>
      <SideBar setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className={styles.dashboard_main}>
        <Header />
        <Content activeTab={activeTab} />
      </div>
    </div>
  );
}
