// Generic sync action creator.
// http://redux.js.org/docs/recipes/ReducingBoilerplate.html
function makeActionCreator(type, ...propNames) {
  return (...values) => {
    let action = { type };

    for (let index in propNames)
      action[propNames[index]] = values[index];

    return action;
  };
}

function makeActionCreatorWithObject(type) {
  return (data) => {
    console.log(data);
    return {
      type,
      ...data
    }
  }
}

export const ADD_FROM_NASA = 'ADD_FROM_NASA';
export const EDIT_MEDIA = 'EDIT_MEDIA';
export const LIST_MEDIA = 'LIST_MEDIA';
export const SEARCH_MEDIA = 'SEARCH_MEDIA';

export const addNasaMedia = makeActionCreatorWithObject(ADD_FROM_NASA);
export const editMedia = makeActionCreator(EDIT_MEDIA);
export const listMedia = makeActionCreator(LIST_MEDIA);
export const searchMedia = makeActionCreator(SEARCH_MEDIA);
