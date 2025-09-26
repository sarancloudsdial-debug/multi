import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HashRouter } from "react-router-dom";

const root = document.getElementById("root") as HTMLElement;
const base = import.meta.env.BASE_URL || "/";
ReactDOM.createRoot(root).render(

  <HashRouter>
    <App />
</HashRouter>
);
