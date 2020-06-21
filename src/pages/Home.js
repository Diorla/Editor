//@ts-check
import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles, Link } from "@material-ui/core";
import fs from "fs";
import jsonfile from "jsonfile";
import { OPEN_PROJECT } from "./../redux/constant";
import HelpBar from "../components/HelpBar";

/**
 * Left side of the screen
 * # Start
 * projects[]
 * 
 * # Help
 * cheat sheet
 * tips and tricks
 * join newsletter
 * open website
 */
/**
 * Right side of the screen
 * # Customise
 * color theme
 * 
 * # Blogs
 * blogs[]
 */
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
  const classes = useStyles();
  const projectDir = `${process.cwd()}/projects`;
  const { openProject } = props;
  const [helpList, setHelpList] = useState([]);
  const [projectList, setProjectList] = useState([]);
  jsonfile.readFile(`${process.cwd()}/src/data/help.json`, (err, val) => {
    if (err) console.log(err);
    else setHelpList(val);
  });

  fs.readdir(projectDir, (err, data) => {
    if (err) throw err;
    // prevent infinite loop of update and re-render
    if (JSON.stringify(projectList) !== JSON.stringify(data))
      setProjectList(data);
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
              openProject(project);
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
