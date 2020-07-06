//@ts-check
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import TitleBar from "./TitleBar";
import Sidebar from "./Sidebar";
import Browser from "./Browser";
import Statusbar from "./Statusbar";
import { ThemeProvider } from "@material-ui/core/styles";
import { lightTheme, darkTheme } from "./themeMode";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

/**
 * @param {{ isDarkMode: boolean; }} props
 */
function Layout(props) {
  const classes = useStyles();
  const theme = props.isDarkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <TitleBar />
        <Sidebar />
        <Browser />
        <Statusbar />
      </div>
      <style>
        {`
          ::-webkit-scrollbar {
            width: 6px;
            background: #232323;
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
