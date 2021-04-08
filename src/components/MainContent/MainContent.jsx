import React from "react";
import Footer from "../Footer";
import { Header } from "../Header";
import { CssBaseline, Grid } from "@material-ui/core";
import PostList from "../../pages/PostList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PostEditAndCreate from "../../pages/PostEditAndCreate";
import Post from "../../pages/Post/Post";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  body: {},
}));

const MainContent = () => {
  const classes = useStyles();
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
            <Route exact path="/" component={PostList}></Route>
            <Route path="/create" component={PostEditAndCreate}></Route>
            <Route path="/post/:id" component={Post}></Route>
            <Route path="/edit/:id" component={PostEditAndCreate}></Route>
          </Switch>
        </BrowserRouter>
        <Footer />
      </Grid>
    </React.Fragment>
  );
};

export default MainContent;
