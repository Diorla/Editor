//@ts-check
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "manageTheme",
  initialState: false,
  reducers: {
    changeTheme: (state) => !state,
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
