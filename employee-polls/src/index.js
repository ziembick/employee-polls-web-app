import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from "redux"
import reducers from './reducers';
import middleware from './middleware';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const store = createStore(reducers, middleware)

ReactDOM.render (
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById("root")
)