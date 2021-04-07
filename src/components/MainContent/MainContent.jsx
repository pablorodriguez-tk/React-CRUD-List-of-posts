import React from "react";
import Footer from "../Footer";
import { Header } from "../Header";
import { CssBaseline, Grid } from "@material-ui/core";
import PostList from "../../pages/PostList";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const MainContent = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        spacing={2}
      >
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <PostList />
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer />
      </Grid>
    </React.Fragment>
  );
};

export default MainContent;
