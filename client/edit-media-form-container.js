import { connect } from 'react-redux';
import { listMedia, addMedia, deleteMedia, updateMedia } from './actions';
import EditMediaForm from './edit-media-form';

const mapStateToProps = (state) => ({
  item: state.editingIndex >= 0 ? state.items[state.editingIndex] : null
});

let mapDispatchToProps = (dispatch) => ({
  onCancel: () => dispatch(listMedia()),
  onSave: (item) => dispatch(item.id ? updateMedia(item) : addMedia(item)),
  onDelete: (id) => dispatch(deleteMedia(id))
});

let EditMediaFormContainer = connect(mapStateToProps, mapDispatchToProps)(EditMediaForm);

export default EditMediaFormContainer;
