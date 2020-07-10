//@ts-check
import React, { useState } from "react";
import { TextField, Typography } from "@material-ui/core";
import { title } from "string-007";
import useStyles from "../useStyles";

/**
 * It's used to create new files or folders
 * @param {{  label: string; list: string[]; saveItem: (item: string)=> void }} props
 */
export default (props) => {
  const { label, list, saveItem } = props;
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const classes = useStyles();
  /**
   * @param {string} text
   */
  const updateInput = (text) => {
    setValue(text);
    // input is empty
    if (!text) setError("");
    else if (list.map(title).includes(title(text)))
      setError("Directory already exist, choose a different name");
    else setError("");
  };

  const saveItemFn = () => {
    setValue("");
    saveItem(value);
  };

  return (
    <div>
      <TextField
        className={classes.fullWidth}
        value={value}
        label={label}
        placeholder="Click enter to add"
        onChange={(e) => {
          updateInput(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            if (error) setError("Please choose a different name");
            else saveItemFn();
          }
        }}
      />
      <div>
        {error && (
          <Typography
            variant="subtitle1"
            style={{ fontSize: 14 }}
            color="error"
          >
            {error}
          </Typography>
        )}
      </div>
    </div>
  );
};
