//@ts-check
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import fs from "fs";
import { title } from "string-007";
import { makeStyles, TextField, Typography } from "@material-ui/core";
import { AiOutlineProfile } from "react-icons/ai";
import jsonfile from "jsonfile";
import { openFile, openBrowser } from "../../redux/browser";
import Item from "../../components/Item";
import ErrorLog from "../../components/ErrorLog";
import path from "path";
import basename from "../../utils/basename";
const defaults = [
  "Blank",
  "Character",
  "Creature",
  "Location",
  "Magic",
  "Objects",
  "Organisation",
  "Plot",
  "Story",
  "World",
];
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
    transition: "background linear 0.25s",
    "&:hover": {
      background: "rgba(0, 0, 0, 0.2)",
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
  const { changeBrowser, openBrowser } = props;
  const deleter = (file) => {
    fs.unlink(file, (err) => {
      if (err) ErrorLog(err);
      else {
        openBrowser();
        fs.readdir("./templates", (err, data) => {
          if (err) ErrorLog(err);
          else setDirList(data);
        });
      }
    });
  };
  useEffect(() => {
    fs.readdir("./templates", (err, data) => {
      if (err) ErrorLog(err);
      else {
        if (JSON.stringify(dirList) !== JSON.stringify(data)) setDirList(data);
      }
    });
    return () => {
      console.log("blog tree unmounted");
    };
  }, [dirList]);

  const [template, setTemplate] = useState("");
  const checkError = () => {
    if (!template) setError("");
    else if (dirList.map(title).includes(title(template)))
      setError("Template already exist");
    else setError("");
  };
  const addNewTemplate = () => {
    jsonfile.writeFile(
      `./templates/${title(template)}`,
      { template: title(template), content: "" },
      (err) => {
        if (err) ErrorLog(err);
        else
          fs.readdir("./templates", (err, data) => {
            if (err) ErrorLog(err);
            else setDirList(data);
          });
      }
    );
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
      {dirList
        .filter((i) => !defaults.includes(i))
        .map(title)
        .map((item) => {
          return (
            <Item
              key={item}
              name={item}
              onClick={() => {
                changeBrowser({
                  route: "templates",
                  fullDir: `${process.cwd()}/templates/${item}`,
                  name: item,
                });
                setActiveItem(item);
              }}
              onDelete={() =>
                deleter(`${process.cwd()}/templates/${item}`)
              }
              icon={<AiOutlineProfile />}
              active={activeItem === item}
            />
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  browser: state.browser,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  changeBrowser: ({ name, route, fullDir }) =>
    dispatch(openFile({ name, route, fullDir })),
  openBrowser: () => dispatch(openBrowser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TemplateTree);
