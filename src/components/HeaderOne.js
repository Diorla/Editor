//@ts-check
import React from "react";
import useStyles from "./useStyles";

/**
 * @param {{ children: React.ReactNode; }} props
 */
export default (props) => {
  const classes = useStyles();
  return <h1 className={classes.headerOne}>{props.children}</h1>;
};
