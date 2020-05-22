import React from "react";
import { connect } from "react-redux";
import { OPEN_FILE } from "./../redux/constant";
//@ts-check

const Browser = (props) => {
  return (
    <div className="Browser">
      <div>{props.file}</div>
      <input
        value={props.file}
        onChange={(e) => props.updateFile(e.target.value)}
      />
      <div>name: {props.content.name}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  file: state.file,
  content: state.content,
});

const mapDispatchToProps = (dispatch) => ({
  // fnBlaBla: () => dispatch(action.name()),
  updateFile: (fileName) =>
    dispatch({
      type: OPEN_FILE,
      fileName,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Browser);
