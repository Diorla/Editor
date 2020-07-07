//@ts-check
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { TextField } from "@material-ui/core";
import Editor from "../../components/Editor";
import Empty from "./Empty";
import jsonfile from "jsonfile";
import useStyles from "../../components/useStyles";

const Template = (props) => {
  const classes = useStyles();
  const { browser } = props;
  const [templates, setTemplates] = useState({});
  useEffect(() => {
    jsonfile.readFile("./data/templates.json", (err, data) => {
      if (err) console.log(err);
      else setTemplates(data);
    });
    return () => {};
  }, [browser.name]);
  const saveDescription = () => {
    jsonfile.writeFile("./data/templates.json", templates, (err) => {
      if (err) console.log(err);
    });
  };
  return (
    <main className={classes.content}>
      {browser.name ? (
        <TextField
          value={templates[browser.name] || ""}
          onChange={(e) => {
            setTemplates({
              ...templates,
              [browser.name]: e.target.value,
            });
          }}
          multiline
          onBlur={saveDescription}
          className={classes.fullWidth}
          style={{ marginBottom: 8 }}
          placeholder="This template is about this and that"
          label="Description"
        />
      ) : null}
      {browser.fullDir ? <Editor itemDir={browser.fullDir} /> : <Empty />}
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

export default connect(mapStateToProps, mapDispatchToProps)(Template);
