//@ts-check
import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import store from "./redux/store";
import { lightTheme, darkTheme } from "./themeMode";
import Layout from "./Layout";

export default () => {
  // const [lightMode, setLightMode] = useSelector(false);
  const isDark = Math.random() < 0.5;
  return (
    <Provider store={store}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Layout />
        <style>{`
          ::-webkit-scrollbar {
            width: 6px;
            background: ${isDark ? "#232323" : "white"}
          }
          ::-webkit-scrollbar-thumb {
            background-color: ${isDark ? "white" : "#303030"};
            height: 36px;
          }
        `}</style>
      </ThemeProvider>
    </Provider>
  );
};
