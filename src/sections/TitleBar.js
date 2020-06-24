//@ts-check
import React from "react";
import { connect } from "react-redux";
import { makeStyles, Link } from "@material-ui/core";
import { AiOutlineDelete } from "react-icons/ai";
import { GiMoon } from "react-icons/gi";
import { IoMdHelp } from "react-icons/io";
import { FaRegStickyNote } from "react-icons/fa";
import { CHANGE_THEME } from "../redux/constant";
import { CLOSE_PROJECT } from "./../redux/constant";
import path from "path";

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    zIndex: 1300,
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
 * @param {{ project?: {projectName: string, collectionDir: string, itemDir: string, activeBlog: string}; changeTheme?: ()=> void; closeProject?: ()=> void; }} props
 */
const TitleBar = (props) => {
  const classes = useStyles();
  const { changeTheme, closeProject } = props;
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
        <FaRegStickyNote title="Add note" onClick={() => console.log("note")} />
        <IoMdHelp title="Get help" onClick={() => console.log("help")} />
        <AiOutlineDelete title="Delete" onClick={() => console.log("delete")} />
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

/**
 * @param {(arg0: { type: string; }) => any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  changeTheme: () =>
    dispatch({
      type: CHANGE_THEME,
    }),
  closeProject: () =>
    dispatch({
      type: CLOSE_PROJECT,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar);
