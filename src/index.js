import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./router/AppRouter";
import { AppContextProvider } from "./state/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <AppRouter />
    </AppContextProvider>
  </React.StrictMode>
);
