import cuid from 'cuid';
import { ADD_FROM_NASA, EDIT_MEDIA, LIST_MEDIA, SEARCH_MEDIA } from './actions';
import { TaskList } from './constants';

export const task = (state = TaskList.LIST, action) => {
  switch (action.type) {
    case ADD_FROM_NASA:
      return TaskList.LIST;

    case EDIT_MEDIA:
      return TaskList.EDIT;

    case LIST_MEDIA:
      return TaskList.LIST;

    case SEARCH_MEDIA:
      return TaskList.SEARCH;

    default:
      return state;
  }
}

export const items = (state = [], action) => {
  switch (action.type) {
    case ADD_FROM_NASA:
      return [...state, createItemFromAction(action)];

    case LIST_MEDIA:
      return state;

    default:
      return state;
  }
}

let createItemFromAction = (action) => {
  let { type, ...rest } = action; // eslint-disable-line

  return {
    id: cuid(),
    ...rest
  }
}
