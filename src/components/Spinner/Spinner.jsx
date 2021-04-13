import React from "react";
import { makeStyles, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const CircularIndeterminate = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
};

export default CircularIndeterminate;
