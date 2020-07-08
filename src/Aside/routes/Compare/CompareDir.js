//@ts-check
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import FileItem from "../../../components/FileItem";
import { openCompare } from "../../../redux/aside";
import klaw from "klaw";
import ErrorLog from "../../../components/ErrorLog";

/**
 * @param {{ aside: {dir: string}; openCompare: (payload: {file: string})=> void; }} props
 */
const Dir = (props) => {
  const { aside, openCompare } = props;
  const [dirList, setDirList] = useState([]);
  useEffect(() => {
    const items = [];
    klaw(aside.dir)
      .on("data", (item) => {
        if (item.path.includes("scrb")) items.push(item.path);
      })
      .on("error", (err) =>ErrorLog(err))
      .on("end", () => setDirList(items));
  }, []);
  return (
    <div>
      <h2>Compare</h2>
      {dirList.map((item, idx) => (
        <FileItem
          key={idx}
          name={item}
          ext=".scrb"
          onClick={() =>
            openCompare({
              file: item,
            })
          }
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
  openCompare: (fullDir) => dispatch(openCompare(fullDir)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dir);
