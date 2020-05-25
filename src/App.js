//@ts-check
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Browser from "./sections/Browser";
import TitleBar from "./sections/TitleBar";
import jsonfile from 'jsonfile';
const { globalShortcut } = require("electron").remote;

globalShortcut.register("CommandOrControl+S", () => {
  const { file, content } = store.getState();
  jsonfile.writeFile(file, content);
  console.log("file saved")
});

export default () => {
  return (
    <Provider store={store}>
      <TitleBar />
      <Browser />
    </Provider>
  );
};
