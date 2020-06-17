//@ts-check
import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import FileTree from "../components/FileTree";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
}));

const ProjectNav = ({ project }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <FileTree activeDir={project} />
    </main>
  );
};

const mapStateToProps = (state) => ({
  screen: state.screen,
  project: state.project.activeProject,
});

const mapDispatchToProps = (dispatch) => ({
  // props
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectNav);
