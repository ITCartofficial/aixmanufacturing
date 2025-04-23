import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import '@fontsource/dm-sans/400.css';   // Regular
import '@fontsource/dm-sans/500.css';   // Medium
import '@fontsource/dm-sans/600.css';   // Semi-Bold
import '@fontsource/dm-sans/700.css';   // Bold

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
