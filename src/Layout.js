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

/**
 * @param {{ isDarkMode: boolean; }} props
 */
function Layout(props) {
  const layout = layoutStyles();
  const theme = props.isDarkMode ? darkTheme : lightTheme;
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
}

/**
 * @param {{ isDarkMode: boolean; }} state
 */
const mapStateToProps = (state) => ({
  isDarkMode: state.isDarkMode,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  //
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
