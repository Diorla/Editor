//@ts-check
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import init from "./init";
import Plot from "./Plot";
import Location from "./Location";
import Magic from "./Magic";
import Default from "./Default";
import Objects from "./Objects";
import Organisation from "./Organisation";
import World from "./World";
import useStyles from "./useStyles";
import Story from "./Story";
import Quill from "./Quill";

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
  const quilled = ["Character", "Creature"];
  useEffect(() => {
    init(itemDir, setState);
    return () => {
      console.log("unmounting");
    };
  }, [itemDir]);
  return (
    <main className={classes.content}>
      {/*state.template === "Character" && (
        <Character state={state} setState={setState} itemDir={itemDir} />
      )*/}
      {quilled.includes(state.template) && (
        <Quill
          content={state.content}
          onChange={(content) =>
            setState({
              ...state,
              content,
            })
          }
        />
      )}
      {/*state.template === "Creature" && (
        <Creature state={state} setState={setState} itemDir={itemDir} />
      )*/}
      {state.template === "Default" && (
        <Default state={state} setState={setState} itemDir={itemDir} />
      )}
      {state.template === "Location" && (
        <Location state={state} setState={setState} itemDir={itemDir} />
      )}
      {state.template === "Magic" && (
        <Magic state={state} setState={setState} itemDir={itemDir} />
      )}
      {state.template === "Objects" && (
        <Objects state={state} setState={setState} itemDir={itemDir} />
      )}
      {state.template === "Organisation" && (
        <Organisation state={state} setState={setState} itemDir={itemDir} />
      )}
      {state.template === "Plot" && (
        <Plot state={state} setState={setState} itemDir={itemDir} />
      )}
      {state.template === "Story" && (
        <Story state={state} setState={setState} itemDir={itemDir} />
      )}
      {state.template === "World" && (
        <World state={state} setState={setState} itemDir={itemDir} />
      )}
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
