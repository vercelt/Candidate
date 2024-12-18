import './App.css';
import './login/Login.css';
import Dashboard from './home/Dashboard.js';
import { useAuth0 } from "@auth0/auth0-react";
import {Route ,Routes } from 'react-router-dom';
import Loading from './load/LoadingPage.js';
import UserProfile from './home/profile/UserProfile.js';
import UserSettings from './home/settings/UserSettings.js';
function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <Routes>
      { isAuthenticated && (
        <Route path="/home" element={<Dashboard />} />
      )}
      <Route path="/" element={<Loading />} />
      <Route path='/home/profile' element={<UserProfile />} />
      <Route path='/home/settings' element={<UserSettings />} />
    </Routes>
  );
}

export default App;
