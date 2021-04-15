import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  ButtonBase,
  Tooltip,
} from "@material-ui/core";
import { ElevationScroll } from "../Header";
import DrawerLeft from "./Drawer";
import GoogleAuth from "../GoogleAuth";
import { useAppContext } from "../../AppContext";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    userSelect: "none",
    marginLeft: 15,
  },
}));

const Header = () => {
  const { darkMode, setDarkMode } = useAppContext();
  const classes = useStyles();
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="relative">
          <Toolbar>
            <DrawerLeft />
            <Typography variant="h6" className={classes.title}>
              Blog
            </Typography>
            <Tooltip title="Toggle light/dark theme" aria-label="Dark Mode">
              <ButtonBase
                checked={darkMode}
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
              >
                <IconButton>
                  {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </ButtonBase>
            </Tooltip>
            <GoogleAuth />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
};

export default Header;
