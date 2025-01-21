import "./Dashboard.css";
import Header from "./header/Header.js";
import Sidebar from "./sidebar/Sidebar.js";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebarVisibility } from "../redux/actions/sideBarActions.js";

const Dashboard = () => {
  const dispatch = useDispatch();
  const isSidebarVisible = useSelector(
    (state) => state.sidebar.isSidebarVisible
  );
  const toggleSidebar = () => {
    dispatch(toggleSidebarVisibility());
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
