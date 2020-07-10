//@ts-check
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import fs from "fs";
import { openClipboard } from "../../../redux/aside";
import ErrorLog from "../../../components/ErrorLog";
import { FileInput } from "../../../components/Input";
import path from "path";
import jsonfile from "jsonfile";
import Item from "./Item";

/**
 * @param {{ aside: {dir: string}; openClipboard: (fullDir: string)=> void; }} props
 */
const Dir = (props) => {
  const { aside, openClipboard } = props;
  const [dirList, setDirList] = useState([]);

  const createList = () => {
    fs.readdir(aside.dir, (err, data) => {
      if (err) ErrorLog(err);
      else setDirList(data);
    });
  };
  /**
   * @param {string} value
   */
  const updateList = (value) => {
    jsonfile.writeFile(`clipboard/${value}.json`, {
      content: "",
    });
    setDirList([`${value}.json`, ...dirList]);
  };

  /**
   * @param {fs.PathLike} directory
   * @param {number} idx
   */
  const deleteDir = (directory, idx) => {
    fs.unlink(directory, (err) => {
      if (err) ErrorLog(err);
      // I decided to update the list by manipulating this array instead of fs.readdir
      // so that I can keep recent files on top
      else setDirList([...dirList.slice(0, idx), ...dirList.slice(idx + 1)]);
    });
  };
  useEffect(() => {
    createList();
  }, []);
  return (
    <div>
      <FileInput
        label="New note"
        list={dirList.map((item) => path.basename(item, ".json"))}
        saveItem={updateList}
      />
      <div style={{ marginBottom: 8 }} />
      {dirList.map((item, idx) => (
        <Item
          key={idx}
          name={item}
          ext=".json"
          onClick={() => openClipboard(item)}
          type="file"
          onDelete={() => deleteDir(`${aside.dir}/${item}`, idx)}
        />
      ))}
    </div>
  );
};

/**
 * @param {{ aside: {dir: string}; }} state
 */
const mapStateToProps = (state) => ({
  aside: state.aside,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  /**
   * @param {any} fullDir
   */
  openClipboard: (fullDir) => dispatch(openClipboard(fullDir)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dir);
