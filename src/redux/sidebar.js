//@ts-check
import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "changeSidebar",
  initialState: {
    mode: "home",
    dir: "",
  },
  reducers: {
    goHome(state) {
      state.mode = "home";
      state.dir = "";
    },
    openSidebar(state, { payload }) {
      state.mode = payload;
      state.dir = "";
    },
    openTree(state, { payload }) {
      state.mode = "projects";
      state.dir = payload;
    },
  },
});

export const { goHome, openSidebar, openTree } = sidebarSlice.actions;
export default sidebarSlice.reducer;
