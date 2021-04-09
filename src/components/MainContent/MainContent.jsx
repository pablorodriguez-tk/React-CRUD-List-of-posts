import React from "react";
import Footer from "../Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PostEditAndCreate from "../../pages/PostEditAndCreate";
import Post from "../../pages/Post/Post";
import PostList from "../../pages/PostList";
import { Header } from "../Header";
import { CssBaseline, Grid } from "@material-ui/core";

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
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={PostList}></Route>
            <Route path="/create" component={PostEditAndCreate}></Route>
            <Route path="/post/:postId" component={Post}></Route>
            <Route path="/edit/:postId" component={PostEditAndCreate}></Route>
          </Switch>
        </BrowserRouter>
        {/* <Footer /> */}
      </Grid>
    </React.Fragment>
  );
};

export default MainContent;
