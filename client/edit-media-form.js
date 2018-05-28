import React from 'react';
import PropTypes from 'prop-types';
import './edit-media-form.scss';

function EditMediaForm({ onSave, onCancel, onDelete }) {
  return (
    <div className="row edit-media-form">
      <form onSubmit={onSave} className="col-12">
        <input type="text" className="form-control" maxLength="50" />
        <button type="submit" className="btn btn-primary">Search</button>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}

EditMediaForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default EditMediaForm;
