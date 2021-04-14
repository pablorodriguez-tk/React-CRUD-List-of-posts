import { createMuiTheme, CssBaseline, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { getPosts } from "./api/jsonplaceholder";

import "./App.css";
import { useAppContext } from "./AppContext";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Post from "./pages/Post/Post";
import PostEditAndCreate from "./pages/PostEditAndCreate";
import PostList from "./pages/PostList";

import ErrorPage from "./pages/ErrorPage";
import { ThemeProvider, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "99vh",
  },
}));

const App = () => {
  const classes = useStyles();
  const history = useHistory();
  const { setPosts, setLoading, darkMode } = useAppContext();

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  useEffect(() => {
    setLoading(true);

    const handleGetPosts = async () => {
      const response = await getPosts();
      response.hasError ? history.push("/error") : setPosts(response.posts);
    };

    handleGetPosts();

    setLoading(false);
  }, [setPosts, setLoading, history]);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid
          className={classes.root}
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
              <Route exact path="/error" component={ErrorPage}></Route>
              <Route path="/create/post" component={PostEditAndCreate}></Route>
              <Route path="/post/:postId" component={Post}></Route>
              <Route path="/edit/:postId" component={PostEditAndCreate}></Route>
              <Route component={ErrorPage}></Route>
            </Switch>
          </BrowserRouter>
          <Footer />
        </Grid>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
