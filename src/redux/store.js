//@ts-check
import browser from "./browser";
import theme from "./theme";
import sidebar from "./sidebar";
import aside from "./aside";

import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    browser,
    sidebar,
    aside,
    isDarkMode: theme,
  },
});
