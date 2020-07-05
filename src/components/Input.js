//@ts-check
import React from "react";
import { TextField } from "@material-ui/core";

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
