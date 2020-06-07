//@ts-check
import React from "react";
import { TextareaAutosize } from "@material-ui/core";

export default (props) => {
  const id = "scrb" + Math.floor(Math.random() * 100000000);
  return (
    <div className="input">
      <label htmlFor={id}>{props.label}</label>
      <div className="input-field">
        <TextareaAutosize
          className="textarea"
          id={id}
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        />
      </div>
      <style jsx>{`
        label {
          text-transform: capitalize;
        }
        .input-field {
          display: flex;
        }
        .input {
          margin-bottom: 16px;
          #191818
        }
      `}</style>
    </div>
  );
};
