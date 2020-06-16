//@ts-check
import React from "react";
import { connect } from "react-redux";
import { makeStyles, Drawer } from "@material-ui/core";
import SidebarRoutes from "./SidebarRoutes";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  drawerContainer: {
    paddingBottom: theme.spacing(2),
  },
}));

const SideBar = (props) => {
  const classes = useStyles();
  const { screen } = props;
  return (
    <Drawer className={classes.drawer} variant="permanent">
      <SidebarRoutes />
    </Drawer>
  );
};

const mapStateToProps = (state) => ({
  screen: state.screen,
});

const mapDispatchToProps = (dispatch) => ({
  //
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
