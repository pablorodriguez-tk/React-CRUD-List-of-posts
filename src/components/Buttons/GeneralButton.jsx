import React from "react";
import { Link } from "react-router-dom";
import { IconButton, ButtonBase } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

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
