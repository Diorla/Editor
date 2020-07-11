//@ts-check
import React from "react";
import path from "path";
import { makeStyles } from "@material-ui/core";
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
}));

/**
 * @param {{ active?: boolean; onClick: ()=> void; icon?: React.ReactNode; name: string; ext: string; type: string}} props
 */
export default (props) => {
  const { active, onClick, icon, name, ext, type } = props;
  const color = type === "folder" ? "yellow" : "#2196F3";
  const classes = useStyles();
  const cls = active ? classes.active : classes.inactive;
  return (
    <ItemDiv onClick={onClick} className={cls}>
      <span style={{ color, marginRight: 4 }}>{icon}</span>
      {path.basename(name, ext)}
    </ItemDiv>
  );
};
