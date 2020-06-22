//@ts-check
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { TextField, Box, Button } from "@material-ui/core";
import useStyles from "./useStyles";
import saveConfig from "./saveConfig";

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
      <Button
        className={classes.successButton}
        onClick={(e) =>
          setState({
            ...state,
            data: [
              {
                title: "",
                content: "",
              },
              ...state.data,
            ],
          })
        }
      >
        New node
      </Button>

      {state.data.map(
        /**
         * @param {{ title: string; content: string }} datum
         * @param {number} idx
         */
        (datum, idx) => (
          <Box className={classes.group} key={idx}>
            <Box className={classes.row}>
              <TextField
                value={datum.title}
                label="Title"
                placeholder="This is title"
                className={classes.fullWidth}
                onChange={(e) =>
                  setState({
                    ...state,
                    data: [
                      ...state.data.slice(0, idx),
                      {
                        ...datum,
                        title: e.target.value,
                      },
                      ...state.data.slice(idx + 1),
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
                      data: [
                        ...state.data.slice(0, idx),
                        datum,
                        {
                          title: "",
                          content: "",
                        },
                        ...state.data.slice(idx + 1),
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
                      data: [
                        ...state.data.slice(0, idx),
                        ...state.data.slice(idx + 1),
                      ],
                    })
                  }
                >
                  Remove
                </Button>
              </Box>
            </Box>
            <TextField
              value={datum.content}
              label="Content"
              placeholder=""
              onChange={(e) =>
                setState({
                  ...state,
                  data: [
                    ...state.data.slice(0, idx),
                    {
                      ...datum,
                      content: e.target.value,
                    },
                    ...state.data.slice(idx + 1),
                  ],
                })
              }
            />
          </Box>
        )
      )}
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
