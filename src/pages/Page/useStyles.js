//@ts-check
import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  header: {
    textAlign: "center",
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
  expansionPanel: {
    margin: 0,
    display: "flex",
    flexDirection: "column",
  },
  row: {
    display: "flex",
    flex: 1,
    alignItems: "center",
  },
}));
