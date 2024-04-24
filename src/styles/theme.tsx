import { DefaultTheme } from "styled-components";
import { breakFonts, breakpoints } from "./breakpoints";

export const theme: DefaultTheme = {
  colors: {
    alert: {
      main: "",
      light: ""
    },
    danger: {
      main: "",
      light: ""
    },
    primary: {
      main: "",
      light: "",
    },
    secondary: {
      main: "",
      light: "",
    },
    third: {
      main: "",
      light: "",
    },
    light: {
      main: "",
      light: "",
    },
    success: {
      main: "",
      light: "",
    },
  },
  limits: {
    content: "800px",
  },
  breakpoints,
  font: {
    family: {
      Poppins: "'Poppins', sans-serif",
      Roboto: "'Roboto', sans-serif",
    },
    size: breakFonts.lg
  },
};

