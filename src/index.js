import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer from "./reducers";
import middleware from "./middleware";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(middleware));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
