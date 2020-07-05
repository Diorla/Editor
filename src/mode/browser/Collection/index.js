//@ts-check
import React, { useReducer, useState, useEffect } from "react";
import { connect } from "react-redux";
import reducer from "./reducer";
import initValue from "./initValue";
import onFileInputChange from "./onFileInputChange";
import saveConfig from "./saveConfig";
import fs from "fs";
import { Box, Typography, TextField, FormControl } from "@material-ui/core";
import loadConfig from "./loadConfig";
import createFile from "./createFile";
import detail from "./detail";
import createFolder from "./createFolder";
import onFolderInputChange from "./onFolderInputChange";
import useStyles from "../../../components/useStyles";

const Collection = (props) => {
  const { fullDir } = props.browser;
  const [state, dispatch] = useReducer(reducer, initValue);
  const classes = useStyles();
  const [fileName, setFileName] = useState("");
  const [folderName, setFolderName] = useState("");
  const [error, setError] = useState("");
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    // get the list of all the files in the folder
    fs.readdir(fullDir, (err, data) => {
      if (err) throw err;
      // No need to update and re-render if the source == destination. This prevents infinite loop
      if (JSON.stringify(fileList) !== JSON.stringify(data)) setFileList(data);
    });

    loadConfig(
      fullDir,
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
  }, [fullDir]);

  return (
    <Box className={classes.content}>
      <Typography component="h2" className={classes.header}>
        Collection settings
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
        onBlur={() => saveConfig(state, fullDir)}
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
        onBlur={() => saveConfig(state, fullDir)}
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
          onBlur={(e) => saveConfig(state, fullDir)}
        >
          <option value="Default">No template</option>
          <option value="Character">Character</option>
          <option value="Creature">Creature</option>
          <option value="Location">Location</option>
          <option value="Magic">Magic</option>
          <option value="Objects">Object</option>
          <option value="Organisation">Organisation</option>
          <option value="Plot">Plot</option>
          <option value="Story">Story</option>
          <option value="World">World</option>
        </select>
      </FormControl>
      <Box style={{ display: "flex" }}>
        <Box className={classes.content}>
          <Typography component="h2" className={classes.header}>
            Create document
          </Typography>
          <TextField
            label="New document"
            value={fileName}
            placeholder="Click enter to add document"
            onFocus={() =>
              onFileInputChange(fileName, setFileName, setError, fileList)
            }
            onChange={(e) =>
              onFileInputChange(e.target.value, setFileName, setError, fileList)
            }
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                // Can't disable enter, so I did the next best thing
                if (error) setError(`Can't create new document. ${error}`);
                else if (!fileName) setError("Field is empty");
                else
                  createFile(fileName, fullDir, setFileList, setFileName, {
                    template: state.template,
                  });
              }
            }}
          />
        </Box>
        <Box className={classes.content}>
          <Typography component="h2" className={classes.header}>
            Create sub collection
          </Typography>
          <TextField
            label="New collection"
            value={folderName}
            placeholder="Click enter to add collection"
            onFocus={() =>
              onFolderInputChange(folderName, setFolderName, setError, fileList)
            }
            onChange={(e) =>
              onFolderInputChange(
                e.target.value,
                setFolderName,
                setError,
                fileList
              )
            }
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                // Can't disable enter, so I did the next best thing
                if (error) setError(`Can't add collection. ${error}`);
                else if (!folderName) setError("Field is empty");
                else
                  createFolder(folderName, fullDir, setFileList, setFolderName);
              }
            }}
          />
        </Box>
      </Box>
      <Box className={classes.info}>
        {detail[state.template] || detail.Default}
      </Box>
      {error && (
        <Typography variant="subtitle1" color="error">
          {error}
        </Typography>
      )}
    </Box>
  );
};

const mapStateToProps = (state) => ({
  browser: state.browser,
});

// @ts-ignore
const mapDispatchToProps = (dispatch) => ({
  // props
});

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
