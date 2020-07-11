//@ts-check
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import init from "./init";
import Plot from "./Plot";
import Location from "./Location";
import useStyles from "./useStyles";
import Story from "./Story";
import Editor from "../../../components/Editor";
import HeaderOne from "../../../components/HeaderOne";
import basename from "../../../utils/basename";

/**
 * @param {{ aside: { file: string; }; }} props
 */
const ParseCompare = (props) => {
  const classes = useStyles();
  const [state, setState] = useState({ template: "", content: "" });
  const { file } = props.aside;
  const isEditor = [
    "Blank",
    "Character",
    "Creature",
    "Magic",
    "Objects",
    "Organisation",
    "World",
  ];
  useEffect(() => {
    init(file, setState);
    return () => {
      console.log("unmounting");
    };
  }, [file]);
  if (state.template)
    return (
      <div className={classes.content}>
        <HeaderOne>{basename(file)}</HeaderOne>
        {isEditor.includes(state.template) && (
          <Editor itemDir={file} readonly />
        )}
        {state.template === "Location" && <Location itemDir={file} />}
        {state.template === "Plot" && (
          <Plot state={state} setState={setState} itemDir={file} />
        )}
        {state.template === "Story" && (
          <Story state={state} setState={setState} itemDir={file} />
        )}
      </div>
    );
  return <div className={classes.content}></div>;
};

/**
 * @param {{ aside: { file: string; }; }} state
 */
const mapStateToProps = (state) => ({
  aside: state.aside,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  // dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(ParseCompare);
