import { connect } from 'react-redux';
import { editMedia, searchMedia } from './actions';
import ListMediaForm from './list-media-form';

let mapStateToProps = (state) => ({
  items: state.items.filter(item => false === item.deleted)
});

let mapDispatchToProps = (dispatch) => ({
  onAddItem: () => dispatch(editMedia(-1)),
  onAddItemFromNASA: () => dispatch(searchMedia()),
  onEditItem: (index) => dispatch(editMedia(index))
});

let ListMediaFormContainer = connect(mapStateToProps, mapDispatchToProps)(ListMediaForm);

export default ListMediaFormContainer;
