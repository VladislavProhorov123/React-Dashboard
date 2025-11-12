import React, { Component, useState } from "react";
import "./Table.css";
import { MONTHS, TABLE_DASHBOARD } from "../../../../Data/data";

export default function Table() {
  const [selectedMonth, setSelectedMonth] = useState("All");
  const [open, setOpen] = useState(false);

  const filteredProduct =
    selectedMonth === "All"
      ? TABLE_DASHBOARD
      : TABLE_DASHBOARD.filter((item) => item.date === selectedMonth);

  return (
    <div className="table">
      <div className="table-info">
        <h3>Deals Details</h3>
        <div className="dropdown">
          <button className="dropdown-btn" onClick={() => setOpen(!open)}>
            <span>{selectedMonth}</span>
            <i className={open === false ? 'ri-arrow-drop-down-line' : 'ri-arrow-drop-up-line'}></i>
          </button>
          {open && (
            <ul className="dropdown-menu">
              {MONTHS.map((month) => (
                <li
                  key={month}
                  className=""
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
                  className="status"
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
            <div className="filtered-info">Нет данных за выбранный месяц</div>
          )}
    </div>
  );
}
