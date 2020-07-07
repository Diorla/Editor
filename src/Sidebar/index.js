//@ts-check
import React from "react";
import { connect } from "react-redux";
import Router from "./Router";
import layoutStyles from "../components/layoutStyles";

const SideBar = (props) => {
  const layout = layoutStyles();
  return (
    <main className={layout.sidebar}>
      <Router />
    </main>
  );
};

const mapStateToProps = (state) => ({
  screen: state.screen,
});

const mapDispatchToProps = (dispatch) => ({
  //
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
