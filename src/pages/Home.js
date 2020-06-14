//@ts-check
import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import fs from "fs";

const useStyles = makeStyles((theme) => ({
  home: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 8,
  },
  projects: {
    marginTop: 16,
  },
}));

const Home = (props) => {
  const [projects, setProjects] = useState([]);
  const classes = useStyles();
  const projectDir = `${process.cwd()}/projects`;
  fs.readdir(projectDir, (err, data) => {
    if (err) throw err;
    setProjects(data);
  });
  return (
    <div className={classes.home}>
      <div className={classes.projects}>
        {projects.map((project, idx) => (
          <div key={idx} onClick={() => console.log(project)}>
            {project}
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // content: state.content,
});

const mapDispatchToProps = (dispatch) => ({
  // props
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
