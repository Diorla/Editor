//@ts-check
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Typography, Link } from "@material-ui/core";
import fs from "fs";
import jsonfile from "jsonfile";
import generateHash from "../../utils/generateHash";
import useStyles from "../../components/useStyles";
import { openProject } from "../../redux/browser";
import { openTree } from "../../redux/sidebar";
import { FileInput } from "../../components/Input";
import ErrorLog from "../../components/ErrorLog";

const HomeNav = (props) => {
  const classes = useStyles();
  const { openProject } = props;
  const [recentList, setRecentList] = useState([]);
  const [projectList, setProjectList] = useState([]);
  const projectDir = `${process.cwd()}/projects`;

  const manageList = () => {
    fs.readdir(projectDir, (err, data) => {
      if (err) ErrorLog(err);
      // prevent infinite loop of update and re-render
      if (JSON.stringify(projectList) !== JSON.stringify(data))
        setProjectList(data);
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
        setRecentList([projectName, ...recentList]);
        setProjectList([projectName, ...projectList]);
      }
    });
  };
  useEffect(() => {
    manageList();
    return () => {
      console.log("unmounting home tree");
    };
  }, [projectList]);
  return (
    <div className={classes.hometree}>
      <FileInput
        label="New project"
        list={projectList}
        saveItem={addNewProject}
      />
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
  openProject: ({ name, route, fullDir }) => {
    dispatch(openProject({ name, route, fullDir }));
    dispatch(openTree(fullDir));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeNav);
