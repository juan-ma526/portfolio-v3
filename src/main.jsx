import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.js";
import App from "./App.jsx";
import "./index.css";
import { CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
