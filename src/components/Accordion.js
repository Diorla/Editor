//@ts-check
import React, { useState } from "react";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  panel: {
    display: "flex",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    boxShadow: "0 0 4px #3c3c3c",
    margin: "8px 0",
    padding: 4,
  },
  header: {
    display: "flex",
    alignItems: "center",
    padding: 4,
    justifyContent: "space-between",
    flex: 1,
  },
  body: {
    display: "flex",
    flexDirection: "column",
  },
}));

/**
 * @param {{ header: React.ReactNode; children: React.ReactNode; onBlur?: ()=> void}} props
 */
export default (props) => {
  const [expand, setExpand] = useState(false);
  const { header, children, onBlur } = props;
  const classes = useStyles();
  return (
    <div className={classes.panel} onBlur={onBlur}>
      <div
        onClick={(e) => {
          setExpand(!expand);
          e.preventDefault();
          e.stopPropagation();
        }}
        className={classes.header}
      >
        {header}
        {expand ? <MdArrowDropUp /> : <MdArrowDropDown />}
      </div>
      {expand && <div className={classes.body}>{children}</div>}
    </div>
  );
};
