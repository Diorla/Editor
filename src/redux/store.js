//@ts-check
import { combineReducers, createStore } from "redux";
import { manageFile, manageContent } from "./reducers";

const reducers = combineReducers({
  file: manageFile,
  content: manageContent,
});

export default createStore(reducers);
