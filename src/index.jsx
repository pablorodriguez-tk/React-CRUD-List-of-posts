import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "./AppContext";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// anadir dark mode
