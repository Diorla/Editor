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
// TODO: Complete toolbars
/**
 * There are three types of icons on the titlebar
 * Transform: these icons makes changes to the screen instantly e.g theme change and delete file.
 * Modal: these open Modal that covers the screen, this will be used in "settings" and "help"
 * Aside: these will open a panel at the right side of the screen which will provide certain functionality
 */
// TODO: Complete modals
/**
 * Settings
 * Help
 */
// TODO: Complete Aside
/**
 * Generator: At the top, there will be a dropdown of all the list of generators available. This will make it easier to add data from the generator straight into their editor. Each inputs on the generator will have freeze icon to prevent changes and a copy icon to copy the content of the inputs
 * Reader: It will return a flat list of all the files inside the current project. All the files will be accessible via inputs with datalist, and whenever you select a file, it will load the content of the file that is not editable. The goal of this is so that you can copy into another file or perform lookup e.g. you are writing about a character and you want to see the information about that character or you're writing a story and you want to see what should be in your next chapter. Note, if user doesn't select any file or it doesn't match any file(since users will be using inputs), we don't render any file. At the top of the reader, there will be a copy icon, in case user wants to copy the entire contents (and user may copy manually by selecting the parts that they want.)
 */
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
    color: theme.palette.text.primary,
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
