import React from 'react';
import PropTypes from 'prop-types';
import './video-preview.scss';

function VideoPreview({ url }) {
  return <video src={url} className="video-preview" controls />;
}

VideoPreview.propTypes = {
  url: PropTypes.string.isRequired
}

export default VideoPreview;
