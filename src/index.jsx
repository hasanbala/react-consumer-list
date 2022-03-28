import ReactDOM from "react-dom";
import React from "react";
import { UserProvider } from "./context";
import App from "./app";
import "alertifyjs/build/css/alertify.min.css";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
