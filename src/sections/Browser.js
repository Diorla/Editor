//@ts-check
import React from "react";
import { connect } from "react-redux";
import { UPDATE_FILE } from "./../redux/constant";
import Input from "../components/Input";

/**
 * @param {{ content: { name: ""; }; updateFile: (arg0: any) => void; }} props
 */
const Browser = (props) => {
  return (
    <div className="Browser">
      {Object.keys(props.content).map((key, index) => (
        <Input
          key={index}
          label={key}
          value={props.content[key]}
          onChange={(val) =>
            props.updateFile({
              ...props.content,
              [key]: val,
            })
          }
        />
      ))}
    </div>
  );
};

/**
 * @param {{ content: any; }} state
 */
const mapStateToProps = (state) => ({
  content: state.content,
});

/**
 * @param {(arg0: { type: string; payload: any; }) => any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  /**
   * @param {any} value
   */
  updateFile: (value) =>
    dispatch({
      type: UPDATE_FILE,
      payload: value,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Browser);
