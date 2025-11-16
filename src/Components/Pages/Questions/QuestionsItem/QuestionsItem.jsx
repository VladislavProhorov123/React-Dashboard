import React from "react";
import styles from "./QuestionsItem.module.css";

export default function QuestionsItem({ item, isOpen, toggle }) {
  return (
    <div className={styles.accordion_item}>
      <button onClick={() => toggle(item.id)}>
        <span className={styles.text}>{item.title}</span>
        <span>
          <i
            className={isOpen === false ? "ri-add-line" : "ri-subtract-line"}
          ></i>
        </span>
      </button>
      {isOpen && <div className={styles.accordion_context}>{item.context}</div>}
    </div>
  );
}
