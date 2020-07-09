//@ts-check
import { createSlice } from "@reduxjs/toolkit";

const asideSlice = createSlice({
  name: "changeAside",
  initialState: {
    route: "home", //generator, clipboard, project
    dir: "", //./generator, .clipboard or ./projects/:project-name
    file: "", //the file name for generator or clipboard, and the fullDir of document
  },
  reducers: {
    closeAside(state) {
      state.route = "home";
      state.dir = "";
      state.file = "";
    },
    openGenerator(state, { payload }) {
      state.route = "generator";
      state.dir = "./generator";
      state.file = payload;
    },
    openClipboard(state, { payload }) {
      state.route = "clipboard";
      state.dir = "./clipboard";
      state.file = payload;
    },
    openCompare(state, { payload }) {
      state.route = "compare";
      state.dir = payload.dir || state.dir;
      state.file = payload.file;
    },
    loadAside(state, { payload }) {
      state.route = payload.route;
      state.dir = payload.dir;
      state.file = payload.file;
    },
  },
});

export const {
  closeAside,
  openGenerator,
  openClipboard,
  openCompare,
  loadAside,
} = asideSlice.actions;
export default asideSlice.reducer;
