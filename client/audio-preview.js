import React from 'react';
import PropTypes from 'prop-types';
import './audio-preview.scss';

function AudioPreview({ url }) {
  return <audio src={url} className="audio-preview" controls />;
}

AudioPreview.propTypes = {
  url: PropTypes.string.isRequired
}

export default AudioPreview;
