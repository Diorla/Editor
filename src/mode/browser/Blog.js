//@ts-check
import React, { useState } from "react";
import ReactMd from "react-markdown";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core";
import fs from "fs";
import Empty from "./Empty";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
}));

const Blog = (props) => {
  const classes = useStyles();
  const [md, setMd] = useState("");
  const { browser } = props;
  fs.readFile(browser.fullDir, "utf8", (err, data) => {
    if (err) throw err;
    setMd(data);
  });
  return (
    <main className={classes.content}>
      {md ? <ReactMd source={md} escapeHtml={false} /> : <Empty />}
    </main>
  );
};

const mapStateToProps = (state) => ({
  browser: state.browser,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  // dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
