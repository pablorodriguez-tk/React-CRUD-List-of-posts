import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { CssBaseline } from "@material-ui/core";
import PostsList from "./pages/PostsList";

const App = () => {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <PostsList />
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer />
      </React.Fragment>
    </div>
  );
};

export default App;
