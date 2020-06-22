//@ts-check
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { TextField } from "@material-ui/core";
import useStyles from "./useStyles";
import saveConfig from "./saveConfig";

/**
 * @param {{ state: object; setState: (arg0: state)=> void; itemDir: string; }} props
 */
const Objects = (props) => {
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
        label="Name"
        placeholder=""
        multiline
        onChange={(e) =>
          setState({
            ...state,
            name: e.target.value,
          })
        }
      />
      <TextField
        value={state.description}
        label="Description"
        placeholder="Shape, size, colour, weight, material etc"
        multiline
        onChange={(e) =>
          setState({
            ...state,
            description: e.target.value,
          })
        }
      />
      <TextField
        value={state.creator}
        label="Creator"
        placeholder="A big company, an inventor or magician"
        multiline
        onChange={(e) =>
          setState({
            ...state,
            creator: e.target.value,
          })
        }
      />
      <TextField
        value={state.history}
        label="History"
        placeholder="How and when the object was created"
        multiline
        onChange={(e) =>
          setState({
            ...state,
            history: e.target.value,
          })
        }
      />
      <TextField
        value={state.use}
        label="Use"
        placeholder="What is its use, how is it used"
        multiline
        onChange={(e) =>
          setState({
            ...state,
            use: e.target.value,
          })
        }
      />
      <TextField
        value={state.safety}
        label="Safety"
        placeholder="How safe it is to use? Dangerous, radioactive, no security risk"
        multiline
        onChange={(e) =>
          setState({
            ...state,
            safety: e.target.value,
          })
        }
      />
      <TextField
        value={state.requirement}
        label="Requirement"
        placeholder="Pre-requisite in order to possess or use it e.g. age limit, certain training."
        multiline
        onChange={(e) =>
          setState({
            ...state,
            requirement: e.target.value,
          })
        }
      />
      <TextField
        value={state.importance}
        label="Importance"
        placeholder="The discovery of oil brought about the industrial revolution and the creation of tanks made war far deadlier"
        multiline
        onChange={(e) =>
          setState({
            ...state,
            importance: e.target.value,
          })
        }
      />
      <TextField
        value={state.cost}
        label="Cost"
        placeholder="Cheap and easily accessible or astronomically expensive"
        multiline
        onChange={(e) =>
          setState({
            ...state,
            cost: e.target.value,
          })
        }
      />
      <TextField
        value={state.availability}
        label="Availability"
        placeholder="Something you can buy in a supermart or one of its kind"
        multiline
        onChange={(e) =>
          setState({
            ...state,
            availability: e.target.value,
          })
        }
      />
      <TextField
        value={state.regulation}
        label="Regulation"
        placeholder="Driver's license, gun permit with extensive background checks"
        multiline
        onChange={(e) =>
          setState({
            ...state,
            regulation: e.target.value,
          })
        }
      />
      <TextField
        value={state.owner}
        label="Owner"
        placeholder="If it's one of a kind or limited number, the current owner(s)"
        multiline
        onChange={(e) =>
          setState({
            ...state,
            owner: e.target.value,
          })
        }
      />
      <TextField
        value={state.culture}
        label="Cultural significance"
        placeholder="Dispiction in history or literature"
        multiline
        onChange={(e) =>
          setState({
            ...state,
            culture: e.target.value,
          })
        }
      />
      <TextField
        value={state.more}
        label="More"
        placeholder="Any additional information"
        multiline
        onChange={(e) =>
          setState({
            ...state,
            more: e.target.value,
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

export default connect(mapStateToProps, mapDispatchToProps)(Objects);
