import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const domain = "dev-51tpzbit3ouz06gq.us.auth0.com";
const clientId = "JoXIwV7wdNEmKvEiqTBE5yGvwMS225xz";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin + "/dashboard"}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
