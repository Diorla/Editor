//@ts-check
import React from "react";
import { connect } from "react-redux";
import { makeStyles, Link } from "@material-ui/core";
import {
  AiOutlineDelete,
  AiOutlineProfile,
  AiOutlineCopy,
} from "react-icons/ai";
import { GiMoon, GiInvertedDice3 } from "react-icons/gi";
import { IoMdHelp, IoMdGitCompare } from "react-icons/io";
import { FaRegStickyNote } from "react-icons/fa";
import fs from "fs";
import Confirm from "./Confirm";
import { changeTheme } from "../redux/theme";
import { closeProject, openBrowser } from "../redux/browser";
import { goHome, openSidebar } from "../redux/sidebar";
import { truncate } from "string-007";
import layoutStyles from "../components/layoutStyles";
import {
  openGenerator,
  openClipboard,
  openCompare,
  closeAside,
} from "../redux/aside";
import ErrorLog from "../components/ErrorLog";
import jsonfile from "jsonfile";

const useStyles = makeStyles((theme) => ({
  icon: {
    padding: 8,
    fontSize: 32,
    flex: 1,
    transition: "background linear 0.25s",
    "&:hover": {
      background: "rgba(0, 0, 0, 0.2)",
    },
  },
  iconActive: {
    padding: 8,
    fontSize: 32,
    flex: 1,
    background: "rgba(0, 0, 0, 0.2)",
  },
  link: {
    color: theme.palette.primary.contrastText,
    padding: "0 8px",
  },
  appSection: {
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    marginLeft: 4,
  },
  appTitle: {
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
}));

const TitleBar = (props) => {
  const classes = useStyles();
  const layout = layoutStyles();
  const {
    changeTheme,
    closeProject,
    browser,
    sidebar,
    openBrowser,
    changeSidebar,
    openGenerator,
    openClipboard,
    openCompare,
    closeAside,
    aside,
    allData,
  } = props;
  console.log("All data:", allData);
  jsonfile.writeFile("tmp", allData, (err) => {
    if (err) ErrorLog(err);
  });
  const deleter = () => {
    if (browser.route === "document") {
      fs.unlink(browser.fullDir, (err) => {
        if (err) ErrorLog(err);
        else {
          openBrowser();
        }
      });
    } else if (browser.route === "collection") {
      fs.rmdir(browser.fullDir, { recursive: true }, (err) => {
        if (err) ErrorLog(err);
        else {
          openBrowser();
        }
      });
    } else {
      fs.rmdir(browser.fullDir, { recursive: true }, (err) => {
        if (err) ErrorLog(err);
        else {
          closeProject();
        }
      });
    }
  };
  return (
    <main className={layout.top}>
      <div className={classes.appSection}>
        <Link
          component="button"
          className={classes.link}
          onClick={() => {
            closeProject();
            if (aside.route === "compare") closeAside();
          }}
        >
          Home
        </Link>
      </div>
      {browser.name ? (
        <div className={classes.appTitle}>{`${truncate(
          browser.name,
          16
        )} - Tome Editor`}</div>
      ) : (
        <div className={classes.appTitle}>Tome Editor</div>
      )}
      <div className={classes.appSection}>
        <GiMoon
          title="Dark mode"
          onClick={() => changeTheme()}
          className={classes.icon}
        />
        <FaRegStickyNote
          title="Add note"
          onClick={() => console.log("note")}
          className={classes.icon}
        />
        <IoMdHelp
          title="Get help"
          onClick={() => {
            if (browser.route !== "blogs") openBrowser();
            changeSidebar("blogs");
          }}
          className={
            sidebar.route === "blogs" ? classes.iconActive : classes.icon
          }
        />
        <AiOutlineProfile
          title="Manage templates"
          onClick={() => {
            if (browser.route !== "templates") openBrowser();
            changeSidebar("templates");
          }}
          className={
            sidebar.route === "templates" ? classes.iconActive : classes.icon
          }
        />
        {["projects", "collection", "document"].includes(browser.route) ? (
          <>
            <Confirm
              title={`Delete ${browser.name}`}
              message="This process is irrevesible"
              acceptFn={() => deleter()}
              cancelFn={() => console.log("Cancelling delete")}
            >
              <AiOutlineDelete className={classes.icon} />
            </Confirm>
            <IoMdGitCompare
              title="Compare value"
              className={classes.icon}
              onClick={() => {
                if (aside.route !== "compare" || aside.file)
                  openCompare(sidebar.dir);
                else closeAside();
              }}
            />
          </>
        ) : null}
        <AiOutlineCopy
          className={classes.icon}
          onClick={() => {
            if (aside.route !== "clipboard" || aside.file) openClipboard();
            else closeAside();
          }}
          title="Open clipboard"
        />
        <GiInvertedDice3
          className={classes.icon}
          title="Open random generator"
          onClick={() => {
            if (aside.route !== "generator" || aside.file) openGenerator();
            else closeAside();
          }}
        />
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  browser: state.browser,
  sidebar: state.sidebar,
  aside: state.aside,
  allData: state,
});

const mapDispatchToProps = (dispatch) => ({
  changeTheme: () => dispatch(changeTheme()),
  closeProject: () => {
    dispatch(closeProject());
    dispatch(goHome());
  },
  openBrowser: () => dispatch(openBrowser()),
  changeSidebar: (route) => dispatch(openSidebar(route)),
  openGenerator: () => dispatch(openGenerator("")),
  openClipboard: () => dispatch(openClipboard("")),
  openCompare: (dir) => dispatch(openCompare({ dir })),
  closeAside: () => dispatch(closeAside()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar);
