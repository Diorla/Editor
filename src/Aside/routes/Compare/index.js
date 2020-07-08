//@ts-check
import React from "react";
import { connect } from "react-redux";
import CompareDir from "./CompareDir";
import CompareParse from "./CompareParse";

const Compare = (props) => {
  const { aside } = props;
  return (
    <div>
      {aside.file ? <CompareParse /> : <CompareDir />}
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

export default connect(mapStateToProps, mapDispatchToProps)(Compare);
