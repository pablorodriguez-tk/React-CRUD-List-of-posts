import React, { useEffect } from "react";

import "./App.css";
import { useAppContext } from "./AppContext";
import MainContent from "./components/MainContent";
import { getPosts } from "./api/jsonplaceholder";

const App = () => {
  const { posts, setPosts } = useAppContext();

  useEffect(async () => {
    // setIsLoading(true);
    const response = await getPosts();
    setPosts(response.posts);
    // setIsLoading(false);
  }, [setPosts]);

  return (
    <React.Fragment>
      <MainContent />
    </React.Fragment>
  );
};

export default App;
