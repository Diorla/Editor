//@ts-check
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Layout from "./Layout";

export default () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};
