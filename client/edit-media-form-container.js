import { connect } from 'react-redux';
import { addMedia, deleteMedia, updateMedia } from './actions';
import EditMediaForm from './edit-media-form';

const mapStateToProps = (state, ownProps) => ({
  item: ownProps.match.params.index ? state.items[ownProps.match.params.index] : null
});

let mapDispatchToProps = (dispatch) => ({
  onSave: (item) => dispatch(item.id ? updateMedia(item) : addMedia(item)),
  onDelete: (id) => dispatch(deleteMedia(id))
});

let EditMediaFormContainer = connect(mapStateToProps, mapDispatchToProps)(EditMediaForm);

export default EditMediaFormContainer;
