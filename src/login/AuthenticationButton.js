import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import auth0 from "auth0-js";

const AuthenticationButton = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [auth0Client, setAuth0Client] = useState(null);

  useEffect(() => {
    const webAuth = new auth0.WebAuth({
      domain: "dev-51tpzbit3ouz06gq.us.auth0.com",
      clientID: "JoXIwV7wdNEmKvEiqTBE5yGvwMS225xz",
      responseType: "token id_token",
      redirectUri: window.location.origin + "/dashboard",
      scope: "openid profile email",
    });

    setAuth0Client(webAuth);

    // Check session to see if user is logged in
    webAuth.checkSession({}, (err, authResult) => {
      console.log("checksession");
      if (authResult && authResult.accessToken && authResult.idToken) {
        setIsAuthenticated(true);
        console.log("checksession setIsAuthenticated");
      }
    });

    // Parse the hash to extract the Auth result after Auth0 redirects to your app
    webAuth.parseHash((err, authResult) => {
      console.log("checksession parseHash");

      if (authResult && authResult.accessToken && authResult.idToken) {
        setIsAuthenticated(true);
        console.log("checksession setIsAuthenticated parseHash");
        // You can save the tokens in local storage, session storage, or anywhere you prefer
      }
    });
  }, []);

  const handleLogin = () => {
    console.log("handleLogin handleLogin");
    auth0Client.authorize();
  };

  const handleLogout = () => {
    auth0Client.logout({
      returnTo: window.location.origin,
    });
    setIsAuthenticated(false); // Update state after logout
  };

  if (!auth0Client) {
    return <div>Loading Auth0 Client...</div>;
  }
  return (
    <button
      className="sign-in-button"
      onClick={isAuthenticated ? handleLogout : handleLogin}
    >
      {isAuthenticated ? "Sign Out" : "Sign In"}
    </button>
  );
};

export default AuthenticationButton;
