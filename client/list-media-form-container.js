import { connect } from 'react-redux';
import { editMedia, searchMedia } from './actions';
import ListMediaForm from './list-media-form';

let mapStateToProps = (state) => ({
  items: state.items
});

let mapDispatchToProps = (dispatch) => ({
  onAddItem: () => dispatch(editMedia()),
  onAddItemFromNASA: () => dispatch(searchMedia()),
  onEditItem: (mediaId) => dispatch(editMedia(mediaId))
});

let ListMediaFormContainer = connect(mapStateToProps, mapDispatchToProps)(ListMediaForm);

export default ListMediaFormContainer;
