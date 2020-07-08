//@ts-check
import React from "react";
import { connect } from "react-redux";
import GeneratorDir from "./GeneratorDir";
import GeneratorParse from "./GeneratorParse";

const Generator = (props) => {
  const { aside } = props;
  return (
    <div>
      {aside.file ? <GeneratorParse /> : <GeneratorDir />}
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

export default connect(mapStateToProps, mapDispatchToProps)(Generator);
