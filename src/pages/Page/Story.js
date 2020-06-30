//@ts-check
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
import useStyles from "./useStyles";
import Accordion from "../../components/Accordion";
import { SimpleInput } from "../../components/Input";
import Editor from "../../components/Editor";
import jsonfile from "jsonfile";

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
      if (err) console.log("error loading file");
      else {
        const { name, summary, goal, premise } = data;
        setState({ name, summary, goal, premise });
      }
    });
    return () => {
      console.log("unmounting");
    };
  }, [itemDir]);

  const save = () => {
    jsonfile.readFile(itemDir, (err, data) => {
      if (err) console.log("error saving data:", err);
      else
        jsonfile.writeFile(itemDir, {
          ...data,
          ...state,
        });
    });
  };
  return (
    <main className={classes.content}>
      <Accordion
        header={<Typography className={classes.header}>Basics</Typography>}
        onBlur={save}
      >
        <SimpleInput
          value={state.name}
          onChange={(name) =>
            setState({
              ...state,
              name,
            })
          }
          label="Title"
          placeholder="Prologue, chapter 1, Once upon a time"
        />
        <SimpleInput
          value={state.summary}
          onChange={(summary) =>
            setState({
              ...state,
              summary,
            })
          }
          label="Summary"
          placeholder="Kehinde in bed, gets up and goes to work where he's fired and his entire day goes awry."
        />
        <SimpleInput
          value={state.goal}
          onChange={(goal) =>
            setState({
              ...state,
              goal,
            })
          }
          label="Goal"
          placeholder="Introduces the antagonist and his dream, a filler or give the protagonist something to fight for."
        />
        <SimpleInput
          value={state.premise}
          onChange={(premise) =>
            setState({
              ...state,
              premise,
            })
          }
          label="Premise"
          placeholder="New terms and information the audience should know e.g. lightsaber, warp travel, spells"
        />
      </Accordion>
      <Typography className={classes.header}>Content</Typography>
      <Editor itemDir={itemDir} />
    </main>
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
