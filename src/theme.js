import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    mode: "light",
    primary: {
      main: "#C0407A",
    },
    secondary: {
      main: "#00FFFF", //Celeste
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
