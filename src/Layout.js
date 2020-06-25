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
//TODO: Generator
/**
 * The dice icon at the titlebar will open another panel at the side of screen.
 * It will contain dropdown at the top for different possible template that
 * can be auto-generated e.g. character
 * Once you select a template, all the possible inputs that can be auto
 * generated will be rendered with options to fill some of them.
 * The inputs that have effects on other parts e.g. gender will be 
 * controlled (dropdown containing recognised genders) or select categories 
 * e.g. skintone (ie. white, offwhite, brown & black), hence black will generate
 * skin colours like chocolate/ebony, while white will generate colours like porcelain/milky
 * On each inputs, there will a copy icon, so that user can click them and copy them into
 * their own editor. 
 * To make it easier, this generator inputs will retain the last inputs so that they don't
 * lose information easily, and if they want to clear all inputs, a button will be provided
 * for that.
 * There will also be a freeze icon on each input to prevent it from being cleared in case
 * the user wants to retain this information which will in turn influence any new generated
 * information e.g. if all the characters are from the same country, just freeze the country.  
 */
/**
 * @param {{ isDarkMode: boolean; }} props
 */
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
