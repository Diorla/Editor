//@ts-check
import { createSlice } from "@reduxjs/toolkit";

const appLoadedSlice = createSlice({
  name: "manageAppLoaded",
  initialState: false,
  reducers: {
    changeAppLoaded: (state) => !state,
    loadApp: (state) => true,
  },
});

export const { changeAppLoaded, loadApp } = appLoadedSlice.actions;
export default appLoadedSlice.reducer;
