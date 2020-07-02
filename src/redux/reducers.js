//@ts-check
import {
  ON_SIDEBAR_CHANGE,
  CHANGE_THEME,
  ON_BROWSER_OPEN,
  ON_BROWSER_CLOSE,
  ON_BROWSER_CHANGE,
  ON_BROWSER_UPDATE,
} from "./constant";
import generateHash from "../utils/generateHash";

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

/**
 * @param {{name: string, fullDir: string, data: object, mode: string, tempKey: string, isChanged: boolean}} state
 * - name: the basename of the file
 * - fullDir: the full directory of the file
 * - data: The complete representation of the contents of the file
 * - mode: e.g. document, collectionConfig, projectConfig, home or blog.
 * - tempKey: the localforage key where all the data are backed up temporarily
 * - isChanged: If the file has changed is last time it was saved
 * @param {{ type: string; payload: {name: string, fullDir: string, data: object, mode: string}}} action
 */
export const manageBrowser = (state, action) => {
  if (state === undefined)
    return {
      mode: "home",
      onChanged: false,
    };
  const { payload } = action;
  switch (action.type) {
    case ON_BROWSER_OPEN: {
      return {
        ...payload,
        tempKey: generateHash(),
        onChanged: false,
      };
    }
    case ON_BROWSER_CLOSE: {
      return {
        mode: "home",
      };
    }
    case ON_BROWSER_CHANGE: {
      return { ...state, ...payload };
    }
    case ON_BROWSER_UPDATE:
      return { ...state, ...payload, isChanged: true };
    default:
      return state;
  }
};

// /**
//  * This will not update the content of the sidebar but merely serve as navigation means to determine which sidebar to render.
export const manageSidebar = (state, action) => {
  if (state === undefined)
    return {
      mode: "home", //| "project" | "blog"
      dir: "",
    };
  const { type, payload } = action;
  switch (type) {
    case ON_SIDEBAR_CHANGE:
      return {
        ...payload,
      };
    default:
      return state;
  }
};
