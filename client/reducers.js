import cuid from 'cuid';
import { ADD_FROM_NASA, ADD_MEDIA, CLEAN_LIST, DELETE_MEDIA, EDIT_MEDIA, LIST_MEDIA, SEARCH_MEDIA, UPDATE_MEDIA } from './actions';
import { TaskList } from './constants';

export const editingIndex = (state = -1, action) => {
  switch (action.type) {
    case EDIT_MEDIA:
      return action.index;

    default:
      return state;
  }
}

export const task = (state = TaskList.LIST, action) => {
  switch (action.type) {
    case ADD_FROM_NASA:
      return TaskList.LIST;

    case ADD_MEDIA:
      return TaskList.LIST;

    case UPDATE_MEDIA:
      return TaskList.LIST;

    case DELETE_MEDIA:
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

    case ADD_MEDIA:
      return [...state, createItemFromAction(action)];

    case DELETE_MEDIA:
      return deleteMediaById(state, action.id);

    case UPDATE_MEDIA:
      return updateMedia(state, action);

    default:
      return state;
  }
}

let createItemFromAction = (action) => {
  let { type, ...rest } = action; // eslint-disable-line

  return {
    id: cuid(),
    deleted: false,
    ...rest
  }
}

let deleteMediaById = (items, id) => {
  return items.map(item => id !== item.id ? item : { ...item, deleted: true });
}

function updateMedia(items, action) {
  let { type, ...rest } = action; // eslint-disable-line
  return items.map(item => action.id !== item.id ? item : { ...rest });
}
