//@ts-check
import React from "react";
import { connect } from "react-redux";
import Button from "../components/Button";
import { remote } from "electron";
import path from "path";
import jsonfile from "jsonfile";
import { OPEN_FILE, UPDATE_FILE } from "../redux/constant";
import generator from "../modules/generator";

const filters = [{ name: "Scribble files", extensions: ["scrb"] }];

const TitleBar = (props) => {
  const file = props.file ? path.basename(props.file) : "";
  return (
    <div className="titlebar">
      <Button
        variant="link"
        onClick={() => {
          remote.dialog
            .showOpenDialog({
              properties: ["openFile"],
              filters,
            })
            .then((folder) => {
              const filePath = folder.filePaths[0];
              const dir = path.dirname(filePath);
              props.updateName(filePath);
              jsonfile
                .readFile(`${dir}/.template`)
                .then((template) => {
                  jsonfile.readFile(filePath).then((val) =>
                    props.updateFile({
                      ...template,
                      ...val,
                    })
                  );
                })
                .catch((err) => {
                  //file doesn't exist
                  jsonfile
                    .readFile(filePath)
                    .then((val) => props.updateFile(val));
                });
            });
        }}
      >
        Open file
      </Button>
      <span>{file}</span>
      <div>
        <Button
          variant="link"
          onClick={() =>
            jsonfile
              .writeFile(props.file, props.content)
              .then(() => console.log("saved"))
              .catch((err) => console.log(err))
          }
        >
          Save
        </Button>
        <Button
          variant="link"
          onClick={() =>
            jsonfile
              .readFile(`${path.dirname(props.file)}/.generator`)
              .then((val) => props.updateFile(generator(props.content, val)))
              .catch((err) => console.log(err))
          }
        >
          Randomise
        </Button>
        <Button
          variant="link"
          onClick={() => {
            print();
            jsonfile
              .writeFile(props.file, props.content)
              .then(() => console.log("saved"))
              .catch((err) => console.log(err));
          }}
        >
          Print
        </Button>
      </div>
      <style jsx>{`
        .titlebar {
          display: flex;
          justify-content: space-between;
          padding: 4px;
        }
      `}</style>
    </div>
  );
};

/**
 * @param {{ file: any; content: any; }} state
 */
const mapStateToProps = (state) => ({
  file: state.file,
  content: state.content,
});

/**
 * @param {(arg0: { type: string; file?: any; payload?: any; }) => any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  /**
   * @param {any} file
   */
  updateName: (file) =>
    dispatch({
      type: OPEN_FILE,
      file,
    }),

  /**
   * @param {any} value
   */
  updateFile: (value) =>
    dispatch({
      type: UPDATE_FILE,
      payload: value,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar);
