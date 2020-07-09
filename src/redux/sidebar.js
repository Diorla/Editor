//@ts-check
import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "changeSidebar",
  initialState: {
    route: "home",
    dir: "",
  },
  reducers: {
    goHome(state) {
      state.route = "home";
      state.dir = "";
    },
    openSidebar(state, { payload }) {
      state.route = payload;
      state.dir = "";
    },
    openTree(state, { payload }) {
      state.route = "projects";
      state.dir = payload;
    },
    loadSidebar(state, { payload }) {
      state.route = payload.route;
      state.dir = payload.dir;
    },
  },
});

export const {
  goHome,
  openSidebar,
  openTree,
  loadSidebar,
} = sidebarSlice.actions;
export default sidebarSlice.reducer;
