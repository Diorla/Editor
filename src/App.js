//@ts-check
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Browser from "./sections/Browser";
import TitleBar from "./sections/TitleBar";
import jsonfile from "jsonfile";
import Sidebar from "./sections/Sidebar";
const { globalShortcut } = require("electron").remote;

globalShortcut.register("CommandOrControl+S", () => {
  const { file, content } = store.getState();
  jsonfile.writeFile(file, content);
  console.log("file saved");
});

export default () => {
  return (
    <Provider store={store}>
      <TitleBar />
      <div className="main">
        <Sidebar />
        <Browser />
      </div>
      <style jsx>{`
        .main {
          display: flex;
          flex: 1;
        }
      `}</style>
    </Provider>
  );
};
