import React from "react";
import { connect } from "react-redux";
//@ts-check

const StatusBar = (props) => {
  return <div className="StatusBar">Test content</div>;
};

const mapStateToProps = (state) => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = (dispatch) => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatusBar);
