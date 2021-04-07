import { createContext, useContext, useState } from "react";

const AppContext = createContext(null); // Provider y Consumer
const Provider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const props = {
    posts,
    setPosts,
    loading,
    setLoading,
  };

  return <AppContext.Provider value={props}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }

  return context;
};

export { Provider, useAppContext };
