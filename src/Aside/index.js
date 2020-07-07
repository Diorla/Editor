//@ts-check
import React from "react";
import { connect } from "react-redux";
import Router from "./Router";
import layoutStyles from "../components/layoutStyles";

const Aside = (props) => {
  const layout = layoutStyles();
  console.log("aside:", props.route);
  const cls = props.route === "home" ? layout.hide : layout.aside;
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

export default connect(mapStateToProps, mapDispatchToProps)(Aside);
