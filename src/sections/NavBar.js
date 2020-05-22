import React from "react";
import { connect } from "react-redux";
//@ts-check

const NavBar = (props) => {
  return <div className="NavBar">Test content</div>;
};

const mapStateToProps = (state) => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = (dispatch) => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
