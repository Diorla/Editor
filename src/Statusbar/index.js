//@ts-check
import React from "react";
import { connect } from "react-redux";
import layoutStyles from "../components/layoutStyles";

const StatusBar = () => {
  const layout = layoutStyles();
  return (
    <main className={layout.bottom}>
      <div>Word count</div>
      <div>Character length</div>
      <div>Template</div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  // content: state.content,
});

const mapDispatchToProps = (dispatch) => ({
  // props
});

export default connect(mapStateToProps, mapDispatchToProps)(StatusBar);
