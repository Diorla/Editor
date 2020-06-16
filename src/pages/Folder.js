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

const Folder = (props) => {
  const classes = useStyles();
  return <main className={classes.content}>This is folder</main>;
};

const mapStateToProps = (state) => ({
  screen: state.screen,
});

const mapDispatchToProps = (dispatch) => ({
  // props
});

export default connect(mapStateToProps, mapDispatchToProps)(Folder);
