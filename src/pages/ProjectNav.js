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

const ProjectNav = ({ projectName }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <FileTree activeFile={projectName} />
    </main>
  );
};

const mapStateToProps = (state) => ({
  screen: state.screen,
  projectName: state.project.projectName,
});

const mapDispatchToProps = (dispatch) => ({
  // props
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectNav);
