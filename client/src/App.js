import React from "react";
import Routes from "./Routes";
import configureStore, { history } from "./store";
import { Provider } from "react-redux";
import { Router } from "react-router";

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
