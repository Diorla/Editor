//@ts-check
import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Browser from "./sections/Browser";
import TitleBar from "./sections/TitleBar";
// import jsonfile from "jsonfile";
import Sidebar from "./sections/Sidebar";
// const { globalShortcut } = require("electron").remote;
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  useMediaQuery,
  CssBaseline,
  Button,
  Container,
} from "@material-ui/core";

// globalShortcut.register("CommandOrControl+S", () => {
//   const { file, content } = store.getState();
//   jsonfile.writeFile(file, content);
//   console.log("file saved");
// });

export default () => {
  const [lightMode, setLightMode] = useState(true);
  const theme = createMuiTheme({
    palette: {
      type: lightMode ? "light" : "dark",
      primary: {
        light: "#ec9aa",
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
  });
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <TitleBar />
          <Button
            variant="contained"
            color="default"
            onClick={() => {
              console.log("toggle mode");
              setLightMode(!lightMode);
            }}
          >
            ToggleMode
          </Button>
          <Button variant="contained" color="primary">
            Hello
          </Button>
          <Button variant="contained" color="secondary">
            Hello
          </Button>
          <div className="main">
            <Sidebar />
            <Browser />
          </div>
        </Container>
      </ThemeProvider>
    </Provider>
  );
};
