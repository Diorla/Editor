//@ts-check
import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  content: {
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
    marginTop: 8,
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
    justifyContent: "space-around",
  },
  row3: {
    display: "flex",
    flex: "3 !important",
  },
  row7: {
    display: "flex",
    flex: "7 !important",
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
}));
