//@ts-check
import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { AiOutlineSave, AiOutlineDelete } from "react-icons/ai";
import { GiInvertedDice3, GiMoon } from "react-icons/gi";
import { MdRefresh } from "react-icons/md";
import { CHANGE_THEME } from "../redux/constant";

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
}));

const TitleBar = (props) => {
  const classes = useStyles();
  const { changeTheme } = props;
  return (
    <div className={classes.appBar}>
      <div>Left</div>
      <div>This is titlebar</div>
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
  // content: state.content,
});

const mapDispatchToProps = (dispatch) => ({
  changeTheme: () =>
    dispatch({
      type: CHANGE_THEME,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar);
