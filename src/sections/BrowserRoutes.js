//@ts-check
import React from "react";
import { connect } from "react-redux";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Folder from "../pages/Folder";
import Page from "../pages/Page/index";
import Project from "./../pages/Project/index";

/**
 * @param {{ screen: string; }} props
 */
const BrowserRoutes = (props) => {
  const { screen } = props;
  if (screen === "Blog") return <Blog />;
  else if (screen === "Page") return <Page />;
  else if (screen === "Folder") return <Folder />;
  else if (screen === "Project") return <Project />;
  else return <Home />;
};

/**
 * @param {{ project: { screen: string; }; }} state
 */
const mapStateToProps = (state) => ({
  screen: state.project.screen,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  // dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowserRoutes);
