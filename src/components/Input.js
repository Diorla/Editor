//@ts-check
import React from "react";
import { TextField, Box, Typography, Button } from "@material-ui/core";
import useStyles from "../pages/Page/useStyles";
import title from "../utils/title";
//TODO: Use store.form to handle different forms
/**
 * I've been passing around a lot of state management ie. setState, state, config etc
 * I need to add this to the store, like load .config or .scrb content straight into
 * the store.
 * And with this, I can update the .config or .scrb file by using subscribe in the main
 * tree.
 * If possible, I could find or build a middleware that only call the subscribe function
 * When there is change in form, and to improve performance, it will compare prevState
 * with currentState, or I could stick with saveConfig inside useEffect
 * I believe this will also speed up the app and reduce a lot of re-rendering that I'm
 * doing with useEffect.
 * So the store.form will have two options
 * 1. reset: state = {}
 * 2. update: state = {...state, ...action.payload}
 * 3. create: state = {...action.payload}
 */
/**
 * @param {{ state: object; objectKey: string; label: string; placeholder: string; setState: (state: object)=> void; }} props
 */
export const SimpleInput = (props) => {
  const { state, objectKey, label, placeholder, setState } = props;

  return (
    <TextField
      value={state[objectKey]}
      label={label}
      placeholder={placeholder}
      onChange={(e) =>
        setState({
          ...state,
          [objectKey]: e.target.value,
        })
      }
    />
  );
};

/**
 * @param {{ label: string; state: object; objectKey: string; setState: (state)=> void; placeholder: string }} props
 */
export const ArrayInput = (props) => {
  const classes = useStyles();
  const { label, state, objectKey, setState, placeholder } = props;
  return (
    <Box className={classes.group}>
      <Typography className={classes.header}>{label}</Typography>
      {state[objectKey].map(
        /**
         * @param {string} item
         * @param {number} idx
         */
        (item, idx) => (
          <Box className={classes.row} key={idx}>
            <TextField
              className={classes.fullWidth}
              value={item}
              label={`${label} ${idx + 1}`}
              placeholder={placeholder}
              multiline
              onChange={(e) =>
                setState({
                  ...state,
                  [objectKey]: [
                    ...state[objectKey].slice(0, idx),
                    e.target.value,
                    ...state[objectKey].slice(idx + 1),
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
                    [objectKey]: [
                      ...state[objectKey].slice(0, idx + 1),
                      "",
                      ...state[objectKey].slice(idx + 1),
                    ],
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
                    [objectKey]: [
                      ...state[objectKey].slice(0, idx),
                      ...state[objectKey].slice(idx + 1),
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
    </Box>
  );
};

/**
 * @param {{ state: object; label: string; setState: (state: object)=> void; objectKey: string; obj: object; mainSubKey: string; mainLabel: string; mainPlaceholder: string; }} props
 */
export const ObjectInput = (props) => {
  const classes = useStyles();
  const {
    state,
    label,
    setState,
    objectKey,
    obj,
    mainSubKey,
    mainLabel,
    mainPlaceholder,
  } = props;
  return (
    <Box>
      <Typography className={classes.header}>{label}</Typography>
      {state[objectKey].map(
        /**
         * @param {{ title: string; content: string }} datum
         * @param {number} idx
         */
        (datum, idx) => (
          <Box className={classes.group} key={idx}>
            <Box className={classes.row}>
              <TextField
                value={datum[mainSubKey]}
                label={mainLabel}
                placeholder={mainPlaceholder}
                multiline
                className={classes.fullWidth}
                onChange={(e) =>
                  setState({
                    ...state,
                    [objectKey]: [
                      ...state[objectKey].slice(0, idx),
                      {
                        ...datum,
                        [mainSubKey]: e.target.value,
                      },
                      ...state[objectKey].slice(idx + 1),
                    ],
                  })
                }
              />
              <Box className={classes.column}>
                <Button
                  className={classes.successButton}
                  onClick={(e) =>
                    setState({
                      ...state,
                      [objectKey]: [
                        ...state[objectKey].slice(0, idx),
                        datum,
                        {
                          [mainSubKey]: "",
                          ...obj,
                        },
                        ...state[objectKey].slice(idx + 1),
                      ],
                    })
                  }
                >
                  Add
                </Button>
                <Button
                  className={classes.dangerButton}
                  onClick={(e) =>
                    setState({
                      ...state,
                      [objectKey]: [
                        ...state[objectKey].slice(0, idx),
                        ...state[objectKey].slice(idx + 1),
                      ],
                    })
                  }
                >
                  Remove
                </Button>
              </Box>
            </Box>
            {Object.keys(obj).map((ky, index) => (
              <TextField
                key={index}
                value={datum[ky]}
                label={title(ky)}
                placeholder={obj[ky]}
                multiline
                onChange={(e) =>
                  setState({
                    ...state,
                    [objectKey]: [
                      ...state[objectKey].slice(0, idx),
                      {
                        ...datum,
                        [ky]: e.target.value,
                      },
                      ...state[objectKey].slice(idx + 1),
                    ],
                  })
                }
              />
            ))}
          </Box>
        )
      )}
    </Box>
  );
};
