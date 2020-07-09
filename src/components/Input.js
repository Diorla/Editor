//@ts-check
import React from "react";
import { TextField } from "@material-ui/core";

/**
 * @param {{ value: string; label: string; placeholder: string; onChange?: (arg0: string)=> void; disabled?: boolean}} props
 */
export const SimpleInput = (props) => {
  const { value, label, placeholder, onChange, disabled } = props;
  const changeText = onChange || console.log;
  return (
    <TextField
      value={value}
      label={label}
      placeholder={placeholder}
      multiline
      onChange={(e) => changeText(e.target.value)}
      disabled={disabled}
    />
  );
};
