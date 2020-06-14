//@ts-check
import { combineReducers, createStore } from "redux";
import { manageScreen, manageTheme } from "./reducers";

const reducers = combineReducers({
  screen: manageScreen,
  isDarkMode: manageTheme,
});

export default createStore(reducers);
