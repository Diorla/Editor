//@ts-check
import React from "react";
import { connect } from "react-redux";
import FileTree from "../mode/sidebar/FileTree";
import BlogTree from "../mode/sidebar/BlogTree";
import HomeTree from "../mode/sidebar/HomeTree";
import TemplateTree from "../mode/sidebar/TemplateTree";
/**
 * @param {{ mode: string; }} props
 */
const Router = (props) => {
  const { mode } = props;
  if (mode === "projects") return <FileTree />;
  else if (mode === "blogs") return <BlogTree />;
  else if (mode === "templates") return <TemplateTree />;
  else return <HomeTree />;
};

const mapStateToProps = (state) => ({
  mode: state.sidebar.mode,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  // dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Router);
