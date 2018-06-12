import cuid from 'cuid';
import { ADD_FROM_NASA, ADD_MEDIA, DELETE_MEDIA, UPDATE_MEDIA } from './actions';

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
