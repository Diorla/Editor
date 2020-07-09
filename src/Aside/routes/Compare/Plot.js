//@ts-check
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { TextField, Box } from "@material-ui/core";
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

/**
 * @param {{ state: object; setState: (arg0: state)=> void; itemDir: string; }} props
 */
const Plot = (props) => {
  const { state, itemDir } = props;
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
        disabled
      />
      {events.map(
        /**
         * @param {{ date: string; content: string; colour: "primary"|"secondary"|"grey"|"inherit"; }} event
         * @param {number} idx
         */
        (event, idx) => (
          <TimelineItem key={idx}>
            <TimelineOppositeContent className={classes.row3}>
              <Box className={classes.fullWidth}>
                <TextField
                  value={event.date}
                  className={classes.fullWidth}
                  label="Period"
                  placeholder="5 years ago, 24th June"
                  multiline
                  disabled
                />
              </Box>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color={event.colour}>
                <MdColorLens />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className={classes.row7}>
              <TextField
                value={event.content}
                label="Event"
                multiline
                placeholder="It was his last day at Veritage academy and he was going to make the best out of it."
                className={classes.fullWidth}
                disabled
              />
            </TimelineContent>
          </TimelineItem>
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
