import React from 'react';
import PropTypes from 'prop-types';
import { uploadFile } from './firebase-storage';
import './edit-media-form.scss';

class EditMediaForm extends React.Component {
  constructor(props) {
    super(props);

    if (props.item) {
      this.state = {
        ...props.item,
        error: false
      }
    } else {
      this.state = {
        title: '',
        description: '',
        error: false
      }
    }
  }
  render() {
    let formClass = this.state.error ? "col-12 was-validated" : "col-12";

    return (
      <div className="row edit-media-form">
        <form onSubmit={this.handleClickSubmit} className={formClass} noValidate>
          <div className="form-group">
            <button type="submit" className="btn btn-success">Save</button>
            <button type="button" className="btn btn-success" onClick={this.props.onCancel}>Cancel</button>
            {this.props.item && <button type="button" className="btn btn-danger" onClick={this.handleClickDelete}>Delete</button>}
          </div>
          <div className="form-group row">
            <label htmlFor="media_title" className="col-4 col-md-2 col-form-label">Title</label>
            <div className="col-8 col-md-10">
              <input type="text" id="media_title" className="form-control" value={this.state.title} onChange={this.handleTitleChange} maxLength="100" required />
              <div className="invalid-feedback">Title is required</div>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="media_description" className="col-4 col-md-2 col-form-label">Description</label>
            <div className="col-8 col-md-10">
              <textarea id="media_description" className="form-control" value={this.state.description} onChange={this.handleDescriptionChange} rows="5" maxLength="1000" required />
              <div className="invalid-feedback">Description is required</div>
            </div>
          </div>
          {!this.props.item && <div className="form-group row">
            <label htmlFor="media_file" className="col-4 col-md-2 col-form-label">Media file</label>
            <div className="col-8 col-md-10">
              <input type="file" id="media_file" ref={input => this.fileInput = input} className="form-control-file" accept="image/*, video/*, audio/*" />
            </div>
          </div>}
          {this.props.item && <div className="form-group row">
            <label className="col-4 col-md-2 col-form-label">Created date</label>
            <div className="col-8 col-md-10">{new Date(this.props.item.createdDate).toDateString()}</div>
          </div>}
          {this.props.item && <div className="form-group row">
            <label className="col-4 col-md-2 col-form-label">Preview</label>
            <div className="col-8 col-md-10">{this.props.item.url}</div>
          </div>}
        </form>
      </div>
    );
  }
  handleClickSubmit = async (event) => {
    event.preventDefault();

    if (!this.state.title.trim() || !this.state.description.trim()) {
      this.setState({ error: true });
      return false;
    }

    if (this.props.item) {
      this.props.onSave({
        ...this.props.item,
        title: this.state.title,
        description: this.state.description
      });
    } else {
      if (this.fileInput.files.length) {
        let file = this.fileInput.files[0];
        let fileInfo = await uploadFile(this.fileInput.files[0]);

        // console.log(fileInfo);

        let sep = file.type.indexOf('/');

        this.props.onSave({
          title: this.state.title,
          description: this.state.description,
          mediaType: file.type.substr(0, sep),
          url: fileInfo.url,
          createdDate: (new Date()).toISOString(),
          firebasePath: fileInfo.path
        });
      } else {
        this.props.onSave({
          title: this.state.title,
          description: this.state.description,
          mediaType: '',
          url: '',
          firebasePath: '',
          createdDate: (new Date()).toISOString()
        });
      }
    }
  }
  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  }
  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  }
  handleClickDelete = () => {
    if (this.props.item && window.confirm("Are you sure?"))
      this.props.onDelete(this.props.item.id);
  }
}

EditMediaForm.propTypes = {
  item: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default EditMediaForm;
