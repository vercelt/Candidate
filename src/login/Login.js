import React, { useState } from "react";
import "./Login.css";
import AuthenticationButton from "./AuthenticationButton.js";
import LoginInput from "./LoginInput.js";
import auth0 from "auth0-js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { loginWithRedirect } = useAuth0();

  const auth0Client = new auth0.WebAuth({
    domain: "dev-51tpzbit3ouz06gq.us.auth0.com",
    clientID: "JoXIwV7wdNEmKvEiqTBE5yGvwMS225xz",
    redirectUri: `${window.location.origin}/dashboard`,
    responseType: "token", // 这里设置responseType
    scope: "openid email profile",
  });

  function handleLogin() {
    return (event) => {
      console.log("login");
      event.preventDefault();
      auth0Client.login(
        {
          realm: "Username-Password-Authentication", // 这通常是Auth0默认数据库连接的名称
          email,
          password,
        },
        function (err, authResult) {
          if (err) {
            console.error("Error authenticating", err);
            return;
          }
          // 处理成功认证后的逻辑，例如设置用户的登录状态
        }
      );
    };
  }

  return (
    <div className="login-box">
      <form action="#">
        {" "}
        {/* Empty */}
        <p className="smart-talent">SmartTalenConnect</p>
        <p className="welcome">
          <span className="welcome-to">Welcome to</span>
          <br />
          <span className="platform-name"> SmartTalenConnect Platform</span>
        </p>
        <p className="signin">Please sign in to continue</p>
        <div className="input-container">
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
          </div>
        </div>
        <p className="forgot-password">Forgot my password</p>
        <AuthenticationButton onLogin={(event) => handleLogin()(event)} />
      </form>
    </div>
  );
}

export default Login;
