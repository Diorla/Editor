//@ts-check
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import TitleBar from "./sections/TitleBar";
import Sidebar from "./sections/Sidebar";
import Browser from "./sections/Browser";
import StatusBar from "./sections/StatusBar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function Layout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TitleBar />
      <Sidebar />
      <Browser />
      <StatusBar />
    </div>
  );
}

export default Layout;
