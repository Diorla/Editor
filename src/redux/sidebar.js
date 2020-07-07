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
  },
});

export const { goHome, openSidebar, openTree } = sidebarSlice.actions;
export default sidebarSlice.reducer;
