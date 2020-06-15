//@ts-check
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flex: 1,
    margin: 8,
    flexDirection: "column",
    width: "95%"
  },
}));

/**
 * @param {{ title: string, content: string }} props
 */
export default (props) => {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.card}>
      <CardContent>
        <Typography color="textSecondary" variant="h6">{props.title}</Typography>
        <Typography>{props.content}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Continue</Button>
      </CardActions>
    </Card>
  );
};
