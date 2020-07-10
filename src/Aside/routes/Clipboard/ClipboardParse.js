//@ts-check
import React from "react";
import { connect } from "react-redux";
import Editor from "../../../components/Editor";
import HeaderOne from "../../../components/HeaderOne";
import path from "path";

const Clipboard = (props) => {
  const { aside } = props;
  const { dir, file } = aside;
  return (
    <div>
      <HeaderOne>{path.basename(aside.file, ".json")}</HeaderOne>
      <Editor itemDir={`${dir}/${file}`} />
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
