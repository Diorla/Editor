//@ts-check
import React, { useState } from "react";
import { connect } from "react-redux";
import {
  makeStyles,
  Button,
  TextField,
  Typography,
  Link,
} from "@material-ui/core";
import fs from "fs";
import title from "./../utils/title";
import { OPEN_PROJECT } from "../redux/constant";
import jsonfile from "jsonfile";
import generateHash from "../utils/generateHash";

const useStyles = makeStyles((theme) => ({
  input: {
    display: "flex",
    flexDirection: "column",
    padding: 8,
  },
  projects: {
    marginTop: 16,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  link: {
    padding: 4,
  },
}));

/**
 * @param {{ openProject: (projectName: string)=>void; }} props
 */
const HomeNav = (props) => {
  const classes = useStyles();
  const { openProject } = props;
  const [projectName, setProjectName] = useState("");
  const [error, setError] = useState("");
  const [recentList, setRecentList] = useState([]);
  const [projectList, setProjectList] = useState([]);
  const projectDir = `${process.cwd()}/projects`;

  /**
   * @param {string} projectName
   */
  const addNewProject = (projectName) => {
    fs.mkdir(`${projectDir}/${projectName}`, { recursive: true }, (err) => {
      if (err) console.log(err);
      else {
        // create config file.
        jsonfile.writeFile(`${projectDir}/${projectName}/.config`, {
          id: generateHash(),
          title: projectName,
          description: "",
          tags: "",
          genre: "",
          audience: "",
        });
        fs.readdir(projectDir, (err, data) => {
          if (err) throw err;
          // prevent infinite loop of update and re-render
          if (JSON.stringify(projectList) !== JSON.stringify(data)) {
            setProjectList(data);
            setRecentList([projectName, ...recentList]);
            setProjectName("");
          }
        });
      }
    });
  };

  return (
    <div className={classes.input}>
      <Button
        variant="contained"
        size="small"
        onClick={() => {
          if (projectName) addNewProject(projectName);
        }}
        disabled={error || !projectName ? true : false}
      >
        New project
      </Button>
      <TextField
        label="New project"
        value={projectName}
        placeholder="Click enter to add project"
        onChange={(e) => {
          setProjectName(e.target.value);
          // No input, no error
          if (!e.target.value.length) setError("");
          // Input too short or name already exist
          else if (e.target.value.length < 2) setError("Name is too short");
          else if (projectList.map(title).includes(title(e.target.value)))
            setError("Name already exist");
          else setError("");
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            // Can't disable enter, so I did the next best thing
            if (error) setError(title(`Can't add project, ${error}`));
            else if (!projectName) setError("Field is empty");
            else addNewProject(projectName);
          }
        }}
      />
      {error && (
        <Typography variant="subtitle1" color="error">
          {error}
        </Typography>
      )}
      {recentList.length ? (
        <Typography className={classes.projects} component="div">
          <Typography variant="h6">Recently added</Typography>
          {recentList.map((project, idx) => (
            <Link
              color="primary"
              key={idx}
              onClick={() => {
                openProject(project);
              }}
              component="button"
              className={classes.link}
            >
              {project}
            </Link>
          ))}
        </Typography>
      ) : null}
    </div>
  );
};

/**
 * @param {any} state
 */
const mapStateToProps = (state) => ({
  // content: state.content,
});

/**
 * @param {(arg0: { type: string; projectName: string; }) => any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  /**
   * @param {string} projectName
   */
  openProject: (projectName) =>
    dispatch({
      type: OPEN_PROJECT,
      projectName,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeNav);
