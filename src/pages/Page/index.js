//@ts-check
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import init from "./init";
import Plot from "./Plot";
import Location from "./Location";
import Organisation from "./Organisation";
import World from "./World";
import useStyles from "./useStyles";
import Story from "./Story";
import Editor from "../../components/Editor";

// TODO: More on <Note />
/**
 * Note will be provided via the titlebar and accessible from anywhere
 * in the app.
 * And the default template will serve as purpose of generic no-format
 * template.
 * In the note, I will add "clipboard icon" to each textinput, so that user
 * can just copy the content of that textfield.
 * So, I will have to create a store.clipboard(string) as well as store.notes(an array)
 */
// TODO: Add specific icon to each page
/**
 * I should reduce the icons on the titlebar and render it based on the page.
 * Each page should have different icon.
 * For example character.js will contain "randomise icon"
 */

const Page = ({ project }) => {
  const classes = useStyles();
  const [state, setState] = useState({ template: "", content: "" });
  const { itemDir } = project;
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
    init(itemDir, setState);
    return () => {
      console.log("unmounting");
    };
  }, [itemDir]);
  if (state.template)
    return (
      <main className={classes.content}>
        {isEditor.includes(state.template) && <Editor itemDir={itemDir} />}
        {state.template === "Location" && <Location itemDir={itemDir} />}
        {state.template === "Plot" && (
          <Plot state={state} setState={setState} itemDir={itemDir} />
        )}
        {state.template === "Story" && (
          <Story state={state} setState={setState} itemDir={itemDir} />
        )}
      </main>
    );
  return <main className={classes.content}></main>;
};

const mapStateToProps = (state) => ({
  project: state.project,
});

const mapDispatchToProps = (dispatch) => ({
  // dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
