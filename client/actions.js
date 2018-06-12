// Generic sync action creator.
// http://redux.js.org/docs/recipes/ReducingBoilerplate.html
export const ADD_FROM_NASA = 'ADD_FROM_NASA';
export const ADD_MEDIA = 'ADD_MEDIA';
export const CLEAN_LIST = 'CLEAN_LIST';
export const DELETE_MEDIA = 'DELETE_MEDIA';
export const UPDATE_MEDIA = 'UPDATE_MEDIA';

export const addNasaMedia = makeActionCreatorWithObject(ADD_FROM_NASA);
export const addMedia = makeActionCreatorWithObject(ADD_MEDIA);
export const deleteMedia = makeActionCreator(DELETE_MEDIA, 'id');
export const cleanList = makeActionCreator(CLEAN_LIST);
export const updateMedia = makeActionCreatorWithObject(UPDATE_MEDIA);

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
    // console.log(data);
    return {
      type,
      ...data
    }
  }
}
