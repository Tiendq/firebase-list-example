import React from 'react';
import PropTypes from 'prop-types';
import './list-media-form.scss';

class ListMediaForm extends React.Component {
  render() {
    let { items, onAddItem, onAddItemFromNASA } = this.props;

    return (
      <React.Fragment>
        <div className="row list-media-form">
          <div className="col-12 form-actions">
            <button type="button" className="btn btn-success btn-add-item" onClick={onAddItem}>Add</button>
            <button type="button" className="btn btn-success" onClick={onAddItemFromNASA}>Add from NASA</button>
          </div>
        </div>
        <div className="row list-media-form">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Created Date</th>
                  <th>Preview</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => this.renderListItem(item, index))}
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
  renderListItem = (item, index) => {
    return (
      <tr key={item.title.substr(0, 30)}>
        <td>
          <a href="#" onClick={this.handleTitleClick} data-index={index}>{item.title}</a>
        </td>
        <td>{item.description}</td>
        <td>{new Date(item.createdDate).toDateString()}</td>
        <td>Preview</td>
        <td><button type="button" className="btn btn-success">Download</button></td>
      </tr>
    );
  }
  handleTitleClick = (event) => {
    event.preventDefault();
    this.props.onEditItem(Number(event.target.dataset.index));
  }
}

ListMediaForm.propTypes = {
  items: PropTypes.array.isRequired,
  onAddItem: PropTypes.func.isRequired,
  onAddItemFromNASA: PropTypes.func.isRequired,
  onEditItem: PropTypes.func.isRequired,
}

export default ListMediaForm;
