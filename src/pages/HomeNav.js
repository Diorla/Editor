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
import { UPDATE_PROJECT_LIST } from "../redux/constant";
import title from "./../utils/title";
import Temp from "./../Temp";

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

const HomeNav = (props) => {
  const [projectName, setProjectName] = useState("");
  const [error, setError] = useState("");
  const [recentList, setRecentList] = useState([]);
  const classes = useStyles();

  const { updateProjectList, projectList } = props;
  const projectDir = `${process.cwd()}/projects`;

  const addNewProject = (projectName) => {
    fs.mkdir(`${projectDir}/${projectName}`, { recursive: true }, (err) => {
      if (err) console.log(err);
      else {
        fs.readdir(projectDir, (err, data) => {
          if (err) throw err;
          // prevent infinite loop of update and re-render
          if (JSON.stringify(projectList) !== JSON.stringify(data)) {
            updateProjectList(data);
            setRecentList([...recentList, projectName]);
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
          if (!e.target.value.length) setError("");
          else if (e.target.value.length < 2) setError("Name is too short");
          else if (projectList.map(title).includes(title(e.target.value)))
            setError("Name already exist");
          else setError("");
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
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
          {recentList.map((item, idx) => (
            <Link
              color="primary"
              key={idx}
              onClick={() => console.log(item)}
              component="button"
              className={classes.link}
            >
              {item}
            </Link>
          ))}
        </Typography>
      ) : null}
      <Temp />
    </div>
  );
};

const mapStateToProps = (state) => ({
  // content: state.content,
  projectList: state.projectList,
});

const mapDispatchToProps = (dispatch) => ({
  updateProjectList: (projectList) =>
    dispatch({
      type: UPDATE_PROJECT_LIST,
      projectList,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeNav);
