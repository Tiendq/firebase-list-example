import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import throttle from 'lodash.throttle';
import * as reducers from './client/reducers';
import Root from './client/root';
import { loadData, saveData } from './client/firebase-database';

// Provide custom logger which prefixes log statements with "[FIREBASE]"
/*firebase.database.enableLogging(function(message) {
  console.log(`[FIREBASE] ${message}`);
});*/

loadData().then(items => start(items));

function start(items) {
  let initialState = {
    items
  }

  // console.log(initialState.items);

  let store = createStore(combineReducers(reducers), initialState);

  store.subscribe(throttle(() => {
    // console.log('changed');
    saveData(store.getState().items);
  }, 1000));

  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
}
