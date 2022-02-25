import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { UserProvider } from "../src/context";
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
