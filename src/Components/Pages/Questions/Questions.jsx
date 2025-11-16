import React, { useState } from "react";
import { ACCORDION_ITEMS } from "../../../Data/data";
import QuestionsItem from "./QuestionsItem/QuestionsItem";
import styles from "./Questions.module.css";
import QuestionsChart from "./QuestionsChart/QuestionsChart";

export default function Questions() {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };
  return (
    <div>
      <h2>Questions</h2>
      <div className={styles.column_info}>
        <div className={styles.column}>
          {ACCORDION_ITEMS.map((item) => (
            <QuestionsItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              toggle={toggle}
            />
          ))}
        </div>
        <div className={styles.column_chart}>
          <QuestionsChart />
        </div>
      </div>
    </div>
  );
}
