//@ts-check
import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";

let arr = [];

arr.length = 1000;

arr.fill("This is it");

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
}));

const Browser = (props) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div>Top</div>
      {arr.map((item, idx) => (
        <div key={idx}>{item}</div>
      ))}
      <div>Bottom</div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  // content: state.content,
});

const mapDispatchToProps = (dispatch) => ({
  // props
});

export default connect(mapStateToProps, mapDispatchToProps)(Browser);
