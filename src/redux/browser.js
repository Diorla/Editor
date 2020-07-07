//@ts-check
import { createSlice } from "@reduxjs/toolkit";
import generateHash from "../utils/generateHash";

const browserSlice = createSlice({
  name: "manageBrowser",
  initialState: {
    route: "home",
    name: "",
    fullDir: "",
    data: {},
    tempKey: "",
    onChanged: false,
  },
  reducers: {
    closeProject(state) {
      state.route = "home";
      state.name = "";
      state.fullDir = "";
      state.data = {};
      state.tempKey = "";
      state.onChanged = false;
    },
    openProject(state, { payload }) {
      state.route = "projects";
      state.name = payload.name;
      state.fullDir = payload.fullDir;
      state.data = {};
      state.tempKey = generateHash();
      state.onChanged = false;
    },
    openCollection(state, { payload }) {
      state.route = "collection";
      state.name = payload.name;
      state.fullDir = payload.fullDir;
      state.data = {};
      state.tempKey = generateHash();
      state.onChanged = false;
    },
    openDocument(state, { payload }) {
      state.route = "document";
      state.name = payload.name;
      state.fullDir = payload.fullDir;
      state.data = {};
      state.tempKey = generateHash();
      state.onChanged = false;
    },
    // blogs, templates etc before the content is loaded
    openBrowser(state) {
      state.route = "empty";
      state.name = "";
      state.fullDir = "";
      state.data = {};
      state.tempKey = "";
      state.onChanged = false;
    },
    //blog.md, template.json etc
    openFile(state, { payload }) {
      state.route = payload.route;
      state.name = payload.name;
      state.fullDir = payload.fullDir;
    },
  },
});

export const {
  closeProject,
  openProject,
  openCollection,
  openDocument,
  openBrowser,
  openFile,
} = browserSlice.actions;

export default browserSlice.reducer;
