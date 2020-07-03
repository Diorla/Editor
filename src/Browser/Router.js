//@ts-check
import React from "react";
import { connect } from "react-redux";
import Project from "../mode/browser/Project";
import Collection from "../mode/browser/Collection";
import Document from "../mode/browser/Document";
import Blog from "../mode/browser/Blog";
import Home from "../mode/browser/Home";
import Empty from "../mode/browser/Empty";

/**
 * @param {{ mode: string; }} props
 */
const Router = (props) => {
  const { mode } = props;
  if (mode === "project") return <Project />;
  else if (mode === "collection") return <Collection />;
  else if (mode === "document") return <Document />;
  else if (mode === "blog") return <Blog />;
  else if (mode === "empty") return <Empty />;
  else return <Home />;
};

/**
 * @param {{ browser: { mode: string; }; }} state
 */
const mapStateToProps = (state) => ({
  mode: state.browser.mode,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  // dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Router);
