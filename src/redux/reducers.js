//@ts-check
import { CHANGE_SCREEN } from "./constant";

export const manageScreen = (state, action) => {
  if (state === undefined) return "";
  switch (action.type) {
    case CHANGE_SCREEN:
      return action.screen;
    default:
      return state;
  }
};
