//@ts-check
import { combineReducers, createStore } from "redux";
import {
  manageScreen,
  manageTheme,
  manageProject,
  manageProjectList,
} from "./reducers";

const reducers = combineReducers({
  screen: manageScreen,
  isDarkMode: manageTheme,
  projectList: manageProjectList,
  project: manageProject,
});

export default createStore(reducers);
