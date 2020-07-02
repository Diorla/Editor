//@ts-check
import React from "react";
import { connect } from "react-redux";
import Router from "./Router";
import useStyles from "../components/useStyles";

const Browser = () => {
  const classes = useStyles();
  return (
    <main className={classes.browser}>
      <Router />
    </main>
  );
};

/**
 * @param {{ screen: string; }} state
 */
const mapStateToProps = (state) => ({
  // state
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  // props
});

export default connect(mapStateToProps, mapDispatchToProps)(Browser);
