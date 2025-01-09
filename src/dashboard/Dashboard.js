import React, { useState } from "react";
import "./Dashboard.css";
import Header from "./header/Header.js";
import Sidebar from "./sidebar/Sidebar.js";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
    const btn = document.querySelector(".arrow-btn");
    btn.classList.toggle("transformed-btn");
  };
  return (
    <div className="dashboard-container">
      <Header />
      <div className="main-content">
        <div
          className={
            isSidebarVisible ? "left-area" : "left-area left-area-hidden"
          }
        >
          <Sidebar />
        </div>
        <div className="content-area">
          <Outlet />
        </div>
        <ToggleSidebar toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
};

export default Dashboard;

const ToggleSidebar = ({ toggleSidebar }) => {
  return (
    <img
      className="arrow-btn"
      src="/images/expand.png"
      alt="Arrow"
      onClick={toggleSidebar}
    />
  );
};
