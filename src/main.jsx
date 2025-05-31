import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// STORE
import { App } from "./App";

const entryPoint = document.getElementById("root");

ReactDOM.createRoot(entryPoint).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
