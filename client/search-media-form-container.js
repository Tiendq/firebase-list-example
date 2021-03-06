import { connect } from 'react-redux';
import { addNasaMedia } from './actions';
import SearchMediaForm from './search-media-form';

let mapDispatchToProps = (dispatch) => ({
  onAddItem: (item) => {
    // console.log(item);
    dispatch(addNasaMedia(item));
  }
});

let SearchMediaFormContainer = connect(null, mapDispatchToProps)(SearchMediaForm);

export default SearchMediaFormContainer;
