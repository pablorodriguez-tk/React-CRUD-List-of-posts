import { CssBaseline, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { getPosts } from "./api/jsonplaceholder";

import "./App.css";
import { useAppContext } from "./AppContext";
import { Header } from "./components/Header";
import Post from "./pages/Post/Post";
import PostEditAndCreate from "./pages/PostEditAndCreate";
import PostList from "./pages/PostList";

const App = () => {
  const { setPosts, setLoading } = useAppContext();

  useEffect(() => {
    setLoading(true);

    const handleGetPosts = async () => {
      const response = await getPosts();
      setPosts(response.posts);
    };
    handleGetPosts();

    setLoading(false);
  }, [setPosts, setLoading]);

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

export default App;
