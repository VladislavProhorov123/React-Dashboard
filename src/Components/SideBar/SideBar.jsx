import React from "react";
import "./SideBar.css";

export default function SideBar({ activeTab, setActiveTab }) {
  return (
    <div className="sidebar">
      <h1>
        <span className="blue">Dash</span>Stack
      </h1>
      <div className="sidebar-inner">
        <button
          onClick={() => setActiveTab("overview")}
          className={activeTab === "overview" ? "btn active" : "button"}
        >
          <i className="ri-time-line"></i>Dashboard
        </button>
        <button
          onClick={() => setActiveTab("products")}
          className={activeTab === "products" ? "btn active" : "button"}
        >
          {" "}
          <i className="ri-stack-line"></i>Products
        </button>
        <button
          onClick={() => setActiveTab("favorites")}
          className={activeTab === "favorites" ? "btn active" : "button"}
        >
          <i className="ri-heart-line"></i>Favorites
        </button>
        <button
          onClick={() => setActiveTab("order")}
          className={activeTab === "order" ? "btn active" : "button"}
        >
          <i className="ri-list-check"></i>Order Lists
        </button>
        <div className="line"></div>
        <h3>PAGES</h3>
        <button
          onClick={() => setActiveTab("pricing")}
          className={activeTab === "pricing" ? "btn active" : "pricing"}
        >
          <i className="ri-discount-percent-line"></i>Pricing
        </button>
        <button
          onClick={() => setActiveTab("to-do")}
          className={activeTab === "to-do" ? "btn active" : "button"}
        >
          <i className="ri-todo-line"></i>To-Do
        </button>
        <button
          onClick={() => setActiveTab("contact")}
          className={activeTab === "contact" ? "btn active" : "button"}
        >
          <i className="ri-group-line"></i>Contact
        </button>
        <button
          onClick={() => setActiveTab("team")}
          className={activeTab === "team" ? "btn active" : "button"}
        >
          <i className="ri-user-line"></i>Team
        </button>
        <div className="line"></div>
        <button
          onClick={() => setActiveTab("setting")}
          className={activeTab === "setting" ? "btn active" : "button"}
        >
          <i className="ri-settings-3-line"></i>Setting
        </button>
        <button
          onClick={() => setActiveTab("logout")}
          className={activeTab === "logout" ? "btn active" : "button"}
        >
          <i className="ri-shut-down-line"></i>Logout
        </button>
      </div>
    </div>
  );
}
