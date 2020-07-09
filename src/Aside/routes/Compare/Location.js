//@ts-check
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { TextField, Box, Typography } from "@material-ui/core";
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
import Accordion from "../../../components/Accordion";
import Editor from "../../../components/Editor";
import jsonfile from "jsonfile";
import ErrorLog from "../../../components/ErrorLog";

/**
 * @param {{ itemDir: string; }} props
 */
const Location = (props) => {
  const { itemDir } = props;
  const [scenes, setScenes] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    jsonfile.readFile(itemDir, (err, data) => {
      if (err) ErrorLog(err);
      else {
        const { scenes } = data;
        setScenes(scenes);
      }
    });
    return () => {
      console.log("unmounting");
    };
  }, [itemDir]);
  if (scenes)
    return (
      <div className={classes.content}>
        <Accordion
          header={<Typography className={classes.header}>Location</Typography>}
        >
          <Editor itemDir={itemDir} readonly />
        </Accordion>
        <Accordion
          header={<Typography className={classes.header}>Scenes</Typography>}
        >
          {scenes.map(
            /**
             * @param {{ date: string; event: string; changes: string; colour: "primary"|"secondary"|"grey"|"inherit"; }} event
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
                    <TextField
                      value={event.event}
                      className={classes.fullWidth}
                      label="Event"
                      placeholder="Robbery"
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
                    value={event.changes}
                    label="Changes"
                    placeholder="The painting of van Gogh was missing, the dead body of Mr John Doe was lying on the bed, and the white bed sheet now red."
                    multiline
                    className={classes.fullWidth}
                    disabled
                  />
                </TimelineContent>
              </TimelineItem>
            )
          )}
        </Accordion>
      </div>
    );
  else return null;
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

export default connect(mapStateToProps, mapDispatchToProps)(Location);
