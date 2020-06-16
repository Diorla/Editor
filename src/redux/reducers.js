//@ts-check
import {
  CHANGE_THEME,
  CLOSE_PROJECT,
  OPEN_PROJECT,
  OPEN_FOLDER,
  OPEN_FILE,
  OPEN_BLOG,
} from "./constant";

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

export const manageProject = (state, action) => {
  if (state === undefined)
    return {
      screen: "",
      activeProject: "",
      activeFolder: "",
      activeFile: "",
      activeBlog: "",
    };
  switch (action.type) {
    case OPEN_PROJECT:
      return {
        screen: "Project",
        activeProject: action.activeProject,
        activeFolder: "",
        activeFile: "",
        activeBlog: "",
      };
    case CLOSE_PROJECT:
      return {
        screen: "",
        activeProject: "",
        activeFolder: "",
        activeFile: "",
        activeBlog: "",
      };
    case OPEN_FOLDER:
      return {
        ...state, // activeProject
        screen: "Folder",
        activeFolder: action.activeFolder,
        activeFile: "",
        activeBlog: "",
      };
    case OPEN_FILE:
      return {
        ...state, // activeProject & activeFolder
        screen: "Page",
        activeFile: action.activeFile,
        activeBlog: "",
      };
    case OPEN_BLOG:
      return {
        screen: "Blog",
        activeProject: "",
        activeFolder: "",
        activeFile: "",
        activeBlog: action.activeBlog,
      };
    default:
      return state;
  }
};
