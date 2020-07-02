//@ts-check
import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";

// TODO: Hook it up with store.browser.data
/**
 * This would allow me to update stuff like template, word length, full directory etc.
 */
const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    zIndex: 1300,
    width: "100%",
    position: "fixed",
    justifyContent: "space-between",
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    bottom: 0,
  }
}));

const StatusBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.appBar}>
      <div>Word count</div>
      <div>Character length</div>
      <div>Template</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // content: state.content,
});

const mapDispatchToProps = (dispatch) => ({
  // props
});

export default connect(mapStateToProps, mapDispatchToProps)(StatusBar);
