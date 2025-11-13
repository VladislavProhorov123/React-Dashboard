import React, { Component, useState } from "react";
import styles from "./Table.module.css";
import { MONTHS, TABLE_DASHBOARD } from "../../../../Data/data";

export default function Table() {
  const [selectedMonth, setSelectedMonth] = useState("All");
  const [open, setOpen] = useState(false);

  const filteredProduct =
    selectedMonth === "All"
      ? TABLE_DASHBOARD
      : TABLE_DASHBOARD.filter((item) => item.date === selectedMonth);

  return (
    <div className={styles.table}>
      <div className={styles.table_info}>
        <h3>Deals Details</h3>
        <div className={styles.dropdown}>
          <button className={styles.dropdown_btn} onClick={() => setOpen(!open)}>
            <span>{selectedMonth}</span>
            <i
              className={
                open === false
                  ? "ri-arrow-drop-down-line"
                  : "ri-arrow-drop-up-line"
              }
            ></i>
          </button>
          {open && (
            <ul className={styles.dropdown_menu}>
              {MONTHS.map((month) => (
                <li
                  key={month}
                  onClick={() => {
                    setSelectedMonth(month);
                    setOpen(false);
                  }}
                >
                  {month}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Location</th>
            <th>Date</th>
            <th>Piece</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredProduct.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.location}</td>
              <td>{item.date}</td>
              <td>{item.piece}</td>
              <td>{item.amount}</td>
              <td>
                <span
                  className={styles.status}
                  style={{
                    backgroundColor:
                      item.status === "Delivered"
                        ? "#00B69B"
                        : item.status === "Pending"
                        ? "#FCBE2D"
                        : item.status === "Rejected"
                        ? "#FD5454"
                        : "transparent",
                    color: "white",
                  }}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {filteredProduct.length === 0 && (
        <div className={styles.filtered_info}>Нет данных за выбранный месяц</div>
      )}
    </div>
  );
}
