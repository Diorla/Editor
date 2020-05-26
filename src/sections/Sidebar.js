//@ts-check
import React, { useState } from "react";
import { connect } from "react-redux";
import { remote } from "electron";
// import fs from "fs";
import { FaFolder, FaFile, FaFolderOpen } from "react-icons/fa";
import klaw from "klaw";
import path from "path";

const Dir = (props) => {
  const [open, setOpen] = useState(false);
  const [val] = props.data;
  return (
    <div>
      <div onClick={() => setOpen(!open)}>
        {open ? (
          <span style={{ cursor: "pointer" }}>
            <FaFolderOpen color="#FFA000" /> {path.relative(props.root, val[0])}
          </span>
        ) : (
          <span style={{ cursor: "pointer" }} className="line">
            <FaFolder color="#FFA000" /> {path.relative(props.root, val[0])}
          </span>
        )}
      </div>
      <div style={{ marginLeft: 24 }}>
        {open
          ? val[1].map((item, idx) => (
              <div
                key={idx}
                style={{ cursor: "pointer" }}
                onClick={() => console.log(item)}
                className="line"
              >
                <FaFile color="#90CAF9" /> {path.relative(val[0], item)}
              </div>
            ))
          : null}
      </div>
      <style jsx>{`
        .line {
          word-break: break-all;
        }
      `}</style>
    </div>
  );
};

/**
 * @param {any[]} items
 * @param {{ (value: React.SetStateAction<{}>): void; (arg0: {}): void; }} fn
 */
const configure = (items, fn) => {
  const obj = {};
  for (let item of items) {
    // const basename = path.basename(item);
    const dirname = path.dirname(item);
    if (path.extname(item) === ".scrb") {
      if (obj[dirname]) obj[dirname].push(item);
      else obj[dirname] = [item];
    }
  }
  fn(obj);
};

const SideBar = () => {
  const [tree, setTree] = useState({});
  const [root, setRoot] = useState("");
  const treelist = Object.entries(tree);
  return (
    <div className="sidebar">
      <button
        onClick={() =>
          remote.dialog
            .showOpenDialog({
              properties: ["openDirectory"],
            })
            .then((folder) => {
              const items = [];
              try {
                klaw(folder.filePaths[0])
                  .on("data", (item) => items.push(item.path))
                  .on("end", () => {
                    configure(items, setTree);
                    setRoot(folder.filePaths[0]);
                  });
              } catch (err) {
                console.log(err);
              }
            })
            .catch((err) => console.log(err))
        }
      >
        Open folder
      </button>
      <div>
        {treelist.map((arr, idx) => (
          <Dir data={[arr]} key={idx} root={root} />
        ))}
      </div>
      <style jsx>{`
        .sidebar {
          padding: 4px;
          width: 160px;
          border-right: 1px solid silver;
          min-height: 95vh;
        }
      `}</style>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = (dispatch) => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
