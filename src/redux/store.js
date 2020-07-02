//@ts-check
import { combineReducers, createStore } from "redux";
import { manageTheme, manageBrowser, manageSidebar } from "./reducers";

const reducers = combineReducers({
  isDarkMode: manageTheme,
  browser: manageBrowser,
  sidebar: manageSidebar,
});

export default createStore(reducers);
