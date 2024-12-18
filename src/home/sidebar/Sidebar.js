import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/home/profile">Profile</Link></li>
        <li><Link to="/home/settings">Settings</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;