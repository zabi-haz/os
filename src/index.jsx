import * as ReactDOM from "react-dom/client";
import React from "react";
import App from "./app";

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
