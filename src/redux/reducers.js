//@ts-check
import { CHANGE_SCREEN, CHANGE_THEME } from "./constant";

/**
 * @param {string} state
 * @param {{ type: string; screen: string; }} action
 */
export const manageScreen = (state, action) => {
  if (state === undefined) return "";
  switch (action.type) {
    case CHANGE_SCREEN:
      return action.screen;
    default:
      return state;
  }
};

/**
 * @param {boolean} state
 * @param {{ type: string; }} action
 */
export const manageTheme = (state, action) => {
  if (state === undefined) return true;
  switch (action.type) {
    case CHANGE_THEME:
      return !state;
    default:
      return state;
  }
};
