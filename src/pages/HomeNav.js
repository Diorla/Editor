//@ts-check
import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles, Button, TextField } from "@material-ui/core";
// import fs from "fs";

const useStyles = makeStyles((theme) => ({
  home: {
    display: "flex",
    flexDirection: "column",
    padding: 8,
  },
  projects: {
    marginTop: 16,
  },
}));

const HomeNav = (props) => {
  const [projectName, setProjectName] = useState("");
  const classes = useStyles();

  return (
    <div className={classes.home}>
        <TextField
          label="New project"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <Button
          variant="contained"
          size="small"
          onClick={() => console.log("new project")}
        >
          New project
        </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // content: state.content,
});

const mapDispatchToProps = (dispatch) => ({
  // props
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeNav);
