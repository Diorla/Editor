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
} from "@material-ui/core";
import loadConfig from "./loadConfig";
import createFile from "./createFile";
import detail from "./detail";

// TODO: Make the options dynamic by parsing the template folder.

/**
 * This means the number of templates will determine the list and not the other way around
 * It will also make it easily extendable by allowing the options to add new template
 * on the home page.
 * Adding new template will use markdown format which will in turn be parsed into html strings
 * and saved into templateName.json
 * So each template will have the following keys: template, content and description.
 * All preloaded template will have template keys like character, stories etc because my app will
 * parse them differently but user generated templates will all be parsed by editor, so no need for
 * "template" key. The description will also be loaded and be presented the same way we are 
 * "detail.js" now.
 * "content" is the part that will be rendered and updated via Editor.
 * Hence the edit page logic will go like this=
 * if file has template and the template is one of the special page, load special page hence load generic page.
 * Also, I could change the dropdown to input with datalist (this will prevents long dropdowns), and in 
 * case user types in an text that is not on the template, it will show error feedback ie. input is
 * red and error message. It may also prevent the creation of new documents or create new elements
 * using no template (default ie. empty document)
 */
/**
 * @param {{ project: { collectionDir: string; }; }} props
 */
const Folder = (props) => {
  const { collectionDir } = props.project;
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
      <Box className={classes.content}>
        <Typography component="h2" className={classes.header}>
          Create document
        </Typography>
        <TextField
          label="New document"
          value={fileName}
          placeholder="Click enter to add document"
          onChange={(e) =>
            onFileInputChange(e, setFileName, setError, fileList)
          }
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              // Can't disable enter, so I did the next best thing
              if (error) setError(`Can't add document, ${error}`);
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
      </Box>
      <Box className={classes.help}>{detail[state.template] || detail.Default}</Box>
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
