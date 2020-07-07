//@ts-check
import { createSlice } from "@reduxjs/toolkit";

const asideSlice = createSlice({
  name: "changeAside",
  initialState: {
    route: "home",
    dir: "",
  },
  reducers: {
    goHome(state) {
      state.route = "home";
      state.dir = "";
    },
    openGenerator(state, { payload }) {
      state.route = "generator";
      state.dir = payload;
    },
    openClipboard(state, { payload }) {
      state.route = "clipboard";
      state.dir = payload;
    },
    openCompare(state, { payload }) {
      state.route = "compare";
      state.dir = payload;
    },
  },
});

export const {
  goHome,
  openGenerator,
  openClipboard,
  openCompare,
} = asideSlice.actions;
export default asideSlice.reducer;
