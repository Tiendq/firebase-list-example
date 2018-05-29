import React from 'react';
import PropTypes from 'prop-types';
import { searchMediaByKeyword } from './nasa-library';
import MediaPreview from './media-preview';
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
          <form onSubmit={this.handleClickSubmit} className="col-12 search-form" noValidate>
            <div className="form-row">
              <div className="col-8">
                <input type="text" className="form-control" value={this.state.keyword} onChange={this.handleKeywordChange} maxLength="50" />
              </div>
              <div className="col-4">
                <button type="submit" className="btn btn-success">Search</button>
                <button type="button" className="btn btn-success" onClick={this.props.onCancel}>Cancel</button>
                {this.renderSearchStatus()}
              </div>
            </div>
          </form>
        </div>
        <div className="row search-media-form">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th className="title-column">Title</th>
                  <th className="description-column">Description</th>
                  <th className="date-column">Created Date</th>
                  <th className="preview-column">Preview</th>
                  <th className="download-column">Add</th>
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
        <td>{new Date(item.createdDate).toDateString()}</td>
        <td><MediaPreview mediaType={item.mediaType} url={item.url} /></td>
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
