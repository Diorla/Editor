//@ts-check
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { TextField, Box, Typography, Button } from "@material-ui/core";
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
 * @param {{ itemDir: string; }} props
 */
const Location = (props) => {
  const { itemDir } = props;
  const [scenes, setScenes] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    jsonfile.readFile(itemDir, (err, data) => {
      if (err) console.log("error loading file");
      else {
        const { scenes } = data;
        setScenes(scenes);
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
          scenes,
        });
    });
  };
  if (scenes)
    return (
      <div className={classes.content}>
        <Accordion
          header={<Typography className={classes.header}>Location</Typography>}
        >
          <Editor itemDir={itemDir} />
        </Accordion>
        <Accordion
          header={<Typography className={classes.header}>Scenes</Typography>}
          onBlur={save}
        >
          <Button
            color="primary"
            onClick={() => {
              setScenes([
                {
                  id: generateHash(),
                  date: "",
                  event: "",
                  changes: "",
                  colour: "inherit",
                },
                ...scenes,
              ]);
            }}
          >
            New node
          </Button>
          {scenes.map(
            /**
             * @param {{ id: string; date: string; event: string; changes: string; colour: "primary"|"secondary"|"grey"|"inherit"; }} event
             * @param {number} idx
             */
            (event, idx) => (
              <ItemDiv key={event.id}>
                <TimelineItem>
                  <TimelineOppositeContent className={classes.row3}>
                    <Box className={classes.fullWidth}>
                      <TextField
                        value={event.date}
                        className={classes.fullWidth}
                        label="Period"
                        placeholder="5 years ago, 24th June"
                        multiline
                        onChange={(e) =>
                          setScenes([
                            ...scenes.slice(0, idx),
                            {
                              ...event,
                              date: e.target.value,
                            },
                            ...scenes.slice(idx + 1),
                          ])
                        }
                      />
                      <TextField
                        value={event.event}
                        className={classes.fullWidth}
                        label="Event"
                        placeholder="Robbery"
                        multiline
                        onChange={(e) =>
                          setScenes([
                            ...scenes.slice(0, idx),
                            {
                              ...event,
                              event: e.target.value,
                            },
                            ...scenes.slice(idx + 1),
                          ])
                        }
                      />
                      <Box className={classes.row}>
                        <Button
                          className={classes.successButton}
                          onClick={(e) => {
                            setScenes([
                              ...scenes.slice(0, idx),
                              event,
                              {
                                id: generateHash(),
                                date: "",
                                event: "",
                                changes: "",
                                colour: event.colour,
                              },
                              ...scenes.slice(idx + 1),
                            ]);
                          }}
                        >
                          Add
                        </Button>
                        <Button
                          className={classes.dangerButton}
                          onClick={(e) => {
                            setScenes([
                              ...scenes.slice(0, idx),
                              ...scenes.slice(idx + 1),
                            ]);
                          }}
                        >
                          Remove
                        </Button>
                      </Box>
                    </Box>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color={event.colour}>
                      <MdColorLens
                        onClick={(e) => {
                          setScenes([
                            ...scenes.slice(0, idx),
                            {
                              ...event,
                              colour: toggleColor(event.colour),
                            },
                            ...scenes.slice(idx + 1),
                          ]);
                        }}
                      />
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
                      onChange={(e) =>
                        setScenes([
                          ...scenes.slice(0, idx),
                          {
                            ...event,
                            changes: e.target.value,
                          },
                          ...scenes.slice(idx + 1),
                        ])
                      }
                    />
                  </TimelineContent>
                </TimelineItem>
              </ItemDiv>
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
