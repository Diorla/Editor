import React from "react";
import { connect } from "react-redux";
//@ts-check

const SideBar = (props) => {
  return <div className="Sidebar">Test content</div>;
};

const mapStateToProps = (state) => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = (dispatch) => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
