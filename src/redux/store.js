//@ts-check
import browser from "./browser";
import theme from "./theme";
import sidebar from "./sidebar";

import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    browser,
    sidebar,
    isDarkMode: theme,
  },
});
