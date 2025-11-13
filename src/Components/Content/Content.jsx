import React from "react";
import Overview from "../Pages/Overview/Overview";
import Products from "../Pages/Products/Products";
import styles from "./Content.module.css";
import CardListDashboard from "../Dashboard/CardListDashboard/CardListDashboard";

export default function Content({ activeTab }) {
  return (
    <div className={styles.content}>
      {(() => {
        switch (activeTab) {
          case "overview":
            return (
              <div>
                <Overview />
              </div>
            );
          case "products":
            return (
              <div>
                <Products />
              </div>
            );
        }
      })()}
    </div>
  );
}
