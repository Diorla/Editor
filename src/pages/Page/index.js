//@ts-check
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import init from "./init";
import Character from "./Character";
import Plot from "./Plot";
import Creature from "./Creature";
import Location from "./Location";

// TODO: Remove <Note />
/**
 * Note will be provided via the titlebar and accessible from anywhere
 * in the app.
 * And the default template will serve as purpose of generic no format
 * template. 
 * In the note, I will add "clipboard icon" to each textinput, so that user
 * can just copy the content of that textfield. 
 * So, I will have to create a store.clipboard(string) as well as store.notes(an array)
 */
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
        <Character state={state} setState={setState} itemDir={itemDir} />
      )}
      {state.template === "Creature" && (
        <Creature state={state} setState={setState} itemDir={itemDir} />
      )}
      {state.template === "Default" && <div>Default</div>}
      {state.template === "Location" && (
        <Location state={state} setState={setState} itemDir={itemDir} />
      )}
      {state.template === "Magic" && <div>Magic</div>}
      {state.template === "Note" && <div>Note</div>}
      {state.template === "Objects" && <div>Objects</div>}
      {state.template === "Organisation" && <div>Organisation</div>}
      {state.template === "Plot" && (
        <Plot state={state} setState={setState} itemDir={itemDir} />
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
