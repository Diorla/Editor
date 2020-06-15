//@ts-check
import { combineReducers, createStore } from "redux";
import { manageScreen, manageTheme } from "./reducers";
import { manageProjects } from "./reducers";

const reducers = combineReducers({
  screen: manageScreen,
  isDarkMode: manageTheme,
  projectList: manageProjects,
});

export default createStore(reducers);
