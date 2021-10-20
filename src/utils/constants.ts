/* eslint-disable max-len */
import { createTheme } from "@mui/material/styles";
import BarlowRegularTTF from "../assets/fonts/Barlow/Barlow-Regular.ttf";

export const APPNAME = "web-app";

export const THEME_STYLE = createTheme({
  palette: {
    primary: {
      light: "#77a6ff",
      main: "#3c78d8",
      dark: "#004da6",
      contrastText: "#fff",
    },
    secondary: {
      light: "#f44336",
      main: "#ff7961",
      dark: "#ba000d",
      contrastText: "#000",
    },
    info: {
      light: "#f44336",
      main: "#bb271a",
      dark: "#ba000d",
      contrastText: "#fff",
    },
    text: {
      primary: "#415852",
      secondary: "#5D6F6B",
    },
    background: {
      default: "#f9f9f9",
    },
  },
  typography: {
    fontFamily: [
      "Barlow",
      "sans-serif",
      "Roboto",
      "Arial",
      "sans-serif",
      "'Apple Color Emoji'",
      "'Segoe UI Emoji'",
      "'Segoe UI Symbol'",
    ].join(","),
    h4: {
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h5: {
      fontWeight: 700,
      fontSize: "15px",
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    body1: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "22.4px",
      letterSpacing: "0.00735em",
    },
    button: {
      textTransform: "capitalize",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: 1.135,
      letterSpacing: "0.00735em",
    },
  },
});
