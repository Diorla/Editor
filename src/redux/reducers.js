//@ts-check
import {
  CHANGE_THEME,
  CLOSE_PROJECT,
  OPEN_PROJECT,
  OPEN_COLLECTION,
  OPEN_ITEM,
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
      projectName: "",
      collectionDir: "",
      itemDir: "",
      activeBlog: "",
    };
  switch (action.type) {
    case OPEN_PROJECT:
      return {
        screen: "Project",
        projectName: action.projectName,
        collectionDir: "",
        itemDir: "",
        activeBlog: "",
      };
    case CLOSE_PROJECT:
      return {
        screen: "",
        projectName: "",
        collectionDir: "",
        itemDir: "",
        activeBlog: "",
      };
    case OPEN_COLLECTION:
      return {
        ...state, // projectName
        screen: "Folder",
        collectionDir: action.collectionDir,
        itemDir: "",
        activeBlog: "",
      };
    case OPEN_ITEM:
      return {
        ...state, // projectName & collectionDir
        screen: "Page",
        itemDir: action.itemDir,
        activeBlog: "",
      };
    case OPEN_BLOG:
      return {
        screen: "Blog",
        projectName: "",
        collectionDir: "",
        itemDir: "",
        activeBlog: action.activeBlog,
      };
    default:
      return state;
  }
};
