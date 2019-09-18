import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import './index.css';
import App from './App';
import rootReducer from './reducer';

let defaultState = {
  loggedIn: false
}

let store = createStore(rootReducer, defaultState)

store.dispatch({ type: "something"})

ReactDOM.render(<App />, document.getElementById('root'));







// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
