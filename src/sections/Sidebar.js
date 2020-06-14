//@ts-check
import React from "react";
import { connect } from "react-redux";
import { makeStyles, Drawer } from "@material-ui/core";
import HomeNav from "./../pages/HomeNav";
import { sidebar } from "./Routes";

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
        {sidebar[screen] ? sidebar[screen] : <HomeNav />}
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
