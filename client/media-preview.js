import React from 'react';
import PropTypes from 'prop-types';
import ImagePreview from './image-preview';
import AudioPreview from './audio-preview';
import VideoPreview from './video-preview';
import './media-preview.scss';

function MediaPreview({ mediaType, url }) {
  switch (mediaType) {
    case 'image':
      return <ImagePreview url={url} />;

    case 'audio':
      return <AudioPreview url={url} />;

    case 'video':
      return <VideoPreview url={url} />;

    default:
      return null;
  }
}

MediaPreview.propTypes = {
  mediaType: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default MediaPreview;
