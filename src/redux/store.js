//@ts-check
import { combineReducers, createStore } from "redux";
import { manageScreen } from "./reducers";

const reducers = combineReducers({
  screen: manageScreen,
});

export default createStore(reducers);
