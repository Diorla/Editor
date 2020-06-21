//@ts-check
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import init from "./init";
import Character from "./Character";
import saveConfig from "./saveConfig";
import Plot from "./Plot";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
}));

const Page = ({ project }) => {
  const classes = useStyles();
  const [state, setState] = useState({ template: "" });
  const { itemDir } = project;

  useEffect(() => {
    init(itemDir, setState);
    return () => {
      console.log("unmounting");
    };
  }, [itemDir]);
  return (
    <main className={classes.content}>
      {state.template === "Character" && (
        <Character
          state={state}
          setState={setState}
          saveConfig={() => saveConfig(state, itemDir)}
        />
      )}
      {state.template === "Creature" && <div>Creature</div>}
      {state.template === "Default" && <div>Default</div>}
      {state.template === "Location" && <div>Location</div>}
      {state.template === "Magic" && <div>Magic</div>}
      {state.template === "Note" && <div>Note</div>}
      {state.template === "Objects" && <div>Objects</div>}
      {state.template === "Organisation" && <div>Organisation</div>}
      {state.template === "Plot" && (
        <Plot
          state={state}
          setState={setState}
          itemDir={itemDir}
        />
      )}
      {state.template === "Story" && <div>Story</div>}
      {state.template === "World" && <div>World</div>}
    </main>
  );
};

const mapStateToProps = (state) => ({
  project: state.project,
});

const mapDispatchToProps = (dispatch) => ({
  // dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
