//@ts-check
import React, { useState, useReducer, useEffect } from "react";
import useStyles from "./useStyles";
import { connect } from "react-redux";
import reducer from "./reducer";
import initValue from "./initValue";
import saveConfig from "./saveConfig";
import createFolder from "./createFolder";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import title from "../../utils/title";
import getFolderList from "./getFolderList";
import loadConfig from "./loadConfig";

/**
 * @param {{ project: { projectName: any; }; }} props
 */
const Project = (props) => {
  const { projectName } = props.project;
  const projectDir = process.cwd() + "/projects/" + projectName;
  const classes = useStyles();
  // for adding new collection
  const [collectionName, setCollectionName] = useState("");
  const [error, setError] = useState("");
  //to keep the list of collection
  const [collectionList, setCollectionList] = useState([]);
  const [state, dispatch] = useReducer(reducer, initValue);

  useEffect(() => {
    getFolderList(projectDir, collectionList, setCollectionList);
    loadConfig(projectDir, state, dispatch);
    return () => {
      console.log("unmounted");
    };
  }, []);

  return (
    <Box className={classes.content}>
      <Typography component="h2" className={classes.header}>
        Project settings
      </Typography>
      <TextField
        label="Title"
        value={state.title}
        placeholder="The title of the story"
        onChange={(e) =>
          dispatch({
            type: "setTitle",
            title: e.target.value,
          })
        }
        onBlur={() => saveConfig(state, projectDir)}
      />
      <TextField
        label="Description"
        value={state.description}
        placeholder="A brief summary of what the book is all about"
        multiline
        onChange={(e) =>
          dispatch({
            type: "setDescription",
            description: e.target.value,
          })
        }
        onBlur={() => saveConfig(state, projectDir)}
      />
      <TextField
        label="Tags"
        value={state.tags}
        placeholder="Separate each tag with comma"
        onChange={(e) =>
          dispatch({
            type: "setTags",
            tags: e.target.value,
          })
        }
        onBlur={() => saveConfig(state, projectDir)}
      />
      <TextField
        label="Genre"
        value={state.genre}
        placeholder="Form, style or subject of your book"
        onChange={(e) =>
          dispatch({
            type: "setGenre",
            genre: e.target.value,
          })
        }
        onBlur={() => saveConfig(state, projectDir)}
      />
      <TextField
        label="Audience"
        value={state.audience}
        placeholder="Your primary or target audience."
        onChange={(e) =>
          dispatch({
            type: "setAudience",
            audience: e.target.value,
          })
        }
        onBlur={() => saveConfig(state, projectDir)}
      />
      <Box className={classes.content}>
        <Typography component="h2" className={classes.header}>
          Create collection
        </Typography>
        <TextField
          label="New collection"
          value={collectionName}
          placeholder="Click enter to add collection"
          onChange={(e) => {
            setCollectionName(e.target.value);
            // No input, no error
            if (!e.target.value.length) setError("");
            // Input too short or name already exist
            else if (e.target.value.length < 2) setError("Name is too short");
            else if (collectionList.map(title).includes(title(e.target.value)))
              setError("Name already exist");
            else setError("");
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              // Can't disable enter, so I did the next best thing
              if (error) setError(title(`Can't add collection, ${error}`));
              else if (!collectionName) setError("Field is empty");
              else
                createFolder(
                  projectDir,
                  collectionName,
                  setCollectionList,
                  setCollectionName
                );
            }
          }}
        />
        <Button
          variant="contained"
          size="small"
          onClick={() => {
            if (collectionName)
              createFolder(
                projectDir,
                collectionName,
                setCollectionList,
                setCollectionName
              );
          }}
          disabled={error || !collectionName ? true : false}
        >
          New collection
        </Button>
      </Box>
      {error && (
        <Typography variant="subtitle1" color="error">
          {error}
        </Typography>
      )}
    </Box>
  );
};

/**
 * @param {{ screen: string; project: { projectName: string }; }} state
 */
const mapStateToProps = (state) => ({
  screen: state.screen,
  project: state.project,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  // props
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);
