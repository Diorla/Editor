//@ts-check
import { makeStyles } from "@material-ui/core";

//TODO: Use one useStyles.js file(this one) to style the app
/**
 * So I will delete all other useStyles
 * Also, I intend to reduce my reliance on material-ui and replace
 * most of the components with styled-jsx or styled-components
 * I will only keep essential modules like fileTree component
 * Perhaps, I could update the <input/> too
 */
export default makeStyles((theme) => ({
  header: {
    textAlign: "center",
    color: theme.palette.primary.main,
    fontWeight: "bold",
    marginTop: 8,
  },
  fullWidth: {
    width: "100%",
  },
  successButton: {
    color: theme.palette.success.main,
  },
  dangerButton: {
    color: theme.palette.error.main,
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  group: {
    display: "flex",
    flexDirection: "column",
    background: "rgba(0, 0, 0, 0.2)",
    margin: 8,
    marginRight: 0,
    marginLeft: 0,
  },
  toolbar: {
    display: "flex",
    background: "black",
    zIndex: 100,
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    padding: 6,
  },
  toolbarIcon: {
    border: "none",
    color: "white",
    cursor: "pointer",
    padding: 4,
    "&:hover": {
      color: "#2196F3",
    },
  },
  activeToolbarIcon: {
    border: "none",
    color: "#2196F3",
    cursor: "pointer",
    padding: 4,
  },
  editor: {
    borderBottom: "1px solid silver",
    marginTop: 30,
    padding: 4,
    fontFamily: "arial",
    "& h1": {
      textAlign: "center",
      justifyContent: "space-around",
      display: "flex",
    },
    "& blockquote": {
      margin: 0,
      marginBottom: 8,
      borderLeft: "4px solid darkslategray",
      padding: 8,
      background: "rgba(0, 0, 0, 0.1)",
    },
    "& h2, h3": {
      marginBottom: 2,
    },
  },
  white: {
    backgroundColor: "white",
  },
  hidePlaceholder: {
    "& .public-DraftEditorPlaceholder-root": {
      display: "none",
    },
  },
  nav: {
    display: "flex",
    position: "sticky",
    flexDirection: "row",
    top: 36,
    zIndex: 10,
  },
}));
