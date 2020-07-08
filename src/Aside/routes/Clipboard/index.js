//@ts-check
import React from "react";
import { connect } from "react-redux";
import ClipboardDir from "./ClipboardDir";
import ClipboardParse from "./ClipboardParse";

const Clipboard = (props) => {
  const { aside } = props;
  return (
    <div>
      {aside.file ? <ClipboardParse /> : <ClipboardDir />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  aside: state.aside,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  // dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Clipboard);
