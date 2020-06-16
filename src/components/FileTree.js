import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import { MdExpandMore, MdChevronRight } from "react-icons/md";
import TreeItem from "@material-ui/lab/TreeItem";
import dirTree from "directory-tree";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 400,
    marginBottom: 30,
  },
});

function FileTree({ activeDir }) {
  const classes = useStyles();
  const projectDir = `${process.cwd()}/projects/${activeDir}`;
  console.log("active dir:", activeDir);
  console.log("project dir:", projectDir);
  const projectTree = dirTree(projectDir, {
    extensions: /\.scrb$/,
    exclude: /node_modules/,
  });
  // console.log(projectTree);
  const renderTree = (nodes, id = "0") => (
    <TreeItem key={id} nodeId={nodes.path} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node, idx) => renderTree(node, `${id}-${idx}`))
        : null}
    </TreeItem>
  );

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<MdExpandMore />}
      defaultExpanded={["root"]}
      defaultExpandIcon={<MdChevronRight />}
      onNodeSelect={(e, value) => console.log(value)}
    >
      {renderTree(projectTree)}
    </TreeView>
  );
}

export default FileTree;
