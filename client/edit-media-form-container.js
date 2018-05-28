import { connect } from 'react-redux';
import { listMedia, addNasaMedia } from './actions';
import EditMediaForm from './edit-media-form';

const mapStateToProps = (state) => ({
  items: state.items
});

let mapDispatchToProps = (dispatch) => ({
  onCancel: () => dispatch(listMedia()),
  onAddItem: (item) => dispatch(addNasaMedia(item))
});

let EditMediaFormContainer = connect(mapStateToProps, mapDispatchToProps)(EditMediaForm);

export default EditMediaFormContainer;
