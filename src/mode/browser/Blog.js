//@ts-check
import React from "react";
import { connect } from "react-redux";

const Blog = (props) => {
  return <div>This is blog</div>;
};

const mapStateToProps = (state) => ({
  mode: state.browser.mode,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  // dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
