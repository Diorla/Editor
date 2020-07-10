//@ts-check
import React from "react";
import { TextField } from "@material-ui/core";
import useStyles from "../useStyles";

/**
 * @param {{ value: string; onChange: (arg0: string)=> void;}} props
 */
export default (props) => {
  const { value, onChange } = props;
  const classes = useStyles();
  const changeText = onChange || console.log;
  return (
    <TextField
      value={value}
      placeholder="Filter"
      onChange={(e) => changeText(e.target.value)}
      type="search"
      className={classes.fullWidth}
    />
  );
};
