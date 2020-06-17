//@ts-check
import React from "react";
import { connect } from "react-redux";
import { makeStyles, Drawer, Box } from "@material-ui/core";
import SidebarRoutes from "./SidebarRoutes";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    minWidth: drawerWidth,
    flexShrink: 0,
  },
  drawerContainer: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    width: drawerWidth,
  },
}));

const SideBar = (props) => {
  const classes = useStyles();
  return (
    <Drawer className={classes.drawer} variant="permanent">
      <Box className={classes.drawerContainer}>
        <SidebarRoutes />
      </Box>
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
