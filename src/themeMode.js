//@ts-check

import { createMuiTheme } from "@material-ui/core";

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#e3c9aa",
      main: "#ddbc95",
      dark: "#9a8368",
      contrastText: "black",
    },
    secondary: {
      light: "#00695f",
      main: "#009688", // teal
      dark: "#33ab9f",
      contrastText: "white",
    },
  },
  props: {
    MuiTextField: {
      style: {
        margin: 2,
      },
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
