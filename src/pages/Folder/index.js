//@ts-check
import React, { useReducer, useState, useEffect } from "react";
import { connect } from "react-redux";
import reducer from "./reducer";
import initValue from "./initValue";
import useStyles from "./useStyles";
import onFileInputChange from "./onFileInputChange";
import saveConfig from "./saveConfig";
import fs from "fs";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import loadConfig from "./loadConfig";
import createFile from "./createFile";

const Folder = (props) => {
  const { project } = props;
  const { collectionDir } = project;
  const [state, dispatch] = useReducer(reducer, initValue);
  const classes = useStyles();
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    // get the list of all the files in the folder
    fs.readdir(collectionDir, (err, data) => {
      if (err) throw err;
      // No need to update and re-render if the source == destination. This prevents infinite loop
      if (JSON.stringify(fileList) !== JSON.stringify(data)) setFileList(data);
    });

    loadConfig(
      collectionDir,
      (err) => {
        console.log(err);
      },
      (val) => {
        // don't update state
        if (JSON.stringify(val) === JSON.stringify(state)) return;
        // update state
        else
          dispatch({
            type: "setAll",
            payload: {
              ...val,
            },
          });
      }
    );
    return () => {
      console.log("unmounted");
    };
  }, [collectionDir]);

  return (
    <Box className={classes.content}>
      <Typography component="h2" className={classes.header}>
        Folder settings
      </Typography>
      <TextField
        label="Title"
        value={state.title}
        placeholder="The name of the collection"
        onChange={(e) =>
          dispatch({
            type: "setTitle",
            title: e.target.value,
          })
        }
        onBlur={() => saveConfig(state, collectionDir)}
      />
      <TextField
        label="Description"
        value={state.description}
        placeholder="A brief summary of the use"
        multiline
        onChange={(e) =>
          dispatch({
            type: "setDescription",
            description: e.target.value,
          })
        }
        onBlur={() => saveConfig(state, collectionDir)}
      />
      <FormControl>
        <Typography component="h3" className={classes.header}>
          Template
        </Typography>
        <select
          name="choice"
          value={state.template}
          className={classes.select}
          onChange={(e) =>
            dispatch({
              type: "setTemplate",
              template: e.target.value,
            })
          }
          onBlur={(e) => saveConfig(state, collectionDir)}
        >
          <option value="Default">None</option>
          <option value="Character">Character</option>
          <option value="Story">Story</option>
          <option value="Creature">Creature</option>
          <option value="Location">Location</option>
          <option value="Magic">Magic</option>
          <option value="Objects">Object</option>
          <option value="World">World</option>
          <option value="Organisation">Organisation</option>
        </select>
      </FormControl>
      <Box className={classes.content}>
        <Typography component="h2" className={classes.header}>
          Create file
        </Typography>
        <TextField
          label="New file"
          value={fileName}
          placeholder="Click enter to add file"
          onChange={(e) =>
            onFileInputChange(e, setFileName, setError, fileList)
          }
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              // Can't disable enter, so I did the next best thing
              if (error) setError(`Can't add folder, ${error}`);
              else if (!fileName) setError("Field is empty");
              else
                createFile(
                  fileName,
                  collectionDir,
                  fileList,
                  setFileList,
                  setFileName,
                  setError,
                  {
                    template: state.template,
                  }
                );
            }
          }}
        />
        <Button
          variant="contained"
          size="small"
          disabled={error || !fileName ? true : false}
        >
          New Folder
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
 * @param {{ project: {projectName: string, collectionDir: string, itemDir: string}; }} state
 */
const mapStateToProps = (state) => ({
  project: state.project,
});

// @ts-ignore
const mapDispatchToProps = (dispatch) => ({
  // props
});

export default connect(mapStateToProps, mapDispatchToProps)(Folder);
