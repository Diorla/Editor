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
}));
