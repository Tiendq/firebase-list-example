import React from 'react';
import { connect } from 'react-redux';
import { TaskList } from './constants';
import EditMediaFormContainer from './edit-media-form-container';
import ListMediaFormContainer from './list-media-form-container';
import SearchMediaFormContainer from './search-media-form-container';

function ScreenManager({ task }) {
  switch (task) {
    case TaskList.EDIT:
      return <EditMediaFormContainer />;

    case TaskList.LIST:
      return <ListMediaFormContainer />;

    case TaskList.SEARCH:
      return <SearchMediaFormContainer />;

    default:
      return null;
  }
}

let mapStateToProps = (state) => ({
  task: state.task
});

let ScreenManagerContainer = connect(mapStateToProps)(ScreenManager);

export default ScreenManagerContainer;
