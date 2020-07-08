//@ts-check
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import fs from "fs";
import FileItem from "../../../components/FileItem";
import { openGenerator } from "../../../redux/aside";
import ErrorLog from "../../../components/ErrorLog";

/**
 * @param {{ aside: {dir: string}; openGenerator: (fullDir: string)=> void; }} props
 */
const Dir = (props) => {
  const { aside, openGenerator } = props;
  const [dirList, setDirList] = useState([]);
  useEffect(() => {
    fs.readdir(aside.dir, (err, data) => {
      if (err) ErrorLog(err);
      else setDirList(data);
    });
  }, []);
  return (
    <div>
      <h2>Generators</h2>
      {dirList.map((item, idx) => (
        <FileItem
          key={idx}
          name={item}
          ext=".json"
          onClick={() => openGenerator(item)}
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
  openGenerator: (fullDir) => dispatch(openGenerator(fullDir)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dir);
