//@ts-check
import React from "react";
import { connect } from "react-redux";
import Router from "./Router";
import layoutStyles from "../components/layoutStyles";

const Browser = (props) => {
  const layout = layoutStyles();
  const cls = props.route === "home" ? layout.browserFull : layout.browser;
  return (
    <main className={cls}>
      <Router />
    </main>
  );
};

const mapStateToProps = (state) => ({
  route: state.aside.route,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  // props
});

export default connect(mapStateToProps, mapDispatchToProps)(Browser);
