//@ts-check
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Layout from "./Layout";

export default () => {
  const { isDarkMode } = store.getState();
  return (
    <Provider store={store}>
      <Layout />
      <style>{`
          ::-webkit-scrollbar {
            width: 6px;
            background: ${isDarkMode ? "#232323" : "gray"}
          }
          ::-webkit-scrollbar-thumb {
            background-color: ${isDarkMode ? "gray" : "#303030"};
            height: 36px;
          }
        `}</style>
    </Provider>
  );
};
