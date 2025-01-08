import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Login.css';
import AuthenticationButton from './AuthenticationButton.js';
import LoginInput from './LoginInput.js'; 
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginWithRedirect } = useAuth0();

  const handleSubmit = (event) => {
    event.preventDefault();
    loginWithRedirect({
      email: email,
      password: password,
    });
  }
  
  return (
    <div className="login-box">
      <form onSubmit={handleSubmit}>
        <p className="smart-talent">SmartTalenConnect</p>
        <p className="welcome">
          <span className="welcome-to">Welcome to</span><br/>
          <span className="platform-name"> SmartTalenConnect Platform</span>
        </p>
        <p className="signin">Please sign in to continue</p>
        <div className="input-container">
        <div className="email-input-wrapper">
          <LoginInput labelText="Email" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="email-input-wrapper">
           <LoginInput labelText="Password" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
        </div>
        <p className="forgot-password">Forgot my password</p>
        <AuthenticationButton />
      </form>
    </div>
  );
}

export default Login;
