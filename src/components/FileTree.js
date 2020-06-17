//@ts-check
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import dirTree from "directory-tree";
import chokidar from "chokidar";
import { FaFolder, FaFile, FaFolderOpen } from "react-icons/fa";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 400,
    marginBottom: 30,
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
function FileTree({ activeDir }) {
  const classes = useStyles();
  const projectDir = `${process.cwd()}/projects/${activeDir}`;
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
      // persistent: true,
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
      nodeId={nodes.path}
      label={nodes.name}
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
    >
      {Array.isArray(nodes.children)
        ? nodes.children
            .sort(compareDir)
            .map((node, idx) => renderTree(node, `${id}-${idx}`))
        : null}
    </TreeItem>
  );

  return (
    <TreeView
      className={classes.root}
      onNodeSelect={(e, value) => console.log(value)}
    >
      {renderTree(projectTree)}
    </TreeView>
  );
}

const mapStateToProps = (state) => ({
  // screen: state.screen,
});

const mapDispatchToProps = (dispatch) => ({
  // props
});

export default connect(mapStateToProps, mapDispatchToProps)(FileTree);
