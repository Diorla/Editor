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
 * @param {{ route: string; }} props
 */
const Router = (props) => {
  const { route } = props;
  if (route === "projects") return <Project />;
  else if (route === "collection") return <Collection />;
  else if (route === "document") return <Document />;
  else if (route === "blogs") return <Blog />;
  else if (route === "empty") return <Empty />;
  else if (route === "templates") return <Template />;
  else return <Home />;
};

/**
 * @param {{ browser: { route: string; }; }} state
 */
const mapStateToProps = (state) => ({
  route: state.browser.route,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  // dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Router);
