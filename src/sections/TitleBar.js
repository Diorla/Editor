//@ts-check
import React from "react";
import { connect } from "react-redux";
import { makeStyles, Link } from "@material-ui/core";
import { AiOutlineDelete } from "react-icons/ai";
import { GiMoon } from "react-icons/gi";
// import { IoMdHelp, IoMdSettings } from "react-icons/io";
// import { FaRegStickyNote } from "react-icons/fa";
import {
  CHANGE_THEME,
  OPEN_COLLECTION,
  OPEN_PROJECT,
  CLOSE_PROJECT,
} from "./../redux/constant";
import path from "path";
import fs from "fs";
// TODO: Add modal for opening settings and help
// TODO: Add generator opener.
const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    zIndex: 10001,
    width: "100%",
    position: "fixed",
    justifyContent: "space-between",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  iconBar: {
    justifyContent: "space-around",
    display: "flex",
    alignItems: "center",
    fontSize: "large",
    flex: 1,
  },
  link: {
    color: theme.palette.primary.contrastText,
  },
  appSection: {
    display: "flex",
    flex: 1,
  },
}));

/**
 * @param {{ project?: {projectName: string, collectionDir: string, itemDir: string, activeBlog: string}; changeTheme?: ()=> void; closeProject?: ()=> void; openFolder?: (arg0: string)=> void; openProject?: (arg0: string)=> void;}} props
 */
const TitleBar = (props) => {
  const classes = useStyles();
  const { changeTheme, closeProject, openFolder, openProject } = props;
  const { projectName, collectionDir, itemDir, activeBlog } = props.project;
  const title =
    activeBlog ||
    path.basename(itemDir, ".scrb") ||
    path.basename(collectionDir) ||
    projectName;
  return (
    <div className={classes.appBar}>
      <div className={classes.appSection}>
        <Link
          component="button"
          className={classes.link}
          onClick={() => closeProject()}
        >
          Home
        </Link>
      </div>
      <div className={classes.appSection}>{`${title} - Tome Editor`}</div>
      <div className={classes.iconBar}>
        <GiMoon title="Dark mode" onClick={() => changeTheme()} />
        {/*<FaRegStickyNote title="Add note" onClick={() => console.log("note")} />
        <IoMdHelp title="Get help" onClick={() => console.log("help")} />
        <IoMdSettings
          title="Get preferences"
          onClick={() => console.log("settings")}
        />*/}
        <AiOutlineDelete
          title="Delete"
          onClick={() => {
            // const { projectName, collectionDir, itemDir, activeBlog } = props.project;
            const target = "" || itemDir || collectionDir || projectName;
            if (
              target &&
              confirm(`Are you sure you want to delete ${target}`)
            ) {
              if (itemDir) {
                openFolder(collectionDir);
                fs.unlink(itemDir, (err) => {
                  if (err) console.log(err);
                  else console.log("file deleted");
                });
              } else if (collectionDir) {
                openProject(projectName);
                fs.rmdir(collectionDir, { recursive: true }, (err) => {
                  if (err) console.log(err);
                  else console.log("file deleted");
                });
              } else {
                closeProject();
                fs.rmdir(
                  `${process.cwd()}/projects/${projectName}`,
                  { recursive: true },
                  (err) => {
                    if (err) console.log(err);
                    else console.log("file deleted");
                  }
                );
              }
            } else console.log("Not deleting");
          }}
        />
      </div>
    </div>
  );
};

/**
 * @param {{ project: {projectName: string, collectionDir: string, itemDir: string, activeBlog: string}; }} state
 */
const mapStateToProps = (state) => ({
  project: state.project,
});

const mapDispatchToProps = (dispatch) => ({
  changeTheme: () =>
    dispatch({
      type: CHANGE_THEME,
    }),
  closeProject: () =>
    dispatch({
      type: CLOSE_PROJECT,
    }),
  /**
   * @param {string} collectionDir
   */
  openFolder: (collectionDir) =>
    dispatch({
      type: OPEN_COLLECTION,
      collectionDir,
    }),
  /**
   * @param {string} projectName
   */
  openProject: (projectName) =>
    dispatch({
      type: OPEN_PROJECT,
      projectName,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar);
