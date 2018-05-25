import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";

import store from "../js/store/index";
//import { addArticle } from "../js/actions/index";
//window.store = store;
//window.addArticle = addArticle;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
