//@ts-check
import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles, Link } from "@material-ui/core";
import fs from "fs";
import jsonfile from "jsonfile";
import { UPDATE_PROJECT_LIST, OPEN_PROJECT } from "./../redux/constant";
import HelpBar from "../components/HelpBar";
import { CHANGE_SCREEN } from "./../redux/constant";

const useStyles = makeStyles((theme) => ({
  home: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  projects: {
    marginTop: 16,
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "flex-start",
  },
  link: {
    padding: 4,
  },
}));

const Home = (props) => {
  const {
    updateProjectList,
    projectList,
    updateProjectDir,
    changeScreen,
  } = props;
  const classes = useStyles();
  const projectDir = `${process.cwd()}/projects`;
  const [helpList, setHelpList] = useState([]);
  jsonfile.readFile(`${process.cwd()}/src/data/help.json`, (err, val) => {
    if (err) console.log(err);
    else setHelpList(val);
  });

  fs.readdir(projectDir, (err, data) => {
    if (err) throw err;
    // prevent infinite loop of update and re-render
    if (JSON.stringify(projectList) !== JSON.stringify(data))
      updateProjectList(data);
  });

  return (
    <div className={classes.home}>
      <div className={classes.projects}>
        <h2 style={{ textAlign: "center" }}>Projects</h2>
        {projectList.map((project, idx) => (
          <Link
            color="primary"
            key={idx}
            onClick={() => {
              updateProjectDir(project);
              changeScreen("Project");
            }}
            component="button"
            className={classes.link}
          >
            {project}
          </Link>
        ))}
      </div>
      <div className={classes.projects}>
        <h2>Help</h2>
        {helpList.map((helpItem, idx) => (
          <HelpBar
            key={idx}
            title={helpItem.title}
            content={helpItem.content}
          />
        ))}
      </div>
    </div>
  );
};

/**
 * @param {{ projectList: []; }} state
 */
const mapStateToProps = (state) => ({
  // content: state.content,
  projectList: state.projectList,
});

/**
 * @param {(arg0: { type: string; projectList?: []; projectDir?: string; screen?: string; }) => any} dispatch
 */
const mapDispatchToProps = (dispatch) =>
  /**
   * @param {[]} projectList
   */
  ({
    updateProjectList: (projectList) =>
      dispatch({
        type: UPDATE_PROJECT_LIST,
        projectList,
      }),

    /**
     * @param {string} projectDir
     */
    updateProjectDir: (projectDir) =>
      dispatch({
        type: OPEN_PROJECT,
        projectDir,
      }),

    /**
     * @param {string} screen
     */
    changeScreen: (screen) =>
      dispatch({
        type: CHANGE_SCREEN,
        screen,
      }),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Home);
