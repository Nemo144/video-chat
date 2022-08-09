import React from "react";
import ReactDOM from "react-dom";
import { ContextProvider } from "./SocketContext";
import App from "./App";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>
);
