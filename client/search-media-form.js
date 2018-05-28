import React from 'react';
import PropTypes from 'prop-types';
import { searchMediaByKeyword } from './nasa-library';
import './search-media-form.scss';

class SearchMediaForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
      items: [],
      error: false,
      searching: false
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="row search-media-form">
          <form onSubmit={this.handleClickSubmit} className="col-12">
            <input type="text" className="form-control" value={this.state.keyword} onChange={this.handleKeywordChange} maxLength="50" />
            <button type="submit" className="btn btn-success">Search</button>
            <button type="button" className="btn btn-success" onClick={this.props.onCancel}>Cancel</button>
          </form>
        </div>
        <div className="row search-media-form">
          <div className="col-12">
            {this.renderSearchStatus()}
          </div>
        </div>
        <div className="row search-media-form">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Created Date</th>
                  <th>Preview</th>
                  <th>Add</th>
                </tr>
              </thead>
              <tbody>
                {this.state.items.map((item, index) => this.renderListItem(item, index))}
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
  renderSearchStatus = () => {
    if (this.state.searching)
      return <span>Searching...</span>;
    else if (this.state.error)
      return <span>Error!</span>;
    else
      return null;
  }
  renderListItem = (item, index) => {
    return (
      <tr key={item.title.substr(0, 30)}>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td>{item.createdDate.toDateString()}</td>
        <td>Preview</td>
        <td>
          <button type="button" className="btn btn-success" data-index={index} onClick={this.handleClickAddItem}>Add</button>
        </td>
      </tr>
    );
  }
  handleClickSubmit = async (event) => {
    event.preventDefault();

    if (this.state.keyword) {
      this.setState({ searching: true });

      let items = await searchMediaByKeyword(this.state.keyword);

      this.setState({ searching: false });

      if (!items)
        this.setState({ error: true });
      else
        this.setState({
          error: false,
          items
        });
    }
  }
  handleKeywordChange = (event) => {
    this.setState({ keyword: event.target.value.trim() });
  }
  handleClickAddItem = (event) => {
    event.preventDefault();
    this.props.onAddItem(this.state.items[Number(event.target.dataset.index)]);
  }
}

SearchMediaForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onAddItem: PropTypes.func.isRequired
}

export default SearchMediaForm;