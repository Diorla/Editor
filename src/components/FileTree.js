//@ts-check
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import dirTree from "directory-tree";
import chokidar from "chokidar";
import { FaFolder, FaFile, FaFolderOpen } from "react-icons/fa";
import { connect } from "react-redux";
import { OPEN_COLLECTION, OPEN_PROJECT, OPEN_ITEM } from "../redux/constant";
import path from "path";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 400,
    marginBottom: 30,
    userSelect: "none",
  },
});

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
 * @param {{ project?: any; activeFile: string; openFolder?: (arg0: string)=> void; openFile?: (arg0: string)=> void; openProject?: (arg0: string)=> void; }} props
 */
const FileTree = (props) => {
  const { activeFile, openFolder, openFile, openProject } = props;
  const { itemDir } = props.project;
  const classes = useStyles();
  const projectDir = `${process.cwd()}/projects/${activeFile}`;
  // To trigger re-render
  const [projectTree, setProjectTree] = useState(
    dirTree(projectDir, {
      extensions: /\.scrb$/,
      exclude: /node_modules/,
    })
  );

  const updateProjectTree = () => {
    const currentTree = dirTree(projectDir, {
      extensions: /\.scrb$/,
      exclude: /node_modules/,
    });
    if (JSON.stringify(currentTree) !== JSON.stringify(projectTree))
      setProjectTree(currentTree);
  };

  useEffect(() => {
    // Now watch out for changes
    const treeMonitor = chokidar.watch(projectDir, {
      ignored: /(^|[\/\\])\../, // ignore .config, .template & .generator
    });

    treeMonitor //new folder
      .on("addDir", (path, stats) => {
        updateProjectTree();
      }) // new file
      .on("add", (path, stats) => {
        updateProjectTree();
      }) // delete file
      .on("unlink", (path, stats) => {
        updateProjectTree();
      }) // delete folder
      .on("unlinkDir", (path, stats) => {
        updateProjectTree();
      });
    return () => {
      // close chokidar
      treeMonitor.close();
    };
  }, []);

  const renderTree = (nodes, id = "0") => (
    <TreeItem
      key={id}
      nodeId={id}
      label={nodes.name}
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
        if (nodes.type === "directory") {
          // require double click to move away from file to folder
          if (itemDir) console.log("can't move away");
          else if (nodes.name === activeFile)
            console.log("no need to navigate");
          else {
            console.log("folder opened");
            openFolder(`${nodes.path}`);
          }
        } else {
          console.log("file opened");
          openFile(`${nodes.path}`);
        }
      }}
      onDoubleClick={(e) => {
        e.stopPropagation();
        // require double click to move away from file to folder
        if (nodes.type === "file") {
          console.log("don't need double click to open file");
        } else {
          if (nodes.name === activeFile) openProject(activeFile);
          else openFolder(nodes.path);
        }
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
    <TreeView className={classes.root} defaultExpanded={["0"]}>
      {renderTree(projectTree)}
    </TreeView>
  );
};

/**
 * @param {{ project: {projectName: string, collectionDir: string, itemDir: string}; }} state
 */
const mapStateToProps = (state) => ({
  project: state.project,
});

/**
 * @param {(arg0: { type: string; collectionDir?: string; itemDir?: string; projectName?: string; }) => any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  /**
   * @param {string} collectionDir
   */
  openFolder: (collectionDir) =>
    dispatch({
      type: OPEN_COLLECTION,
      collectionDir,
    }),

  /**
   * @param {string} itemDir
   */
  openFile: (itemDir) =>
    dispatch({
      type: OPEN_ITEM,
      itemDir,
    }),

  /**
   * @param {string} projectName
   */
  openProject: (projectName) =>
    dispatch({
      type: OPEN_PROJECT,
      projectName,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(FileTree);
