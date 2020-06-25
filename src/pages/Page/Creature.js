//@ts-check
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { TextField } from "@material-ui/core";
import useStyles from "./useStyles";
import saveConfig from "./saveConfig";
import Quill from "./Quill";

/**
 * @param {{ state: any; setState: any; itemDir: any; }} props
 */
const Creature = (props) => {
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
      <TextField
        value={state.name}
        label="Title"
        placeholder=""
        multiline
        onChange={(e) =>
          setState({
            ...state,
            name: e.target.value,
          })
        }
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(Creature);
