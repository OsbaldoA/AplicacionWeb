import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { FuncionContexto } from "./contexto/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FuncionContexto>
      <App />
    </FuncionContexto>
  </React.StrictMode>
);
