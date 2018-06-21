import { connectAdvanced } from 'react-redux';
import { addMedia, deleteMedia, updateMedia } from './actions';
import EditMediaForm from './edit-media-form';

// connectAdvanced(selectorFactory, [connectOptions])
// https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connectadvancedselectorfactory-connectoptions
let EditMediaFormContainer = connectAdvanced(selectorFactory)(EditMediaForm);

function selectorFactory(dispatch) {
  return (nextState, nextOwnProps) => ({
    item: nextOwnProps.match.params.index ? nextState.items[nextOwnProps.match.params.index] : null,
    onSave: (item) => dispatch(item.id ? updateMedia(item) : addMedia(item)),
    onDelete: (id) => dispatch(deleteMedia(id))
  });
}

export default EditMediaFormContainer;
