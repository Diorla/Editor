//@ts-check
import React from "react";
import { connect } from "react-redux";
import { makeStyles, Link } from "@material-ui/core";
import { AiOutlineDelete, AiOutlineProfile } from "react-icons/ai";
import { GiMoon } from "react-icons/gi";
import { IoMdHelp } from "react-icons/io";
import { FaRegStickyNote } from "react-icons/fa";
import {
  CHANGE_THEME,
  ON_BROWSER_CLOSE,
  ON_SIDEBAR_CHANGE,
  ON_BROWSER_CHANGE,
} from "./../redux/constant";
import fs from "fs";
import Confirm from "./Confirm";

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
    changeBrowser,
    changeSidebar,
  } = props;
  console.log("browser:", browser);
  console.log("sidebar:", sidebar);
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
        <IoMdHelp
          title="Get help"
          onClick={() => {
            changeBrowser({
              mode: "empty",
            });
            changeSidebar("blog");
          }}
        />
        <AiOutlineProfile
          title="Manage templates"
          onClick={() => {
            changeBrowser({
              mode: "template",
            });
            changeSidebar("template");
          }}
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
  sidebar: state.sidebar,
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
  changeSidebar: (mode) =>
    dispatch({
      type: ON_SIDEBAR_CHANGE,
      payload: {
        mode,
      },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar);
