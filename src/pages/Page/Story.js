//@ts-check
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
import useStyles from "./useStyles";
import saveConfig from "./saveConfig";
import Accordion from "../../components/Accordion";
import { SimpleInput } from "../../components/Input";
import Quill from "./Quill";

//TODO: Use react-quill for the content
const Magic = (props) => {
  const { state, setState, itemDir } = props;
  const classes = useStyles();
  useEffect(() => {
    saveConfig(state, itemDir);
    return () => {
      console.log("unmounting");
    };
  }, [state]);
  return (
    <main className={classes.content}>
      <Accordion
        header={<Typography className={classes.header}>Basics</Typography>}
      >
        <SimpleInput
          state={state}
          setState={setState}
          label="Title"
          objectKey="name"
          placeholder="Prologue, chapter 1, Once upon a time"
        />
        <SimpleInput
          state={state}
          setState={setState}
          label="Summary"
          objectKey="summary"
          placeholder="Kehinde in bed, gets up and goes to work where he's fired and his entire day goes awry."
        />
        <SimpleInput
          state={state}
          setState={setState}
          label="Goal"
          objectKey="goal"
          placeholder="Introduces the antagonist and his dream, a filler or give the protagonist something to fight for."
        />
        <SimpleInput
          state={state}
          setState={setState}
          label="Premise"
          objectKey="premise"
          placeholder="New terms and information the audience should know e.g. lightsaber, warp travel, spells"
        />
      </Accordion>
      <Typography className={classes.header}>Content</Typography>
      <Quill
        content={state.content}
        onChange={(content) =>
          setState({
            ...state,
            content,
          })
        }
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(Magic);
