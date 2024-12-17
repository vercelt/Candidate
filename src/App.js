import './App.css';
import './login/Login.css';
import HomePage from './home/HomePage.js';
import Login from './login/Login.js';
import LoadingPage from './LoadingPage.js';
import { useAuth0 } from "@auth0/auth0-react";
import {Route ,Routes } from 'react-router-dom';

 
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
      { isLoading && (
      <Route path="/" element={<LoadingPage />} />
      )}
      
    </Routes>
  );
}

export default App;
