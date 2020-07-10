//@ts-check
import React from "react";
import { connect } from "react-redux";
import Router from "./Router";
import useStyles from "./useStyles";

/**
 * @param {{ route: string; }} props
 */
const Aside = (props) => {
  const classes = useStyles();
  const cls = props.route === "home" ? classes.hide : classes.aside;
  return (
    <main className={cls}>
      <Router />
    </main>
  );
};

/**
 * @param {{ aside: { route: any; }; }} state
 */
const mapStateToProps = (state) => ({
  route: state.aside.route,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  // props
});

export default connect(mapStateToProps, mapDispatchToProps)(Aside);
