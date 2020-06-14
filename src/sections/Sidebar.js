//@ts-check
import React from "react";
import { connect } from "react-redux";
import { makeStyles, Drawer } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: theme.spacing(4),
  },
  drawerContainer: {
    marginBottom: theme.spacing(2),
  },
}));

let arr = [];

arr.length = 500;

arr.fill("This is it");

const SideBar = (props) => {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerContainer}>
        <div>Top</div>
        {arr.map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
        <div>Bottom</div>
      </div>
    </Drawer>
  );
};

const mapStateToProps = () => ({
  // dir: state.dir,
});

const mapDispatchToProps = (dispatch) => ({
  //
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
