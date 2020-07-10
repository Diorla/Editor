//@ts-check
import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  top: {
    width: "100vw",
    height: 32,
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  middle: {
    flex: 1,
    top: 32,
    width: "100vw",
    height: "calc(100vh - 56px)",
  },
  bottom: {
    height: 24,
    bottom: 0,
    width: "100vw",
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    justifyContent: "space-between",
    alignItems: "center",
  },
  sidebar: {
    width: 240,
    height: "100%",
    flexDirection: "column",
    overflowY: "scroll",
    backgroundColor: theme.palette.background.paper,
  },
  browser: {
    flex: 1,
    width: "calc(100vw - 740px)",
    left: 240,
    height: "100%",
    flexDirection: "column",
    overflowY: "scroll",
  },
  browserFull: {
    flex: 1,
    width: "calc(100vw - 240px)",
    left: 240,
    height: "100%",
    flexDirection: "column",
    overflowY: "scroll",
  },
}));
