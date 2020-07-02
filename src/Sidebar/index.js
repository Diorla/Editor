//@ts-check
import React from "react";
import { connect } from "react-redux";
import { Drawer, Box } from "@material-ui/core";
import Router from "./Router";
import useStyles from "../components/useStyles";

const SideBar = (props) => {
  const classes = useStyles();
  return (
    <Drawer className={classes.drawer} variant="permanent">
      <Box className={classes.drawerContainer}>
        <Router />
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
