//@ts-check

import { createMuiTheme } from "@material-ui/core";

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    secondary: {
      light: "#ec9aa",
      main: "#ddbc95",
      dark: "#9a8368",
      contrastText: "black",
    },
    primary: {
      light: "#00695f",
      main: "#009688",
      dark: "#33ab9f",
      contrastText: "white",
    },
  },
});

export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    secondary: {
      light: "#ec9aa",
      main: "#ddbc95",
      dark: "#9a8368",
    },
    primary: {
      light: "#00695f",
      main: "#009688",
      dark: "#33ab9f",
    },
  },
});
