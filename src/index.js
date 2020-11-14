import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { storeReducer} from './Reducers/index';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

let todos = ["andare a fare la spesa", "andare dal commercialista", "andare dal medico"];

let storeTodos  = [{id:0,todo:'todo1',completed:false}]

const store = createStore(storeReducer, { todos: [...todos] });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
