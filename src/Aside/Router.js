//@ts-check
import React from "react";
import { connect } from "react-redux";
import Home from "./routes/Home";
import Clipboard from "./routes/Clipboard";
import Compare from "./routes/Compare";
import Generator from "./routes/Generator";

/**
 * @param {{ route: string; }} props
 */
const Router = (props) => {
  const { route } = props;
  if (route === "generator") return <Generator />;
  else if (route === "clipboard") return <Clipboard />;
  else if (route === "compare") return <Compare />;
  else return <Home />;
};

/**
 * @param {{ aside: { route: string; }; }} state
 */
const mapStateToProps = (state) => ({
  route: state.aside.route,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  // dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Router);
