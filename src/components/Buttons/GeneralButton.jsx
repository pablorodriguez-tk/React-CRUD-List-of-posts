import React from "react";
import { IconButton, ButtonBase } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";

const WrappedIcon = (props) => <Icon {...props} />;
WrappedIcon.muiName = Icon.muiName;

const GeneralButton = (props) => {
  return (
    <ButtonBase component={Link} to={props.to} onClick={props.onClick}>
      <IconButton color={props.color}>
        <WrappedIcon fontSize={props.size}>{props.type}</WrappedIcon>
      </IconButton>
    </ButtonBase>
  );
};

export default GeneralButton;
