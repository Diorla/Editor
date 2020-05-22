//@ts-check
import { UPDATE_FILE, RESET_FILE, OPEN_FILE } from "./constant";

/**
 * For navigating between different tabs
 * @param {{ activeFile: any; }} state
 * @param {{ type: any; fileName: any; }} action
 */
export const manageFile = (state, action) => {
  if (state === undefined) return "active";
  switch (action.type) {
    case OPEN_FILE:
      return action.fileName
    default:
      return state;
  }
};

/**
 * Update the content of current file
 * @param {{ content: any; }} state
 * @param {{ type: any; payload: any; }} action
 */
export const manageContent = (state, action) => {
  if (state === undefined)
    return {
      name: "testing",
    };
  switch (action.type) {
    case UPDATE_FILE:
      return {
        ...state.content,
        ...action.payload,
      };
    case RESET_FILE:
      return {};
    default:
      return state;
  }
};
