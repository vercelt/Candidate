<<<<<<< Updated upstream
<<<<<<< Updated upstream
import './Login.css';
import AuthenticationButton from './AuthenticationButton.js';
import LoginInput from './LoginInput.js'; 
function Login() {
 
=======
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";
import AuthenticationButton from "./AuthenticationButton.js";
import LoginInput from "./LoginInput.js";
function Login() {
=======
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";
import AuthenticationButton from "./AuthenticationButton.js";
import LoginInput from "./LoginInput.js";
function Login() {
>>>>>>> Stashed changes
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginWithRedirect } = useAuth0();

  const handleSubmit = (event) => {
    event.preventDefault();
    loginWithRedirect({
      email: email,
      password: password,
    });
  };

<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  return (
    <div className="login-box">
      <form action="#">  {/* Empty */}
        <p className="smart-talent">SmartTalenConnect</p>
        <p className="welcome">
          <span className="welcome-to">Welcome to</span>
          <br />
          <span className="platform-name"> SmartTalenConnect Platform</span>
        </p>
        <p className="signin">Please sign in to continue</p>
        <div className="input-container">
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        <div className="email-input-wrapper">
          <LoginInput labelText="Email" placeholder="Email"/>
        </div>
        <div className="email-input-wrapper">
           <LoginInput labelText="Password" placeholder="Password"/>
=======
=======
>>>>>>> Stashed changes
          <div className="email-input-wrapper">
            <LoginInput
              labelText="Email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="email-input-wrapper">
            <LoginInput
              labelText="Password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
          </div>
        </div>
        <p className="forgot-password">Forgot my password</p>
        <AuthenticationButton />
      </form>
    </div>
  );
}

export default Login;
