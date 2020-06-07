//@ts-check
import { combineReducers, createStore } from "redux";
import { manageFile, manageContent, manageDir } from "./reducers";

const reducers = combineReducers({
  file: manageFile,
  content: manageContent,
  dir: manageDir,
});

export default createStore(reducers);
