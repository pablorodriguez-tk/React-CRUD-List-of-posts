import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { CssBaseline, Grid } from "@material-ui/core";
import PostsList from "./pages/PostsList";

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid
        container
        xs={12}
        md={12}
        justify="center"
        alignItems="center"
        direction="column"
        spacing={2}
      >
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <PostsList />
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer />
      </Grid>
    </React.Fragment>
  );
};

export default App;
