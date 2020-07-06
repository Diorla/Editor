//@ts-check
import React from "react";
import { connect } from "react-redux";
import { makeStyles, Link } from "@material-ui/core";
import { AiOutlineDelete, AiOutlineProfile } from "react-icons/ai";
import { GiMoon } from "react-icons/gi";
import { IoMdHelp } from "react-icons/io";
import { FaRegStickyNote } from "react-icons/fa";
import fs from "fs";
import Confirm from "./Confirm";
import { changeTheme } from "../redux/theme";
import { closeProject, openBrowser } from "../redux/browser";
import { goHome, openSidebar } from "../redux/sidebar";

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
  const {
    changeTheme,
    closeProject,
    browser,
    sidebar,
    openBrowser,
    changeSidebar,
  } = props;
  console.log("browser:", browser);
  console.log("sidebar:", sidebar);
  const deleter = () => {
    if (browser.mode === "document") {
      fs.unlink(browser.fullDir, (err) => {
        if (err) console.log(err);
        else {
          openBrowser();
        }
      });
    } else if (browser.mode === "collection") {
      fs.rmdir(browser.fullDir, { recursive: true }, (err) => {
        if (err) console.log(err);
        else {
          openBrowser();
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
        <IoMdHelp
          title="Get help"
          onClick={() => {
            if (browser.mode !== "blogs") openBrowser();
            changeSidebar("blogs");
          }}
        />
        <AiOutlineProfile
          title="Manage templates"
          onClick={() => {
            if (browser.mode !== "templates") openBrowser();
            changeSidebar("templates");
          }}
        />
        {["projects", "collection", "document"].includes(browser.mode) ? (
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
  sidebar: state.sidebar,
});

const mapDispatchToProps = (dispatch) => ({
  changeTheme: () => dispatch(changeTheme()),
  closeProject: () => {
    dispatch(closeProject());
    dispatch(goHome());
  },
  openBrowser: () => dispatch(openBrowser()),
  changeSidebar: (mode) => dispatch(openSidebar(mode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar);
