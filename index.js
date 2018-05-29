import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import throttle from 'lodash.throttle';
import * as reducers from './client/reducers';
import { TaskList } from './client/constants';
import App from './client/app';
import { loadData, saveData } from './client/firebase-database';

// Provide custom logger which prefixes log statements with "[FIREBASE]"
/*firebase.database.enableLogging(function(message) {
  console.log(`[FIREBASE] ${message}`);
});*/

loadData().then(items => start(items));

function start(items) {
  let initialState = {
    task: TaskList.LIST,
    editingIndex: -1,
    items
  }

  // console.log(initialState.items);

  let store = createStore(combineReducers(reducers), initialState);

  store.subscribe(throttle(() => {
    // console.log('changed');
    saveData(store.getState().items);
  }, 1000));

  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}
