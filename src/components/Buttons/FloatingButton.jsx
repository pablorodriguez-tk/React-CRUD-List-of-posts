import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";

const WrappedIcon = (props) => <Icon {...props} />;

WrappedIcon.muiName = Icon.muiName;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const FloatingButton = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab size={props.size} color={props.color} aria-label="edit">
        <WrappedIcon>{props.type}</WrappedIcon>
      </Fab>
    </div>
  );
};

export default FloatingButton;
