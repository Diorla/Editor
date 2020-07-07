//@ts-check

import { createMuiTheme } from "@material-ui/core";

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    secondary: {
      light: "#e3c9aa",
      main: "#ddbc95",
      dark: "#9a8368"
    },
    primary: {
      dark: "#00695f",
      main: "#009688",
      light: "#33ab9f",
    },
  },
});

export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    secondary: {
      light: "#e3c9aa",
      main: "#ddbc95",
      dark: "#9a8368",
    },
    primary: {
      dark: "#00695f",
      main: "#009688",
      light: "#33ab9f",
    },
  },
});
