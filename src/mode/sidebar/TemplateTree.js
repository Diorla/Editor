//@ts-check
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import fs from "fs";
import title from "../../utils/title";
import path from "path";
import { makeStyles, TextField, Divider, Typography } from "@material-ui/core";
import { AiOutlineProfile } from "react-icons/ai";
import jsonfile from "jsonfile";
import { openFile } from "../../redux/browser";

const useStyles = makeStyles((theme) => ({
  column: {
    display: "flex",
    flexDirection: "column",
    margin: 4,
  },
  roll: {
    padding: "2px 8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    textTransform: "uppercase",
    "&:hover": {
      background: "rgba(0, 0, 0, 0.1)",
    },
  },
  rollActive: {
    padding: "2px 8px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    textTransform: "uppercase",
    background: "rgba(0, 0, 0, 0.1)",
  },
}));

const TemplateTree = (props) => {
  const [dirList, setDirList] = useState([]);
  const classes = useStyles();
  const [activeItem, setActiveItem] = useState("");
  const [error, setError] = useState("");
  const { browser, changeBrowser } = props;
  useEffect(() => {
    fs.readdir("./templates", (err, data) => {
      if (err) console.log(err);
      //console.log("loaded:", data);
      else setDirList(data);
    });
    return () => {
      console.log("blog tree unmounted");
    };
  }, []);
  console.log("dirlist:", dirList);
  const [template, setTemplate] = useState("");
  const [recentList, setRecentList] = useState([]);
  const checkError = () => {
    if (!template) setError("");
    else if (dirList.map(title).includes(title(template)))
      setError("Template already exist");
    else if (recentList.map(title).includes(title(template)))
      setError("Template already exist");
    else setError("");
  };
  const addNewTemplate = () => {
    jsonfile.writeFile(
      `./templates/${title(template)}.json`,
      { template: title(template), content: "" },
      (err) => console.log(err)
    );
    setRecentList([title(template), ...recentList]);
    setTemplate("");
  };
  return (
    <div className={classes.column}>
      <TextField
        label="New template"
        placeholder="Click enter to add template"
        value={template}
        onChange={(e) => {
          setTemplate(title(e.target.value));
          checkError();
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            if (error) setError(title(`Can't add template, ${error}`));
            else if (!template) setError("Field is empty");
            else addNewTemplate();
          }
        }}
      />
      {error && (
        <Typography variant="subtitle1" color="error">
          {error}
        </Typography>
      )}
      {recentList.map(title).map((item, idx) => {
        const cls = activeItem === item ? classes.rollActive : classes.roll;
        return (
          <div
            key={idx}
            onClick={() => {
              changeBrowser({
                mode: "templates",
                fullDir: `${process.cwd()}/templates/${item}.json`,
                name: item,
              });
              setActiveItem(item);
            }}
            className={cls}
          >
            <AiOutlineProfile style={{ color: "#2196F3", marginRight: 4 }} />
            {item}
          </div>
        );
      })}
      <Divider />
      {dirList.map(title).map((item, idx) => {
        const cls = activeItem === item ? classes.rollActive : classes.roll;
        if (item === "Plot.json") return null;
        return (
          <div
            key={idx}
            onClick={() => {
              changeBrowser({
                mode: "templates",
                fullDir: `${process.cwd()}/templates/${item}`,
                name: path.basename(item, ".json"),
              });
              setActiveItem(item);
            }}
            className={cls}
          >
            <AiOutlineProfile style={{ color: "#2196F3", marginRight: 4 }} />
            {path.basename(item, ".json")}
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  mode: state.browser.mode,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  changeBrowser: ({ name, mode, fullDir }) =>
    dispatch(openFile({ name, mode, fullDir })),
});

export default connect(mapStateToProps, mapDispatchToProps)(TemplateTree);
