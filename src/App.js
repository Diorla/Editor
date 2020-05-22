import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Browser from "./sections/Browser";
//@ts-check
export default (props) => {
  return (
    <Provider store={store}>
      <div>This is app</div>;
      <Browser />
    </Provider>
  );
};
