//@ts-check
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
import useStyles from "./useStyles";
import Accordion from "../../../components/Accordion";
import { SimpleInput } from "../../../components/Input";
import Editor from "../../../components/Editor";
import jsonfile from "jsonfile";
import ErrorLog from "../../../components/ErrorLog";

const Story = (props) => {
  const { itemDir } = props;
  const [state, setState] = useState({
    name: "",
    summary: "",
    goal: "",
    premise: "",
  });
  const classes = useStyles();
  useEffect(() => {
    jsonfile.readFile(itemDir, (err, data) => {
      if (err) ErrorLog(err);
      else {
        const { name, summary, goal, premise } = data;
        setState({ name, summary, goal, premise });
      }
    });
    return () => {
      console.log("unmounting");
    };
  }, [itemDir]);

  return (
    <div className={classes.content}>
      <Accordion
        header={<Typography className={classes.header}>Basics</Typography>}
      >
        <SimpleInput
          value={state.name}
          label="Title"
          placeholder="Prologue, chapter 1, Once upon a time"
          disabled
        />
        <SimpleInput
          value={state.summary}
          disabled
          label="Summary"
          placeholder="Kehinde in bed, gets up and goes to work where he's fired and his entire day goes awry."
        />
        <SimpleInput
          value={state.goal}
          disabled
          label="Goal"
          placeholder="Introduces the antagonist and his dream, a filler or give the protagonist something to fight for."
        />
        <SimpleInput
          value={state.premise}
          disabled
          label="Premise"
          placeholder="New terms and information the audience should know e.g. lightsaber, warp travel, spells"
        />
      </Accordion>
      <Typography className={classes.header}>Content</Typography>
      <Editor itemDir={itemDir} readonly />
    </div>
  );
};

/**
 * @param {{ screen: any; }} state
 */
const mapStateToProps = (state) => ({
  screen: state.screen,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  // props
});

export default connect(mapStateToProps, mapDispatchToProps)(Story);
