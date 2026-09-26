import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import { applyTheme, getSavedTheme } from "./lib/theme";
import "./index.css";

const savedTheme = getSavedTheme();
if (savedTheme) applyTheme(savedTheme);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
