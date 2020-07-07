//@ts-check
import React from "react";
import { connect } from "react-redux";
import Project from "./routes/Project";
import Collection from "./routes/Collection";
import Document from "./routes/Document";
import Blog from "./routes/Blog";
import Home from "./routes/Home";
import Empty from "./routes/Empty";
import Template from "./routes/Template";

/**
 * @param {{ mode: string; }} props
 */
const Router = (props) => {
  const { mode } = props;
  if (mode === "projects") return <Project />;
  else if (mode === "collection") return <Collection />;
  else if (mode === "document") return <Document />;
  else if (mode === "blogs") return <Blog />;
  else if (mode === "empty") return <Empty />;
  else if (mode === "templates") return <Template />;
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
