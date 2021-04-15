import React from "react";
import { Link } from "react-router-dom";
import {
  List,
  SwipeableDrawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  ButtonBase,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import { useAppContext } from "../../AppContext";

const useStyles = makeStyles(() => ({
  menuButton: {
    padding: 12,
    borderRadius: "50%",
  },
}));

const DrawerLeft = () => {
  const { isSignedIn } = useAppContext();
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key="Home" component={Link} to={"/"}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        {isSignedIn ? (
          <ListItem button component={Link} to={"/create/post"}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Create post" />
          </ListItem>
        ) : (
          <></>
        )}
      </List>
    </div>
  );
  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <ButtonBase
            onClick={toggleDrawer(anchor, true)}
            className={classes.menuButton}
          >
            <MenuIcon> {anchor}</MenuIcon>
          </ButtonBase>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default DrawerLeft;
