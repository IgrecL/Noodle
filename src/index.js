import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="138417749143-ilbmmo3ph0cns7s6un2hr2qtot2gsq9b.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
    ,
  </React.StrictMode>
);
