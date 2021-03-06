//@ts-check
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { TextField, Box, Button } from "@material-ui/core";
import {
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineContent,
  TimelineDot,
  TimelineConnector,
} from "@material-ui/lab";
import useStyles from "./useStyles";
import { MdColorLens } from "react-icons/md";
import saveConfig from "./saveConfig";
import ItemDiv from "../../../components/ItemDiv";
import generateHash from "../../../utils/generateHash";

/**
 * @param {string} colour
 * @returns {string}
 */
const toggleColor = (colour) => {
  if (colour === "primary") return "secondary";
  else if (colour === "secondary") return "grey";
  else if (colour === "grey") return "inherit";
  else return "primary";
};
/**
 * @param {{ state: object; setState: (arg0: state)=> void; itemDir: string; }} props
 */
const Plot = (props) => {
  const { state, setState, itemDir } = props;
  const { events } = state;
  const classes = useStyles();
  useEffect(() => {
    saveConfig(state, itemDir);
    return () => {
      console.log("unmounting");
    };
  }, [state]);
  return (
    <div className={classes.content}>
      <TextField
        value={state.name}
        multiline
        label="Title"
        placeholder="Main plot, Season 1, Protagonist plot"
        onChange={(e) =>
          setState({
            ...state,
            name: e.target.value,
          })
        }
      />
      <Button
        color="primary"
        onClick={() => {
          setState({
            ...state,
            events: [
              {
                id: generateHash(),
                date: "",
                content: "",
                colour: "inherit",
              },
              ...events,
            ],
          });
        }}
      >
        New node
      </Button>
      {events.map(
        /**
         * @param {{id: string; date: string; content: string; colour: "primary"|"secondary"|"grey"|"inherit"; }} event
         * @param {number} idx
         */
        (event, idx) => (
          <ItemDiv key={event.id}>
            <TimelineItem>
              <TimelineOppositeContent className={classes.row3}>
                <Box className={classes.fullWidth}>
                  <TextField
                    value={event.date}
                    label="Period"
                    placeholder="5 years ago, 24th June"
                    multiline
                    onChange={(e) =>
                      setState({
                        ...state,
                        events: [
                          ...events.slice(0, idx),
                          {
                            ...event,
                            date: e.target.value,
                          },
                          ...events.slice(idx + 1),
                        ],
                      })
                    }
                  />
                </Box>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color={event.colour}>
                  <MdColorLens
                    onClick={(e) => {
                      setState({
                        ...state,
                        events: [
                          ...events.slice(0, idx),
                          {
                            ...event,
                            colour: toggleColor(event.colour),
                          },
                          ...events.slice(idx + 1),
                        ],
                      });
                    }}
                  />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className={classes.row7}>
                <Box className={classes.fullWidth}>
                  <TextField
                    value={event.content}
                    label="Event"
                    multiline
                    placeholder="It was his last day at Veritage academy and he was going to make the best out of it."
                    className={classes.fullWidth}
                    onChange={(e) =>
                      setState({
                        ...state,
                        events: [
                          ...events.slice(0, idx),
                          {
                            ...event,
                            content: e.target.value,
                          },
                          ...events.slice(idx + 1),
                        ],
                      })
                    }
                  />
                  <Box className={classes.row}>
                    <Button
                      className={classes.successButton}
                      onClick={(e) => {
                        setState({
                          ...state,
                          events: [
                            ...events.slice(0, idx),
                            event,
                            {
                              id: generateHash(),
                              date: "",
                              content: "",
                              colour: event.colour,
                            },
                            ...events.slice(idx + 1),
                          ],
                        });
                      }}
                    >
                      Add
                    </Button>
                    <Button
                      className={classes.dangerButton}
                      onClick={(e) => {
                        setState({
                          ...state,
                          events: [
                            ...events.slice(0, idx),
                            ...events.slice(idx + 1),
                          ],
                        });
                      }}
                    >
                      Remove
                    </Button>
                  </Box>
                </Box>
              </TimelineContent>
            </TimelineItem>
          </ItemDiv>
        )
      )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Plot);
