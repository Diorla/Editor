import React, { useReducer, useState } from "react";
import { connect } from "react-redux";
import {
  makeStyles,
  TextField,
  Box,
  Button,
  Typography,
} from "@material-ui/core";
import jsonfile from "jsonfile";
import generateHash from "../utils/generateHash";
import fs from "fs";
import title from "../utils/title";

// TODO: Create a file that will contain all styles from `makeStyles`
// So I will just import and init it inside the needed function
// import styles from "styles", styles.home(), styles.row()
// or import { home, row } from "styles";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  header: {
    textAlign: "center",
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
}));

const Project = ({ project }) => {
  const projectDir = process.cwd() + "/projects/" + project;
  const classes = useStyles();
  const [folderName, setFolderName] = useState("");
  const [error, setError] = useState("");
  const [folderList, setFolderList] = useState([]);

  fs.readdir(projectDir, (err, data) => {
    if (err) throw err;
    // prevent infinite loop of update and re-render
    if (JSON.stringify(folderList) !== JSON.stringify(data))
      setFolderList(data);
  });

  const addNewFolder = (folderName) => {
    fs.mkdir(`${projectDir}/${folderName}`, { recursive: true }, (err) => {
      if (err) console.log(err);
      else {
        fs.readdir(projectDir, (err, data) => {
          if (err) throw err;
          // prevent infinite loop of update and re-render
          if (JSON.stringify(folderList) !== JSON.stringify(data)) {
            setFolderList(data);
            setFolderName("");
          }
        });
      }
    });
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "setTitle":
        return {
          ...state,
          title: action.title,
        };
      case "setDescription":
        return {
          ...state,
          description: action.description,
        };
      case "setTags":
        return {
          ...state,
          tags: action.tags,
        };
      case "setGenre":
        return {
          ...state,
          genre: action.genre,
        };
      case "setAudience":
        return {
          ...state,
          audience: action.audience,
        };
      case "setAll":
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  };
  let initValue = {
    id: generateHash(),
    title: "",
    description: "",
    tags: "",
    genre: "",
    audience: "",
    created: "",
    jsonParsed: false,
  };

  const [state, dispatch] = useReducer(reducer, initValue);

  const saveConfig = () => {
    const temp = {
      ...state,
    };
    delete temp.jsonParsed;
    jsonfile.writeFile(`${projectDir}/.config`, temp, (err) => {
      console.log(err);
    });
  };
  jsonfile.readFile(`${projectDir}/.config`, (err, val) => {
    if (err) {
      // .config doesn't exist
      dispatch({
        type: "setAll",
        payload: {
          ...val,
          jsonParsed: true,
        },
      });
      saveConfig();
    } else {
      // No need to update "state"
      if (JSON.stringify(val) === JSON.stringify(state)) return;
      else {
        if (!state.jsonParsed)
          // @ts-ignore
          dispatch({
            type: "setAll",
            payload: {
              ...val,
              jsonParsed: true,
            },
          });
      }
    }
  });

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
        onBlur={() => saveConfig()}
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
        onBlur={() => saveConfig()}
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
        onBlur={() => saveConfig()}
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
        onBlur={() => saveConfig()}
      />
      <TextField
        label="Audience"
        value={state.target}
        placeholder="Your primary or target audience."
        onChange={(e) =>
          dispatch({
            type: "setAudience",
            audience: e.target.value,
          })
        }
        onBlur={() => saveConfig()}
      />
      <Box className={classes.content}>
        <Typography component="h2" className={classes.header}>
          Create folder
        </Typography>
        <TextField
          label="New folder"
          value={folderName}
          placeholder="Click enter to add folder"
          onChange={(e) => {
            setFolderName(e.target.value);
            // No input, no error
            if (!e.target.value.length) setError("");
            // Input too short or name already exist
            else if (e.target.value.length < 2) setError("Name is too short");
            else if (folderList.map(title).includes(title(e.target.value)))
              setError("Name already exist");
            else setError("");
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              // Can't disable enter, so I did the next best thing
              if (error) setError(title(`Can't add folder, ${error}`));
              else if (!folderName) setError("Field is empty");
              else addNewFolder(folderName);
            }
          }}
        />
        <Button
          variant="contained"
          size="small"
          onClick={() => {
            if (folderName) addNewFolder(folderName);
          }}
          disabled={error || !folderName ? true : false}
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

const mapStateToProps = (state) => ({
  screen: state.screen,
  project: state.project.activeProject,
});

const mapDispatchToProps = (dispatch) => ({
  // props
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);
