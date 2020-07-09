//@ts-check
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TitleBar from "./TitleBar";
import Sidebar from "./Sidebar";
import Browser from "./Browser";
import Statusbar from "./Statusbar";
import { ThemeProvider } from "@material-ui/core/styles";
import { lightTheme, darkTheme } from "./themeMode";
import { connect } from "react-redux";
import Aside from "./Aside";
import layoutStyles from "./components/layoutStyles";
import { loadApp } from "./redux/appLoaded";
import jsonfile from "jsonfile";
import ErrorLog from "./components/ErrorLog";
import { loadTheme } from "./redux/theme";
import { loadAside } from "./redux/aside";
import { loadBrowser } from "./redux/browser";
import { loadSidebar } from "./redux/sidebar";

/**
 * @param {{ isDarkMode: boolean; appLoaded: boolean; loadTheme: (isDarkMode: boolean)=> void; loadApp: ()=> void; loadAside: (payload: object)=> void; loadBrowser: (payload: object)=> void; loadSidebar: (payload: object)=> void; }} props
 */
function Layout(props) {
  const layout = layoutStyles();
  const {
    isDarkMode,
    appLoaded,
    loadTheme,
    loadApp,
    loadAside,
    loadBrowser,
    loadSidebar,
  } = props;
  const theme = isDarkMode ? darkTheme : lightTheme;
  if (appLoaded)
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TitleBar />
        <main className={layout.middle}>
          <Sidebar />
          <Browser />
          <Aside />
        </main>
        <Statusbar />
        <style>
          {`
          ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
            background: transparent;
          }
          ::-webkit-scrollbar-thumb {
            background-color: ${theme.palette.secondary.light};
            height: 36px;
            border-radius: 4px
          }
          ::-webkit-scrollbar-thumb:hover {
            background-color: ${theme.palette.secondary.main};
          }
        `}
        </style>
      </ThemeProvider>
    );
  else {
    jsonfile.readFile("tmp", (err, data) => {
      if (err) ErrorLog(err);
      else {
        loadTheme(data.isDarkMode);
        loadAside(data.aside);
        loadBrowser(data.browser);
        loadSidebar(data.sidebar);
        loadApp();
      }
    });
  }
  return null;
}

/**
 * @param {{ isDarkMode: boolean; appLoaded: boolean }} state
 */
const mapStateToProps = (state) => ({
  isDarkMode: state.isDarkMode,
  appLoaded: state.appLoaded,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  loadApp: () => dispatch(loadApp()),
  /**
   * @param {boolean} isDarkMode
   */
  loadTheme: (isDarkMode) => dispatch(loadTheme(isDarkMode)),
  /**
   * @param {object} payload
   */
  loadAside: (payload) => dispatch(loadAside(payload)),
  /**
   * @param {object} payload
   */
  loadBrowser: (payload) => dispatch(loadBrowser(payload)),
  /**
   * @param {object} payload
   */
  loadSidebar: (payload) => dispatch(loadSidebar(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
