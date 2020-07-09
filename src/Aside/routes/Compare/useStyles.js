//@ts-check
import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  content: {
    marginBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
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
  group: {
    display: "flex",
    flexDirection: "column",
    background: "rgba(0, 0, 0, 0.2)",
    margin: 8,
    marginRight: 0,
    marginLeft: 0,
  },
  pageHeader: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    color: theme.palette.primary.main,
    fontSize: 21,
    fontWeight: "bolder",
    borderBottom: "1px solid",
  },
  quill: {
    background: theme.palette.background.default,
    color: theme.palette.secondary.contrastText,
    marginTop: 8,
  },
  centre: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    width: 300,
  },
}));
