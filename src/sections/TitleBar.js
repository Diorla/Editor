//@ts-check
import React from "react";
import { connect } from "react-redux";
import { makeStyles, Link, Button } from "@material-ui/core";
import { AiOutlineSave, AiOutlineDelete } from "react-icons/ai";
import { GiInvertedDice3, GiMoon } from "react-icons/gi";
import { MdRefresh } from "react-icons/md";
import { CHANGE_THEME } from "../redux/constant";
import { CLOSE_PROJECT } from "./../redux/constant";

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
    width: 100,
    justifyContent: "space-around",
    display: "flex",
    alignItems: "center",
    fontSize: "large",
  },
  link: {
    color: theme.palette.primary.contrastText,
  },
}));

const TitleBar = (props) => {
  const classes = useStyles();
  const { changeTheme, closeProject } = props;
  const { activeProject, activeFolder, activeFile, activeBlog } = props.project;
  const title = activeBlog || activeFile || activeFolder || activeProject;
  return (
    <div className={classes.appBar}>
      <Link
        component="button"
        className={classes.link}
        onClick={() => closeProject()}
      >
        Home
      </Link>
      <div>{`${title} - Tome Editor`}</div>
      <div className={classes.iconBar}>
        <GiInvertedDice3
          title="Generate values"
          onClick={() => console.log("icon")}
        />
        <GiMoon title="Dark mode" onClick={() => changeTheme()} />
        <MdRefresh title="Reset" onClick={() => console.log("icon")} />
        <AiOutlineSave title="Save" onClick={() => console.log("icon")} />
        <AiOutlineDelete title="Delete" onClick={() => console.log("icon")} />
      </div>
    </div>
  );
};

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
});

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar);
