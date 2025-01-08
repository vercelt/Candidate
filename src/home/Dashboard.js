
import './Dashboard.css'
import Header from './header/Header.js'
import Sidebar from './sidebar/Sidebar.js';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
 <div className='dashboard-container'>
      <Header />
      <div className="main-content">
          <Sidebar />
          <div className="content-area">
          <Outlet />
          </div>
        </div>
   </div>    
  );
};

export default Dashboard;