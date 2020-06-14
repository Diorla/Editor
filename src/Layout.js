//@ts-check
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import TitleBar from "./sections/TitleBar";
import Sidebar from "./sections/Sidebar";
import Browser from "./sections/Browser";
import StatusBar from "./sections/StatusBar";
import { ThemeProvider } from "@material-ui/core/styles";
import { lightTheme, darkTheme } from "./themeMode";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function Layout(props) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={props.isDarkMode ? darkTheme : lightTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <TitleBar />
        <Sidebar />
        <Browser />
        <StatusBar />
      </div>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  isDarkMode: state.isDarkMode,
});

const mapDispatchToProps = (dispatch) => ({
  //
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
