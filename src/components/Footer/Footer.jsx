import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  footer: {
    marginTop: "auto",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="primary" className={classes.footer}>
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            © 2021 Blog
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
