//@ts-check
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "@material-ui/core";
import fs from "fs";
import useStyles from "../../components/useStyles";
import { openProject } from "../../redux/browser";
import { openTree } from "../../redux/sidebar";

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
  openProject: ({ name, route, fullDir }) => {
    dispatch(openProject({ name, route, fullDir }));
    dispatch(openTree(fullDir));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
