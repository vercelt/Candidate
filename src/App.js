import './App.css';
import './login/Login.css';
import HomePage from './home/HomePage.js';
import Login from './login/Login.js';
import { useAuth0 } from "@auth0/auth0-react";
import {Route ,Routes } from 'react-router-dom';
import Loading from './load/LoadingPage.js';

 
function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  return (
    <Routes>
      { !isAuthenticated && (
        <Route path="/login" element={<Login />} />
      )}
      { isAuthenticated && (
        <Route path="/home" element={<HomePage />} />
      )}
      <Route path="/" element={<Loading />} />

    </Routes>
  );
}

export default App;
