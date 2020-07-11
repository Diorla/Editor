//@ts-check
import React from "react";
import path from "path";
import { makeStyles } from "@material-ui/core";
import { AiOutlineCopy } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import ItemDiv from "../../../components/ItemDiv";
const useStyles = makeStyles((theme) => ({
  item: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    transition: "background linear 0.25s",
    justifyContent: "space-between",
    padding: 4,
    "&:hover": {
      background: "rgba(0, 0, 0, 0.2)",
    },
  },
  main: {
    display: "flex",
    padding: 4,
    flex: 1,
  },
  delete: {
    color: "crimson",
  },
}));

/**
 * @param {{ onClick: ()=> void; name: string; ext: string; type: string; onDelete: ()=> void}} props
 */
export default (props) => {
  const { onClick, name, ext, type, onDelete } = props;
  const color = type === "folder" ? "yellow" : "#2196F3";
  const classes = useStyles();
  return (
    <ItemDiv className={classes.item}>
      <div onClick={onClick} className={classes.main}>
        <span style={{ color, marginRight: 4 }}>
          <AiOutlineCopy />
        </span>
        {path.basename(name, ext)}
      </div>
      <MdCancel onClick={onDelete} className={classes.delete} />
    </ItemDiv>
  );
};
