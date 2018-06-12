import React from 'react';
import PropTypes from 'prop-types';
import App from './app';
import MediaPreview from './media-preview';
import './list-media-form.scss';

class ListMediaForm extends React.Component {
  render() {
    return (
      <App>
        <div className="row list-media-form">
          <div className="col-12 form-actions">
            <button type="button" className="btn btn-success btn-add-item" onClick={this.handleAddItemClick}>Add</button>
            <button type="button" className="btn btn-success" onClick={this.handleAddItemFromNASAClick}>Add from NASA</button>
          </div>
        </div>
        <div className="row list-media-form">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th className="title-column">Title</th>
                  <th className="description-column">Description</th>
                  <th className="date-column">Created Date</th>
                  <th className="preview-column">Preview</th>
                  <th className="download-column">Download</th>
                </tr>
              </thead>
              <tbody>
                {this.props.items.map((item, index) => this.renderListItem(item, index))}
              </tbody>
            </table>
          </div>
        </div>
      </App>
    );
  }
  renderListItem = (item, index) => {
    return (
      <tr key={item.title.substr(0, 30)}>
        <td>
          <a href={`/edit/${index}`}>{item.title}</a>
        </td>
        <td>{item.description}</td>
        <td>{new Date(item.createdDate).toDateString()}</td>
        <td><MediaPreview mediaType={item.mediaType} url={item.url} /></td>
        <td><a href={item.url} className="btn btn-success">Download</a></td>
      </tr>
    );
  }
  handleAddItemClick = (event) => {
    event.preventDefault();
    location.href = '/create';
  }
  handleAddItemFromNASAClick = (event) => {
    event.preventDefault();
    location.href = '/search';
  }
}

ListMediaForm.propTypes = {
  items: PropTypes.array.isRequired
}

export default ListMediaForm;
