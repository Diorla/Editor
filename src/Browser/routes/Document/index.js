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
  const { fullDir } = props.browser;
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
    init(fullDir, setState);
    return () => {
      console.log("unmounting");
    };
  }, [fullDir]);
  if (state.template)
    return (
      <div className={classes.content}>
        {isEditor.includes(state.template) && <Editor itemDir={fullDir} />}
        {state.template === "Location" && <Location itemDir={fullDir} />}
        {state.template === "Plot" && (
          <Plot state={state} setState={setState} itemDir={fullDir} />
        )}
        {state.template === "Story" && (
          <Story state={state} setState={setState} itemDir={fullDir} />
        )}
      </div>
    );
  return <div className={classes.content}></div>;
};

const mapStateToProps = (state) => ({
  browser: state.browser,
});

const mapDispatchToProps = (dispatch) => ({
  // dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
