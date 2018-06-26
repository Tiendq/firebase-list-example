import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListMediaFormContainer from './list-media-form-container';
import EditMediaFormContainer from './edit-media-form-container';
import SearchMediaFormContainer from './search-media-form-container';

function Root({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={ListMediaFormContainer} />
          <Route path="/create" component={EditMediaFormContainer} />
          <Route path="/edit/:index?" component={EditMediaFormContainer} />
          <Route path="/search" component={SearchMediaFormContainer} />
        </Switch>
      </Router>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
