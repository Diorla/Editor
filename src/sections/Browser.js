//@ts-check
import React from "react";
import { connect } from "react-redux";
import { UPDATE_FILE } from "./../redux/constant";
import Input from "../components/Input";

/**
 * @param {{ content: { name: ""; }; updateFile: (arg0: any) => void; }} props
 * I chose the following for h1 to h3 to prevent any clashing with inputs
 * #52nxfjtpi3y2m03f3u3y2m03f3u
 * #3dryadmnu4id9pu67s2thakncvv
 * #3y2m04cel3dryae0ci1ovz57069
 */
const Browser = (props) => {
  return (
    <div className="browser">
      {Object.keys(props.content).map((key, index) => {
        if (props.content[key] === "#52nxfjtpi3y2m03f3u3y2m03f3u")
          return <h1 key={index}>{key}</h1>;
        else if (props.content[key] === "#3dryadmnu4id9pu67s2thakncvv")
          return <h2 key={index}>{key}</h2>;
        else if (props.content[key] === "#3y2m04cel3dryae0ci1ovz57069")
          return <h3 key={index}>{key}</h3>;
        else
          return (
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
          );
      })}
      <style jsx>{`
        .browser {
          display: flex;
          flex-direction: column;
          flex: 1;
          margin-left: 180px; /*Note to overlap with sidebar*/
        }
      `}</style>
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
