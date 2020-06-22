//@ts-check
import React, { useEffect } from "react";
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
import saveConfig from "./saveConfig";
import Accordion from "../../components/Accordion";

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
const Location = (props) => {
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
      <Accordion
        header={<Typography className={classes.header}>Location</Typography>}
      >
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
        <TextField
          value={state.category}
          label="Category"
          multiline
          placeholder="Indoors or outdoors"
          onChange={(e) =>
            setState({
              ...state,
              category: e.target.value,
            })
          }
        />
        <TextField
          value={state.type}
          label="Type of location"
          multiline
          placeholder="Bedroom, hallway, garage, park etc"
          onChange={(e) =>
            setState({
              ...state,
              type: e.target.value,
            })
          }
        />
        <TextField
          value={state.composition}
          label="Composition"
          multiline
          placeholder="List all the materials in that location e.g the furniture, the bill board"
          onChange={(e) =>
            setState({
              ...state,
              composition: e.target.value,
            })
          }
        />
        <TextField
          value={state.sight}
          label="Description"
          multiline
          placeholder="What you can see in terms of shape, colour, size position and relative distance between each of them."
          onChange={(e) =>
            setState({
              ...state,
              sight: e.target.value,
            })
          }
        />
        <TextField
          value={state.smell}
          label="Smell"
          placeholder="Describe the air, fresh, polluted with exhaut pipes"
          multiline
          onChange={(e) =>
            setState({
              ...state,
              smell: e.target.value,
            })
          }
        />
        <TextField
          value={state.sound}
          label="Sound"
          placeholder="Noise level, source of sound e.g. traffick, crickets, music blaring"
          multiline
          onChange={(e) =>
            setState({
              ...state,
              sound: e.target.value,
            })
          }
        />
        <TextField
          value={state.feeling}
          label="Feeling"
          multiline
          placeholder="How it makes you feel, e.g. prison(afraid), orphanage(sad), national capital(awe)"
          onChange={(e) =>
            setState({
              ...state,
              feeling: e.target.value,
            })
          }
        />
        <TextField
          value={state.esp}
          label="Extra sensory perception"
          multiline
          placeholder="This is specific to supernatural or sci-fi genres e.g. haunted"
          onChange={(e) =>
            setState({
              ...state,
              esp: e.target.value,
            })
          }
        />
        <TextField
          value={state.importance}
          label="Importance"
          placeholder="The basic function or importance of the site"
          multiline
          onChange={(e) =>
            setState({
              ...state,
              importance: e.target.value,
            })
          }
        />
        <TextField
          value={state.environment}
          label="Environment"
          placeholder="Weather,temperature or even the climate. Dry hot air, freezing"
          multiline
          onChange={(e) =>
            setState({
              ...state,
              environment: e.target.value,
            })
          }
        />
        <TextField
          value={state.creatures}
          label="Creatures"
          placeholder="Living organisms e.g. animals, people, trees, rodents, insects etc."
          multiline
          onChange={(e) =>
            setState({
              ...state,
              creatures: e.target.value,
            })
          }
        />
        <TextField
          value={state.landmark}
          label="Landmark"
          placeholder="Important structure, paintings, furniture etc. Something that stands out."
          multiline
          onChange={(e) =>
            setState({
              ...state,
              landmark: e.target.value,
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
      </Accordion>
      <Accordion
        header={<Typography className={classes.header}>Scenes</Typography>}
      >
        <Button
          color="primary"
          onClick={() => {
            setState({
              ...state,
              scenes: [
                {
                  date: "",
                  event: "",
                  changes: "",
                  colour: "inherit",
                },
                ...scenes,
              ],
            });
          }}
        >
          New node
        </Button>
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
                    onChange={(e) =>
                      setState({
                        ...state,
                        scenes: [
                          ...scenes.slice(0, idx),
                          {
                            ...event,
                            date: e.target.value,
                          },
                          ...scenes.slice(idx + 1),
                        ],
                      })
                    }
                  />
                  <TextField
                    value={event.event}
                    className={classes.fullWidth}
                    label="Event"
                    placeholder="Robbery"
                    multiline
                    onChange={(e) =>
                      setState({
                        ...state,
                        scenes: [
                          ...scenes.slice(0, idx),
                          {
                            ...event,
                            event: e.target.value,
                          },
                          ...scenes.slice(idx + 1),
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
                          scenes: [
                            ...scenes.slice(0, idx),
                            event,
                            {
                              date: "",
                              event: "",
                              changes: "",
                              colour: event.colour,
                            },
                            ...scenes.slice(idx + 1),
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
                          scenes: [
                            ...scenes.slice(0, idx),
                            ...scenes.slice(idx + 1),
                          ],
                        });
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
                      setState({
                        ...state,
                        scenes: [
                          ...scenes.slice(0, idx),
                          {
                            ...event,
                            colour: toggleColor(event.colour),
                          },
                          ...scenes.slice(idx + 1),
                        ],
                      });
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
                    setState({
                      ...state,
                      scenes: [
                        ...scenes.slice(0, idx),
                        {
                          ...event,
                          changes: e.target.value,
                        },
                        ...scenes.slice(idx + 1),
                      ],
                    })
                  }
                />
              </TimelineContent>
            </TimelineItem>
          )
        )}
      </Accordion>
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

export default connect(mapStateToProps, mapDispatchToProps)(Location);
