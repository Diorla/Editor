//@ts-check
import React from "react";
import { connect } from "react-redux";
import FileTree from "../mode/sidebar/FileTree";
import BlogTree from "../mode/sidebar/BlogTree";
import HomeTree from "../mode/sidebar/HomeTree";
/**
 * @param {{ mode: string; }} props
 */
const Router = (props) => {
  const { mode } = props;
  if (mode === "project") return <FileTree />;
  else if (mode === "blog") return <BlogTree />;
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
