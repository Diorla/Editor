//@ts-check
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "manageTheme",
  initialState: false,
  reducers: {
    changeTheme: (state) => !state,
    loadTheme: (state, { payload }) => payload,
  },
});

export const { changeTheme, loadTheme } = themeSlice.actions;
export default themeSlice.reducer;
