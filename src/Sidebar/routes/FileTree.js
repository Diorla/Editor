//@ts-check
import React, { useState, useEffect } from "react";
import { TreeView, TreeItem } from "@material-ui/lab";
import dirTree from "directory-tree";
import chokidar from "chokidar";
import { FaFolder, FaFile, FaFolderOpen } from "react-icons/fa";
import { connect } from "react-redux";
import path from "path";
import useStyles from "../../components/useStyles";
import { openFile } from "../../redux/browser";

/**
 * This is for placing directories on top, and files below
 * @param {object} objA - First object
 * @param {object} objB - Second object
 */
const compareDir = (objA, objB) => {
  if (objA.type < objB.type) return -1;
  else return 1;
};

/**
 * @param {{ sidebar?: {dir: string}; browser?: {route: string}; changeBrowser?: (arg0: {name: string, fullDir: string, route: string})=> void; }} props
 */
const FileTree = (props) => {
  const { changeBrowser } = props;
  const { dir } = props.sidebar;
  const { route } = props.browser;
  const classes = useStyles();
  const [projectTree, setProjectTree] = useState(
    dirTree(dir, {
      extensions: /\.scrb$/,
      exclude: /node_modules/,
    })
  );

  const updateProjectTree = () => {
    const currentTree = dirTree(dir, {
      extensions: /\.scrb$/,
      exclude: /node_modules/,
    });
    if (JSON.stringify(currentTree) !== JSON.stringify(projectTree))
      setProjectTree(currentTree);
  };

  useEffect(() => {
    // Now watch out for changes
    const treeMonitor = chokidar.watch(dir, {
      ignored: /(^|[\/\\])\../, // ignore .config, .template & .generator
    });

    treeMonitor //new folder
      .on("addDir", () => {
        updateProjectTree();
      }) // new file
      .on("add", () => {
        updateProjectTree();
      }) // delete file
      .on("unlink", () => {
        updateProjectTree();
      }) // delete folder
      .on("unlinkDir", () => {
        updateProjectTree();
      });
    return () => {
      // close chokidar
      treeMonitor.close();
    };
  }, []);

  /**
   * @param {dirTree.DirectoryTree} nodes
   */
  const renderTree = (nodes, id = "0") => (
    <TreeItem
      key={id}
      nodeId={id}
      label={path.basename(nodes.name, ".scrb")}
      title={nodes.type === "directory" ? "Double click to open settings" : ""}
      collapseIcon={
        nodes.type === "directory" ? (
          <FaFolderOpen color="#FF9800" />
        ) : (
          <FaFile color="#2196F3" />
        )
      }
      expandIcon={
        nodes.type === "directory" ? (
          <FaFolder color="#FF9800" />
        ) : (
          <FaFile color="#2196F3" />
        )
      }
      endIcon={
        nodes.type === "directory" ? (
          <FaFolder color="#FF9800" />
        ) : (
          <FaFile color="#2196F3" />
        )
      }
      onClick={(e) => {
        e.stopPropagation();
        // console.log(nodes);
        // if this is a file, navigage
        if (nodes.type === "file")
          changeBrowser({
            name: path.basename(nodes.path, ".scrb"),
            fullDir: nodes.path,
            route: "document",
          });
        // if the active dir is not a file
        else if (route !== "document") {
          // if the root path == this folder
          if (nodes.path === dir)
            changeBrowser({
              name: path.basename(nodes.path),
              fullDir: nodes.path,
              route: "projects",
            });
          //any other folder
          else
            changeBrowser({
              name: path.basename(nodes.path),
              fullDir: nodes.path,
              route: "collection",
            });
        } else console.log("Double click to navigate");
      }}
      onDoubleClick={(e) => {
        e.stopPropagation();
        // should only work on folders
        if (nodes.type === "directory") {
          // if the root path == this folder
          if (nodes.path === dir)
            changeBrowser({
              name: path.basename(nodes.path),
              fullDir: nodes.path,
              route: "projects",
            });
          //any other folder
          else
            changeBrowser({
              name: path.basename(nodes.path),
              fullDir: nodes.path,
              route: "collection",
            });
        } else console.log("Doesn't work on file");
      }}
    >
      {Array.isArray(nodes.children)
        ? nodes.children
            .sort(compareDir)
            .map((node, idx) => renderTree(node, `${id}-${idx}`))
        : null}
    </TreeItem>
  );

  return (
    <TreeView className={classes.tree} defaultExpanded={["0"]}>
      {renderTree(projectTree)}
    </TreeView>
  );
};

const mapStateToProps = (state) => ({
  sidebar: state.sidebar,
  browser: state.browser,
});

const mapDispatchToProps = (dispatch) => ({
  changeBrowser: ({ name, route, fullDir }) =>
    dispatch(openFile({ name, route, fullDir })),
});

export default connect(mapStateToProps, mapDispatchToProps)(FileTree);
