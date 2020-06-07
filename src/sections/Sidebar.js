//@ts-check
import React, { useState } from "react";
import { connect } from "react-redux";
import { remote } from "electron";
import { FaFolder, FaFile, FaFolderOpen } from "react-icons/fa";
import dirTree from "directory-tree";

/**
 * @param {{ onClick?: any; data?: any; nestedTree?: any; }} props
 */
const Container = (props) => {
  const { data, nestedTree } = props;
  const [visible, setVisible] = useState(false);
  return (
    <div
      className="container"
      style={{ marginLeft: "4px"}}
      onClick={(e) => {
        e.stopPropagation();
        setVisible(!visible);
        props.onClick({
          path: data.path,
          type: data.type,
        });
      }}
    >
      <div>
        {data.type === "file" && <FaFile />}
        {data.type === "directory" && visible && <FaFolderOpen />}
        {data.type === "directory" && !visible && <FaFolder />}
        {data.name}
      </div>
      <div>{visible ? nestedTree : null}</div>
      <style jsx>{`
        .container {
          font-size: 12px;
          text-overflow: ellipsis;
          background: rgba(50, 100, 150, 0.1)
        }
      `}</style>
    </div>
  );
};

const TreeList = ({ data }) => {
  const nestedTree = (data.children || []).map((data, idx) => {
    return <TreeList key={idx} data={data} />;
  });

  return (
    <Container
      data={data}
      nestedTree={nestedTree}
      onClick={(info) => console.log(info)}
    />
  );
};

const SideBar = () => {
  const [tree, setTree] = useState({});
  return (
    <div className="sidebar">
      <div className="sidebar-sub">
        <button
          onClick={() =>
            remote.dialog
              .showOpenDialog({
                properties: ["openDirectory"],
              })
              .then((folder) => {
                console.log("folder: ", folder.filePaths[0]);
                const filePath = folder.filePaths[0];
                const tree = dirTree(filePath, {
                  extensions: /\.scrb/,
                  exclude: /node_modules|\.git/,
                });
                setTree(tree);
              })
              .catch((err) => console.log(err))
          }
        >
          Open folder
        </button>
        <div>
          <TreeList data={tree} />
        </div>
      </div>
      <style jsx>{`
        .sidebar {
          padding: 4px;
          width: 170px;
          position: fixed;
          top: 30px;
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
