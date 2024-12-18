import './App.css';
import Dashboard from './home/Dashboard.js';
import { useAuth0 } from "@auth0/auth0-react";
import {Route ,Routes } from 'react-router-dom';
import Loading from './load/LoadingPage.js';
import UserProfile from './home/profile/UserProfile';
import UserSettings from './home/settings/UserSettings';
import Sidebar from './home/sidebar/Sidebar'

function App() {
  const { isAuthenticated } = useAuth0();
  console.log('isAuthenticated', isAuthenticated)
  return (
    <div>
      <Routes>
      { isAuthenticated && (
        <Route path="/home" element={<Dashboard />} >
          <Route path="/home/profile" element={<UserProfile />} />
          <Route path="/home/settings" element={<UserSettings />} />
        </Route>
      )}
      <Route path="/" element={<Loading />} />
    </Routes>
    </div>
   
  );
}

export default App;
