import { createMuiTheme, CssBaseline, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { getPosts } from "./api/jsonplaceholder";

import { useAppContext } from "./AppContext";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Post from "./pages/Post/Post";
import PostEditAndCreate from "./pages/PostEditAndCreate";
import PostList from "./pages/PostList";

import ErrorPage from "./pages/ErrorPage";
import { ThemeProvider, makeStyles } from "@material-ui/core";
import { blue, pink } from "@material-ui/core/colors";

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
  const { posts, setPosts, setLoading, darkMode } = useAppContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: blue,
      secondary: pink,
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
  }, [history, setLoading, setPosts]);

  // Get Current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
              <Route
                exact
                path="/"
                component={() => (
                  <PostList
                    posts={currentPosts}
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                )}
              ></Route>
              <Route exact path="/error" component={ErrorPage}></Route>
              <Route path="/create/post" component={PostEditAndCreate}></Route>
              <Route
                path="/post/:postId"
                component={() => <Post posts={posts} />}
              ></Route>
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
