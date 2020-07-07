//@ts-check
import React from "react";
import { connect } from "react-redux";
import FileTree from "./routes/FileTree";
import BlogTree from "./routes/BlogTree";
import HomeTree from "./routes/HomeTree";
import TemplateTree from "./routes/TemplateTree";
/**
 * @param {{ route: string; }} props
 */
const Router = (props) => {
  const { route } = props;
  if (route === "projects") return <FileTree />;
  else if (route === "blogs") return <BlogTree />;
  else if (route === "templates") return <TemplateTree />;
  else return <HomeTree />;
};

const mapStateToProps = (state) => ({
  route: state.sidebar.route,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  // dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Router);
