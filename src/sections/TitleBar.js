//@ts-check
import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
// import { GrRefresh } from "react-icons/gr";
import { AiOutlineSave, AiOutlineDelete } from "react-icons/ai";
import { GiInvertedDice3 } from "react-icons/gi";
import { MdRefresh } from "react-icons/md";

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
    // color: theme.palette.secondary.contrastText,
  },
}));

const TitleBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.appBar}>
      <div>Left</div>
      <div>This is titlebar</div>
      <div className={classes.iconBar}>
        <GiInvertedDice3
          title="Generate values"
          onClick={() => console.log("icon")}
        />
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
  // props
});

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar);
