import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
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
