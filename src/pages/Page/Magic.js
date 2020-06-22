//@ts-check
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { TextField, Box, Typography, Button } from "@material-ui/core";
import useStyles from "./useStyles";
import saveConfig from "./saveConfig";

/**
 * @param {{ state: object; setState: (arg0: state)=> void; itemDir: string; }} props
 */
const Plot = (props) => {
  const { state, setState, itemDir } = props;
  const { scenes } = state;
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
        placeholder="Bending, esoterism, the force, waterbending etc"
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
        placeholder="The ability to conjure things out of thin air"
        multiline
        onChange={(e) =>
          setState({
            ...state,
            description: e.target.value,
          })
        }
      />
      <TextField
        value={state.system}
        label="System"
        placeholder="A collection or group that it belongs to e.g. waterbending belongs to bending."
        multiline
        onChange={(e) =>
          setState({
            ...state,
            system: e.target.value,
          })
        }
      />
      <TextField
        value={state.race}
        label="Race"
        placeholder="A race or specie that can use or possess this ability"
        multiline
        onChange={(e) =>
          setState({
            ...state,
            race: e.target.value,
          })
        }
      />
      <TextField
        value={state.prevalence}
        label="Prevalence"
        placeholder="The percentage of the population that have it., Perhaps according to race, gender etc"
        multiline
        onChange={(e) =>
          setState({
            ...state,
            prevalence: e.target.value,
          })
        }
      />
      <Typography className={classes.header}>Rules</Typography>
      {state.rules.map(
        /**
         * @param {string} rule
         * @param {number} idx
         */
        (rule, idx) => (
          <Box className={classes.row} key={idx}>
            <TextField
              className={classes.fullWidth}
              value={rule}
              label={`Rule ${idx + 1}`}
              placeholder="First, you need a wand to do magic, and then appropriate spell"
              multiline
              onChange={(e) =>
                setState({
                  ...state,
                  rules: [
                    ...state.rules.slice(0, idx),
                    e.target.value,
                    ...state.rules.slice(idx + 1),
                  ],
                })
              }
            />
            <Box className={classes.column}>
              <Button
                className={classes.successButton}
                onClick={() => {
                  setState({
                    ...state,
                    rules: [...state.rules, ""],
                  });
                }}
              >
                Add
              </Button>
              <Button
                className={classes.dangerButton}
                onClick={() => {
                  setState({
                    ...state,
                    rules: [
                      ...state.rules.slice(0, idx),
                      ...state.rules.slice(idx + 1),
                    ],
                  });
                }}
              >
                Remove
              </Button>
            </Box>
          </Box>
        )
      )}
      <TextField
        value={state.importance}
        label="Importance"
        placeholder="The significance of the ability to the story or a plot"
        multiline
        onChange={(e) =>
          setState({
            ...state,
            importance: e.target.value,
          })
        }
      />
      <TextField
        value={state.requirements}
        label="Feeling"
        placeholder="The tools needed to use this ability, e.g. innate, inheritance, certain object"
        multiline
        onChange={(e) =>
          setState({
            ...state,
            requirements: e.target.value,
          })
        }
      />
      <TextField
        value={state.improvements}
        label="Improving"
        placeholder="How does someone gets better, age, training, stealing it from other people."
        multiline
        onChange={(e) =>
          setState({
            ...state,
            improvements: e.target.value,
          })
        }
      />
      <Typography className={classes.header}>Ranks</Typography>
      {state.ranks.map(
        /**
         * @param {string} rank
         * @param {number} idx
         */
        (rank, idx) => (
          <Box className={classes.row} key={idx}>
            <TextField
              className={classes.fullWidth}
              value={rank}
              label={`Rank ${idx + 1}`}
              placeholder="Apprentice, master, grandmaster"
              multiline
              onChange={(e) =>
                setState({
                  ...state,
                  ranks: [
                    ...state.ranks.slice(0, idx),
                    e.target.value,
                    ...state.ranks.slice(idx + 1),
                  ],
                })
              }
            />
            <Box className={classes.column}>
              <Button
                className={classes.successButton}
                onClick={() => {
                  setState({
                    ...state,
                    ranks: [...state.ranks, ""],
                  });
                }}
              >
                Add
              </Button>
              <Button
                className={classes.dangerButton}
                onClick={() => {
                  setState({
                    ...state,
                    ranks: [
                      ...state.ranks.slice(0, idx),
                      ...state.ranks.slice(idx + 1),
                    ],
                  });
                }}
              >
                Remove
              </Button>
            </Box>
          </Box>
        )
      )}
      <TextField
        value={state.strength}
        label="Strength"
        placeholder="The advantage to using this ability"
        multiline
        onChange={(e) =>
          setState({
            ...state,
            strength: e.target.value,
          })
        }
      />
      <TextField
        value={state.weakness}
        label="Environment"
        placeholder="How the ability can be exploited by opponents"
        multiline
        onChange={(e) =>
          setState({
            ...state,
            weakness: e.target.value,
          })
        }
      />
      <TextField
        value={state.drawbacks}
        label="Creatures"
        placeholder="Negative effect of the ability e.g. shorter lifespan, losing ones' soul"
        multiline
        onChange={(e) =>
          setState({
            ...state,
            drawbacks: e.target.value,
          })
        }
      />
      <TextField
        value={state.limitations}
        label="Limitations"
        placeholder="Restrictions based on law, biology or any other means"
        multiline
        onChange={(e) =>
          setState({
            ...state,
            limitations: e.target.value,
          })
        }
      />
      <Typography className={classes.header}>Specific moves</Typography>
      {state.moves.map(
        /**
         * @param {string} move
         * @param {number} idx
         */
        (move, idx) => (
          <Box className={classes.row} key={idx}>
            <TextField
              className={classes.fullWidth}
              value={move}
              label={`Move ${idx + 1}`}
              placeholder="Chokehold, mind control, telekinesis"
              multiline
              onChange={(e) =>
                setState({
                  ...state,
                  moves: [
                    ...state.moves.slice(0, idx),
                    e.target.value,
                    ...state.moves.slice(idx + 1),
                  ],
                })
              }
            />
            <Box className={classes.column}>
              <Button
                className={classes.successButton}
                onClick={() => {
                  setState({
                    ...state,
                    moves: [...state.moves, ""],
                  });
                }}
              >
                Add
              </Button>
              <Button
                className={classes.dangerButton}
                onClick={() => {
                  setState({
                    ...state,
                    moves: [
                      ...state.moves.slice(0, idx),
                      ...state.moves.slice(idx + 1),
                    ],
                  });
                }}
              >
                Remove
              </Button>
            </Box>
          </Box>
        )
      )}
      <Typography className={classes.header}>Possible additions</Typography>
      {state.additions.map(
        /**
         * @param {string} addition
         * @param {number} idx
         */
        (addition, idx) => (
          <Box className={classes.row} key={idx}>
            <TextField
              className={classes.fullWidth}
              value={addition}
              label={`Addition ${idx + 1}`}
              multiline
              placeholder="Possible additions to the ability, perhaps speculative or you're not sure yet."
              onChange={(e) =>
                setState({
                  ...state,
                  additions: [
                    ...state.additions.slice(0, idx),
                    e.target.value,
                    ...state.additions.slice(idx + 1),
                  ],
                })
              }
            />
            <Box className={classes.column}>
              <Button
                className={classes.successButton}
                onClick={() => {
                  setState({
                    ...state,
                    additions: [...state.additions, ""],
                  });
                }}
              >
                Add
              </Button>
              <Button
                className={classes.dangerButton}
                onClick={() => {
                  setState({
                    ...state,
                    additions: [
                      ...state.additions.slice(0, idx),
                      ...state.additions.slice(idx + 1),
                    ],
                  });
                }}
              >
                Remove
              </Button>
            </Box>
          </Box>
        )
      )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Plot);
