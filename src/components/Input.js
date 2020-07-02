//@ts-check
import React from "react";
import { TextField, Box, Typography, Button } from "@material-ui/core";
import useStyles from "./useStyles";
import title from "../utils/title";
//TODO: Use store.form to handle different forms
/**
 * I've been passing around a lot of state management ie. setState, state, config etc
 * I need to add this to the store, like load .config or .scrb content straight into
 * the store.
 * And with this, I can update the .config or .scrb file by using subscribe in the main
 * tree.
 * If possible, I could find or build a middleware that only call the subscribe function
 * When there is change in form, and to improve performance, it will compare prevState
 * with currentState, or I could stick with saveConfig inside useEffect
 * I believe this will also speed up the app and reduce a lot of re-rendering that I'm
 * doing with useEffect.
 * So the store.form will have two options
 * 1. reset: state = {}
 * 2. update: state = {...state, ...action.payload}
 * 3. create: state = {...action.payload}
 */

/**
 * @param {{ value: string; label: string; placeholder: string; onChange: (arg0: string)=> void; }} props
 */
export const SimpleInput = (props) => {
  const { value, label, placeholder, onChange } = props;

  return (
    <TextField
      value={value}
      label={label}
      placeholder={placeholder}
      multiline
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
