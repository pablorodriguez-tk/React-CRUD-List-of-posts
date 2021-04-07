import React, { useEffect } from "react";

import "./App.css";
import { useAppContext } from "./AppContext";
import MainContent from "./components/MainContent";
import { getPosts } from "./api/jsonplaceholder";
import Spinner from "./components/Spinner";

const App = () => {
  const { setPosts, loading, setLoading } = useAppContext();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await getPosts();
      setPosts(response.posts);
      setLoading(false);
    };
    fetchPosts();
  }, [setPosts, setLoading]);

  return (
    <React.Fragment>{loading ? <Spinner /> : <MainContent />}</React.Fragment>
  );
};

export default App;
