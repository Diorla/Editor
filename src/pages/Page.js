//@ts-check
import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
}));

const Page = ({ project }) => {
  const classes = useStyles();
  return <main className={classes.content}>Page: {project.activeFile}</main>;
};

const mapStateToProps = (state) => ({
  project: state.project,
});

const mapDispatchToProps = (dispatch) => ({
  // props
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
