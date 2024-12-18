
import './Dashboard.css'
import Header from './header/Header.js'
import Sidebar from './sidebar/Sidebar.js';
import ContentPage from './content/Content.js';
const Dashboard = () => {
  return (
     <div className='dashboard-container'>
      <Header />
      <div className="main-content">
          <Sidebar />
          <div className="content-area">
            <ContentPage />
          </div>
        </div>
   </div>
  );
};

export default Dashboard;