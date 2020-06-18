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
  select: {
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    fontSize: 16,
    borderRight: 0,
    padding: 4,
    borderColor: theme.palette.primary.dark,
    outline: "none",
  },
}));
