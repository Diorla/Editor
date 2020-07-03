//@ts-check
import React from "react";
import { connect } from "react-redux";
import { makeStyles, Link } from "@material-ui/core";
import { AiOutlineDelete } from "react-icons/ai";
import { GiMoon } from "react-icons/gi";
import { IoMdHelp, IoMdSettings } from "react-icons/io";
import { FaRegStickyNote } from "react-icons/fa";
import {
  CHANGE_THEME,
  ON_BROWSER_CLOSE,
  ON_SIDEBAR_CHANGE,
  ON_BROWSER_CHANGE,
} from "./../redux/constant";
import fs from "fs";
import { remote } from "electron";
import Confirm from "./Confirm";
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

const TitleBar = (props) => {
  const classes = useStyles();
  const { changeTheme, closeProject, browser, changeBrowser } = props;
  console.log("titlebar:", browser);
  const deleter = () => {
    if (browser.mode === "document") {
      fs.unlink(browser.fullDir, (err) => {
        if (err) console.log(err);
        else {
          changeBrowser({
            mode: "empty",
          });
        }
      });
    } else if (browser.mode === "collection") {
      fs.rmdir(browser.fullDir, { recursive: true }, (err) => {
        if (err) console.log(err);
        else {
          changeBrowser({
            mode: "empty",
          });
        }
      });
    } else {
      fs.rmdir(browser.fullDir, { recursive: true }, (err) => {
        if (err) console.log(err);
        else {
          closeProject();
          console.log("Project deleted");
        }
      });
    }
  };
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
      {browser.name ? (
        <div className={classes.appSection}>{`${
          browser.name || ""
        } - Tome Editor`}</div>
      ) : (
        <div className={classes.appSection}>Tome Editor</div>
      )}
      <div className={classes.iconBar}>
        <GiMoon title="Dark mode" onClick={() => changeTheme()} />
        <FaRegStickyNote title="Add note" onClick={() => console.log("note")} />
        <IoMdHelp title="Get help" onClick={() => console.log("help")} />
        <IoMdSettings
          title="Get preferences"
          onClick={() => console.log("settings")}
        />
        {["project", "collection", "document"].includes(browser.mode) ? (
          <Confirm
            title={`Delete ${browser.name}`}
            message="This process is irrevesible"
            acceptFn={() => deleter()}
            cancelFn={() => console.log("Cancelling delete")}
          >
            <AiOutlineDelete />
          </Confirm>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  browser: state.browser,
});

const mapDispatchToProps = (dispatch) => ({
  changeTheme: () =>
    dispatch({
      type: CHANGE_THEME,
    }),
  closeProject: () => {
    dispatch({
      type: ON_BROWSER_CLOSE,
    });
    dispatch({
      type: ON_SIDEBAR_CHANGE,
      mode: "home",
      dir: "",
    });
  },
  changeBrowser: (payload) =>
    dispatch({
      type: ON_BROWSER_CHANGE,
      payload: {
        ...payload,
      },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar);
