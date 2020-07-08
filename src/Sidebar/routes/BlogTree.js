//@ts-check
import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import fs from "fs";
import { title } from "string-007";
import path from "path";
import { makeStyles } from "@material-ui/core";
import { AiOutlineFileExclamation } from "react-icons/ai";
import { openFile } from "../../redux/browser";
import FileItem from "../../components/FileItem";

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
    transition: "background linear 0.25s",
    "&:hover": {
      background: "rgba(0, 0, 0, 0.2)",
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

  useEffect(() => {
    fs.readdir("./blogs", (err, data) => {
      if (err) console.log(err);
      else setDirList(data);
    });
    return () => {
      console.log("blog tree unmounted");
    };
  }, []);
  const dispatch = useDispatch();

  return (
    <div className={classes.column}>
      {dirList.map(title).map((item, idx) => {
        const cls = activeItem === item ? classes.rollActive : classes.roll;
        return (
          <FileItem
            key={idx}
            name={item}
            ext=".md"
            onClick={() => {
              dispatch(
                openFile({
                  route: "blogs",
                  fullDir: `${process.cwd()}/blogs/${item}`,
                  name: path.basename(item, ".md"),
                })
              );
              setActiveItem(item);
            }}
            icon={<AiOutlineFileExclamation />}
            active={activeItem === item}
            type="file"
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  route: state.browser.route,
});

/**
 * @param {any} dispatch
 */
// const mapDispatchToProps = (dispatch) => ({
//   changeBrowser: ({ route, fullDir, name }) =>
//     dispatch(openFile({ name, route, fullDir })),
// });

export default connect(mapStateToProps, null)(Blog);
