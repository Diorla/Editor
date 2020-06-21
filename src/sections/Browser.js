//@ts-check
import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import BrowserRoutes from "./BrowserRoutes";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
}));

const Browser = ({ screen }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <BrowserRoutes />
    </main>
  );
};

/**
 * @param {{ screen: string; }} state
 */
const mapStateToProps = (state) => ({
  screen: state.screen,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  // props
});

export default connect(mapStateToProps, mapDispatchToProps)(Browser);
