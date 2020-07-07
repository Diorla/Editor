//@ts-check
import React from "react";
import { connect } from "react-redux";
import { FaFolder, FaFile } from "react-icons/fa";
import { makeStyles } from "@material-ui/core";
import { AiOutlineFileExclamation, AiOutlineProfile } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  empty: {
    minHeight: 500,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyContent: {
    margin: 16,
  },
}));
// This is meant to be rendered when no document or collection is selected.
// This occurs when a user deletes a file or folder
const Empty = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.empty}>
      <div className={classes.emptyContent}>
        Click collection <FaFolder color="#FF9800" /> to update collection
        configuration or create new directory.
      </div>
      <div className={classes.emptyContent}>
        Click document <FaFile color="#2196F3" /> to edit your document.
      </div>
      <div className={classes.emptyContent}>
        Click help <AiOutlineFileExclamation color="#2196F3" /> to learn more about the app.
      </div>
      <div className={classes.emptyContent}>
        Click templates <AiOutlineProfile color="#2196F3" /> to manage your templates.
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  route: state.browser.route,
});

/**
 * @param {any} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  // dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Empty);
