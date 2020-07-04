//@ts-check
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "@material-ui/core";
import fs from "fs";
import useStyles from "../../components/useStyles";
import { ON_BROWSER_OPEN, ON_SIDEBAR_CHANGE } from "../../redux/constant";

// TODO: Create 3 sections on the screen
/**
 * 1. The list of all the projects.
 * 2. The list of current templates, click it will open template list
 * 3. Help: 3 or more highlighted help
 */

//TODO: Add templates creator.
/**
 * This will basically lead to page where there will list of default/created templates
 * on the sidebar. At the top of the sidebar, there will be a text input to enable
 * user to create a new template. The sidebar will be populated based on the files inside
 * ./template folder.
 * On the browser, there will be a simple editor based on the template in focus(when user
 * clicks a template or create new one)
 * The template editor will basically be like any other editor, and will be available as
 * a dropdown whenever a user wants to create a new document.
 * Note, users may be able to edit default templates, but they can't delete it.
 */

const Home = (props) => {
  const classes = useStyles();
  const projectDir = `${process.cwd()}/projects`;
  const { openProject } = props;
  const [projectList, setProjectList] = useState([]);

  const loadDir = () =>
    fs.readdir(projectDir, (err, data) => {
      if (err) throw err;
      // prevent infinite loop of update and re-render
      if (JSON.stringify(projectList) !== JSON.stringify(data))
        setProjectList(data);
    });

  useEffect(() => {
    console.log("home mounted");
    loadDir();
    return () => {
      console.log("home unmounted");
    };
  });
  return (
    <div className={classes.browserHome}>
      <div className={classes.projects}>
        <h2 style={{ textAlign: "center" }}>Projects</h2>
        {projectList.map((project, idx) => (
          <Link
            color="primary"
            key={idx}
            onClick={() => {
              openProject({
                name: project,
                fullDir: `./projects/${project}`,
                data: {},
              });
            }}
            component="button"
            className={classes.link}
          >
            {project}
          </Link>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // content: state.content,
});

const mapDispatchToProps = (dispatch) => ({
  openProject: (payload) => {
    dispatch({
      type: ON_BROWSER_OPEN,
      payload: {
        ...payload,
        mode: "project",
      },
    });
    dispatch({
      type: ON_SIDEBAR_CHANGE,
      payload: {
        mode: "project",
        dir: payload.fullDir,
      },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
