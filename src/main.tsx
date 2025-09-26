import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
 
const root = document.getElementById("root") as HTMLElement;
const base = import.meta.env.BASE_URL || "/";
ReactDOM.createRoot(root).render(
 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 
 