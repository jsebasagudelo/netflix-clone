import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import App from "./routes/App";

import rootReducer from "./redux/rootReducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
