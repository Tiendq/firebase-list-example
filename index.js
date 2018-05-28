import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './client/reducers';
import { TaskList } from './client/constants';
import App from './client/app';

let initialState = {
  task: TaskList.LIST,
  items: []
}

let store = createStore(combineReducers(reducers), initialState);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
