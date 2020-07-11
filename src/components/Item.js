//@ts-check
import React from "react";
import { makeStyles } from "@material-ui/core";
import { MdCancel } from "react-icons/md";
import ItemDiv from "./ItemDiv";
const useStyles = makeStyles((theme) => ({
  inactive: {
    padding: "2px 8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    transition: "background linear 0.25s",
    "&:hover": {
      background: "rgba(0, 0, 0, 0.2)",
    },
  },
  active: {
    padding: "2px 8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.1)",
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
 * @param {{ onClick: ()=>void; name: string;  onDelete?: ()=>void; icon: React.ReactNode; active?: boolean}} props
 */
export default (props) => {
  const { onClick, name, onDelete, icon, active } = props;
  const classes = useStyles();
  const cls = active ? classes.active : classes.inactive;
  return (
    <ItemDiv className={cls}>
      <div onClick={onClick} className={classes.main}>
        <span style={{ color: "#2196F3", marginRight: 4 }}>{icon}</span>
        {name}
      </div>
      {onDelete && <MdCancel onClick={onDelete} className={classes.delete} />}
    </ItemDiv>
  );
};
