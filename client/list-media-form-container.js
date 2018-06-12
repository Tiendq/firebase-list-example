import { connect } from 'react-redux';
import ListMediaForm from './list-media-form';

let mapStateToProps = (state) => ({
  items: state.items.filter(item => false === item.deleted)
});

let ListMediaFormContainer = connect(mapStateToProps)(ListMediaForm);

export default ListMediaFormContainer;
