//@ts-check
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { TextField, Typography, Link } from "@material-ui/core";
import fs from "fs";
import jsonfile from "jsonfile";
import generateHash from "../../utils/generateHash";
import title from "../../utils/title";
import useStyles from "../../components/useStyles";
import { openProject } from "../../redux/browser";
import { openTree } from "../../redux/sidebar";

const HomeNav = (props) => {
  const classes = useStyles();
  const { openProject } = props;
  const [projectName, setProjectName] = useState("");
  const [error, setError] = useState("");
  const [recentList, setRecentList] = useState([]);
  const [projectList, setProjectList] = useState([]);
  const projectDir = `${process.cwd()}/projects`;

  const manageList = () => {
    fs.readdir(projectDir, (err, data) => {
      if (err) throw err;
      // prevent infinite loop of update and re-render
      if (JSON.stringify(projectList) !== JSON.stringify(data)) {
        setProjectList(data);
        setRecentList([projectName, ...recentList]);
        setProjectName("");
      }
    });
  };
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
        manageList();
      }
    });
  };
  useEffect(() => {
    manageList();
    return () => {
      console.log("unmounting home tree");
    };
  }, []);
  return (
    <div className={classes.input}>
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
              onClick={() =>
                openProject(
                  {
                    name: project,
                    fullDir: `./projects/${project}`,
                    data: {},
                  },
                  `./projects/${project}`
                )
              }
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

const mapStateToProps = (state) => ({
  // content: state.content,
});

const mapDispatchToProps = (dispatch) => ({
  openProject: ({ name, mode, fullDir }) => {
    dispatch(openProject({ name, mode, fullDir }));
    dispatch(openTree(fullDir));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeNav);
