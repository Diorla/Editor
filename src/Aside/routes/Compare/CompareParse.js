//@ts-check
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import init from "./init";
import Plot from "./Plot";
import Location from "./Location";
import useStyles from "./useStyles";
import Story from "./Story";
import Editor from "../../../components/Editor";

const Page = (props) => {
  const classes = useStyles();
  const [state, setState] = useState({ template: "", content: "" });
  const { file } = props.aside;
  const isEditor = [
    "Character",
    "Creature",
    "Default",
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
        {isEditor.includes(state.template) && <Editor itemDir={file} readonly/>}
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

const mapStateToProps = (state) => ({
  aside: state.aside,
});

const mapDispatchToProps = (dispatch) => ({
  // dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
