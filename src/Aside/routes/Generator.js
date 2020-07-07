//@ts-check
import React from "react";
import { connect } from "react-redux";

const Template = (props) => {
  return <div>This is under aside</div>;
};

const mapStateToProps = (state) => ({
  browser: state.browser,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  // dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Template);
