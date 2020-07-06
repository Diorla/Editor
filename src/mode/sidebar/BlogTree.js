//@ts-check
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import fs from "fs";
import title from "../../utils/title";
import path from "path";
import { makeStyles } from "@material-ui/core";
import { AiOutlineFileExclamation } from "react-icons/ai";
import { openFile } from "../../redux/browser";

const useStyles = makeStyles((theme) => ({
  column: {
    display: "flex",
    flexDirection: "column",
    margin: 4,
    textTransform: "uppercase",
  },
  roll: {
    padding: "2px 8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      background: "rgba(0, 0, 0, 0.1)",
    },
  },
  rollActive: {
    padding: "2px 8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.1)",
  },
}));

const Blog = (props) => {
  const [dirList, setDirList] = useState([]);
  const classes = useStyles();
  const [activeItem, setActiveItem] = useState("");
  const { changeBrowser } = props;

  useEffect(() => {
    fs.readdir("./blogs", (err, data) => {
      if (err) console.log(err);
      //console.log("loaded:", data);
      else setDirList(data);
    });
    return () => {
      console.log("blog tree unmounted");
    };
  }, []);
  console.log("dirlist:", dirList);
  return (
    <div className={classes.column}>
      {dirList.map(title).map((item, idx) => {
        const cls = activeItem === item ? classes.rollActive : classes.roll;
        return (
          <div
            key={idx}
            onClick={() => {
              changeBrowser({
                mode: "blogs",
                fullDir: `${process.cwd()}/blogs/${item}`,
                name: path.basename(item, ".md"),
              });
              setActiveItem(item);
            }}
            className={cls}
          >
            <AiOutlineFileExclamation
              style={{ color: "#2196F3", marginRight: 4 }}
            />
            {path.basename(item, ".md")}
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  mode: state.browser.mode,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  changeBrowser: ({ mode, fullDir, name }) =>
    dispatch(openFile({ name, mode, fullDir })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
