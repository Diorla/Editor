import React from "react";
import { connect } from "react-redux";
//@ts-check

const TitleBar = (props) => {
  return <div className="TitleBar">Test content</div>;
};

const mapStateToProps = (state) => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = (dispatch) => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar);
