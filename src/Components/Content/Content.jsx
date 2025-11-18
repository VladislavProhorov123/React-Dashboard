import React from "react";
import Overview from "../Pages/Overview/Overview";
import Products from "../Pages/Products/Products";
import styles from "./Content.module.css";
import CardListDashboard from "../Dashboard/CardListDashboard/CardListDashboard";
import Favorites from "../Pages/Favorites/Favorites";
import Pricing from "../Pages/Pricing/Pricing";
import Questions from "../Pages/Questions/Questions";
import ToDo from "../Pages/ToDo/ToDo";

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
          case "favorites":
            return (
              <div>
                <Favorites />
              </div>
            );
          case "pricing":
            return (
              <div>
                <Pricing />
              </div>
            );
          case "questions":
            return (
              <div>
                <Questions />
              </div>
            );
          case "to-do":
            return <div>
              <ToDo />
            </div>;
        }
      })()}
    </div>
  );
}
