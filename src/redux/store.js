//@ts-check
import { combineReducers, createStore } from "redux";
import { manageTheme, manageProject } from "./reducers";

const reducers = combineReducers({
  isDarkMode: manageTheme,
  project: manageProject,
});

export default createStore(reducers);
