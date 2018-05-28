import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/app';

/*import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './scripts/reducers';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Configure redux-devtools: https://github.com/zalmoxisus/redux-devtools-extension
const store = createStore(combineReducers(reducers),
  composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)));

ReactDOM.render(<Provider store={store}><TwitterApp /></Provider>, document.getElementById('root'));
*/

ReactDOM.render(<App />, document.getElementById('root'));
