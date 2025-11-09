import React from "react";
import Overview from "../Pages/Overview/Overview";
import Products from "../Pages/Products/Products";
import './Content.css'

export default function Content({ activeTab }) {
  return (
    <div className="content">
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
