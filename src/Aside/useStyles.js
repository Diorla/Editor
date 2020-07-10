//@ts-check
import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  aside: {
    width: 500,
    right: 0,
    height: "100%",
    flexDirection: "column",
    overflowY: "scroll",
    backgroundColor: theme.palette.background.paper,
  },
  hide: {
    display: "none",
  },
}));
