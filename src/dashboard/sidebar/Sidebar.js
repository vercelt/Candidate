import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import {
  setActiveItemIndex,
  toggleSubmenuVisibility,
} from "../../redux/actions/sideBarActions";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const { navItems, activeItemIndex } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const handleItemClick = (index, event) => {
    if (index === 3) {
      event.preventDefault();
      dispatch(toggleSubmenuVisibility(index));
    } else {
      dispatch(setActiveItemIndex(index));
    }
  };

  return (
    <div className="sidebar-container">
      <aside className="sidebar">
        <ul>
          {navItems.map((item, index) =>
            !item.invisible ? (
              <li key={index} className={item.hasDivider ? "with-divider" : ""}>
                <NavLink
                  to={item.link}
                  onClick={(event) => handleItemClick(index, event)}
                >
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt={item.text}
                      className={activeItemIndex === index ? "svg-icon" : ""}
                      data-effect="special"
                    />
                  )}

                  <span
                    className={activeItemIndex === index ? "active" : ""}
                    data-effect={!item.icon ? "left-padding" : ""}
                  >
                    {item.text}
                  </span>

                  {item.badge && (
                    <span className="badge">
                      {item.badge > 9 ? "9+" : item.badge}
                    </span>
                  )}

                  {item.expand && (
                    <img
                      className="applicant-arrow"
                      src="/images/arrow-down.png"
                      alt="expand"
                    />
                  )}
                </NavLink>
              </li>
            ) : null
          )}
        </ul>
      </aside>

      <SidebarBottom />
    </div>
  );
};

export default Sidebar;

const SidebarBottom = () => {
  return (
    <div className="sidebar-bottom-container">
      <div className="logout-container">
        <img src="/images/logout.png" alt="logout" />
        <span className="logout">Logout</span>
      </div>

      <div className="language-container">
        <img src="/images/language.png" alt="language" />
        <span>EN</span>
        <img
          src="/images/language-arrow-down.png"
          alt="language"
          data-effect="arrow"
        />
      </div>
    </div>
  );
};
