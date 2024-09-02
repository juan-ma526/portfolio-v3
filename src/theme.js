import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FF007F",
    },
    secondary: {
      main: "#00FFFF",
    },
    error: {
      main: "#8A2BE2",
    },
    warning: {
      main: "#333333",
    },
    info: {
      main: "#00FF00",
    },
    text: {
      primary: "rgba(255,255,255,0.87)",
    },
  },
});

export default theme;
