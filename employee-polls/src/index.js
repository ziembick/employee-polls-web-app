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
  <BrowserRouter>
  <Provider store={store} >
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById("root")
)