//@ts-check
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import fs from "fs";
import FileItem from "../../../components/FileItem";
import { openClipboard } from "../../../redux/aside";
import { Button } from "@material-ui/core";
import ErrorLog from "../../../components/ErrorLog";

/**
 * @param {{ aside: {dir: string}; openClipboard: (fullDir: string)=> void; }} props
 */
const Dir = (props) => {
  const { aside, openClipboard } = props;
  const [dirList, setDirList] = useState([]);
  useEffect(() => {
    fs.readdir(aside.dir, (err, data) => {
      if (err) ErrorLog(err);
      else setDirList(data);
    });
  }, []);
  return (
    <div>
      <h2>Clipboards</h2>
      <Button>New clipboard</Button>
      {dirList.map((item, idx) => (
        <FileItem
          key={idx}
          name={item}
          ext=".json"
          onClick={() => openClipboard(item)}
          type="file"
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  aside: state.aside,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  openClipboard: (fullDir) => dispatch(openClipboard(fullDir)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dir);
