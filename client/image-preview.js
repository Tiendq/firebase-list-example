import React from 'react';
import PropTypes from 'prop-types';
import './image-preview.scss';

function ImagePreview({ url }) {
  return <img src={url} className="image-preview" />;
}

ImagePreview.propTypes = {
  url: PropTypes.string.isRequired
}

export default ImagePreview;
